import {IInsightFacade, InsightDataset} from "./IInsightFacade";
import Log from "../Util";
import {Decimal} from "decimal.js";
import InsightFacade from "./InsightFacade";
import {createInterface} from "readline";

export class QueryFactory {

    public level: number = 0;

    constructor() {
        Log.trace("QueryFactory::init()");
    }

    // helper for perform logics, recursively solve logics
    public performLogics(logics: object, columns: string[], data: object[]): object[] {
        let res: object[] = [];
        let keys: string[] = Object.keys(logics);
        if (keys.length === 0) {
            return data;
        }
        for (const key of keys) {
            if (key === "AND") {
                this.level = 0; // reset level for AND
                const objectArray: object[] = (logics as any)[key];
                for (const object of objectArray) {
                    if (res.length === 0 && this.level === 0) {
                        res = this.performLogics(object, columns, data);
                    } else {
                        // start intersecting on the second filter
                        res = this.intersection(res, this.performLogics(object, columns, data));
                    }
                }
            } else if (key === "OR") {
                this.level = 1;
                const objectArray: object[] = (logics as any)[key];
                for (const object of objectArray) {
                    res = this.union(res, this.performLogics(object, columns, data));
                }
            } else if (key === "IS") {
                this.level = 1;
                res = this.filterIS((logics as any)[key], data);
            } else if (key === "GT" || key === "EQ" || key === "LT") {
                this.level = 1;
                res = this.filterComp(key, (logics as any)[key], data);
            } else if (key === "NOT") {
                this.level = 1;
                res = this.exclude(this.performLogics((logics as any)[key], columns, data), data);
            }
        }
        return res;
    }

    // helper functions that returns the intersection of two arrays (could use lambda but im just lazy)
    public intersection(a1: any[], a2: any[]): any[] {
        let res: any[] = [];
        for (let obj of a1) {
            if (a2.includes(obj)) {
                res.push(obj);
            }
        }
        return res;
    }

    // helper functions that returns the union of two arrays (could use lambda but im just lazy)
    public union(a1: object[], a2: object[]): object[] {
        let res: any[] = a1;
        for (let i in a2) {
            if (!a1.includes(a2[i])) {
                res.push(a2[i]);
            }
        }
        return res;
    }

    // helper function that excludes a1 from data, both are object arrays
    public exclude(a1: object[], data: object[]): object[] {
        const res = Object.assign([], data); // cloning instead of pointing directly to it
        for (const obj of a1) {
            if (res.includes(obj)) {
                const idx: number = res.indexOf(obj);
                res.splice(idx, 1);
            }
        }
        return res;
    }

    public filterIS(obj: object, data: object[]): object[] {
        let res: object[] = [];
        let keyIS: string = Object.keys(obj)[0];
        let valIS: any = Object.values(obj)[0];
        for (const object of data) {
            let objectArray: object[] = [];
            if (valIS.endsWith("*") && valIS.startsWith("*")
                && (object as any)[keyIS].includes(valIS.split("*").join(""))) { // both *
                objectArray.push(object);
                res = this.union(res, objectArray);
            } else if (valIS.endsWith("*") &&
                (object as any)[keyIS].startsWith(valIS.replace("*", ""))) { // right *
                objectArray.push(object);
                res = this.union(res, objectArray);
            } else if (valIS.startsWith("*") &&
                (object as any)[keyIS].endsWith(valIS.replace("*", ""))) { // left *
                objectArray.push(object);
                res = this.union(res, objectArray);
            } else if ((object as any)[keyIS] === valIS) {
                objectArray.push(object);
                res = this.union(res, objectArray);
            }
        }
        return res;
    }

    // helper function for filtering with GT, EQ and LT
    public filterComp(sign: string, query: object, data: object[]): object[] {
        let res: object[] = [];
        let filterKey: string = Object.keys(query)[0]; // key in filter
        let filterVal: number = Object.values(query)[0]; // value of filter
        // for each section object
        for (const obj of data) {
            switch (sign) {
                case "GT" : {
                    if ((obj as any)[filterKey] > filterVal) {
                        res.push(obj);
                    }
                    break;
                }
                case "EQ": {
                    if ((obj as any)[filterKey] === filterVal) {
                        res.push(obj);
                    }
                    break;
                }
                case "LT": {
                    if ((obj as any)[filterKey] < filterVal) {
                        res.push(obj);
                    }
                    break;
                }
            }
        }
        return res;
    }

    public performTrans(trans: any, result: object[]): object[] {
        let res: object[] = [];
        let groupCol: string[] = trans["GROUP"];
        let appRules: object[] = trans["APPLY"];

        let groupedData: object = this.divideGroups(result, groupCol);
        let combKeys: string[] = Object.keys(groupedData);
        for (let combKey of combKeys) {
            let groupedObj: object = {}; // object to be output from this group
            let obj0: object = (groupedData as any)[combKey][0];  // obj0 is the first object in the group
            // build groupedObj with the group columns
            for (let col of groupCol) {
                (groupedObj as any)[col] = (obj0 as any)[col];
            }
            // build groupedObj with the applyKey columns
            for (let rule of appRules) {
                let appKey: string = Object.keys(rule)[0];
                (groupedObj as any)[appKey] = this.performApply((rule as any)[appKey], (groupedData as any)[combKey]);
            }
            res.push(groupedObj);
        }
        return res;
    }

    // divide resulting data into groups based on groupColumns
    public divideGroups(data: object[], groupCol: string[]): object {
        let res: object = {};

        for (let obj of data) {
            let combKey: string = this.getCombString(obj, groupCol); // get combinationKey
            if ((res as any)[combKey] === undefined) {  // if combinationKey is new, create this attribute with array
                (res as any)[combKey] = [];
                (res as any)[combKey].push(obj);
            } else {                                    // if combinationKey has already existed, add to that array
                (res as any)[combKey].push(obj);
            }
        }
        return res;
    }

    // get the combination key of an object, made by group-by columns values
    public getCombString(obj: object, groupCol: string[]): string {
        let res: string = "";
        for (let col of groupCol) {
            res = res + String((obj as any)[col]);
        }
        return res;
    }

    public performApply(rule: object, group: object[]): number {
        let token: string = Object.keys(rule)[0];
        let key: any = Object.values(rule)[0];
        let dataArray: any[] = [];
        for (let obj of group) {
            dataArray.push((obj as any)[key]);  // store all data of desired column into an array for operation
        }

        if (token === "COUNT") {
            return this.countHelper(dataArray);
        } else if (token === "MAX") {
            return Math.max(...dataArray);
        } else if (token === "MIN") {
            return Math.min(...dataArray);
        } else if (token === "AVG") {
            let sum: Decimal = new Decimal(0);
            for (let data of dataArray) {
                let thisNum = new Decimal(data);
                sum = Decimal.add(sum, thisNum);
            }
            let avg = sum.toNumber() / dataArray.length;
            return Number(avg.toFixed(2));
        } else if (token === "SUM") {
            let sum: Decimal = new Decimal(0);
            for (let data of dataArray) {
                let thisNum = new Decimal(data);
                sum = Decimal.add(sum, thisNum);
            }
            return Number(sum.toFixed(2));
        }
    }

    // count the number of unique elements of an array
    public countHelper(dataArray: any[]): number {
        let res: any[] = [];
        for (let data of dataArray) {
            if (!res.includes(data)) {
                res.push(data);
            }
        }
        return res.length;
    }

    // perform query: helper to sort the results based on order-by columns
    public sortResult(result: object[], order: any): object[] {
        let orderCols: string[] = [];
        let descend: boolean = false; // ascending order by default

        if (typeof order === "string") {
            orderCols.push(order);
        } else {
            if (order["dir"] === "DOWN") {
                descend = true;
            }
            orderCols = order["keys"];
        }

        for (let i = orderCols.length - 1; i >= 0; i--) {  // doing in reverse order to break ties
            let col: string = orderCols[i];
            result = this.insertionSort(result, col, descend);
        }
        return result;
    }

    public insertionSort(result: object[], col: string, descend: boolean): object[] {
        let current: object;
        let j: number;
        function cmp(a: any, b: any): boolean {
            if (descend) {
                return a < b;
            } else {
                return a > b;
            }
        }

        for (let i = 1; i < result.length; i += 1) {
            current = result[i];
            j = i - 1;
            while (j >= 0 && cmp((result[j] as any)[col], (current as any)[col])) {
                result[j + 1] = result[j];
                j -= 1;
            }
            result[j + 1] = current;
        }
        return result;
    }

    // perform query: helper to filter columns
    public filterColumn(result: object[], columns: string[]): object[] {
        let filteredResult = []; // filtered array of ones specified in columns
        for (const section of result) { // for each section in result
            let filteredSection: any = {}; // object of filtered section
            for (const column of columns) { // for each column in specified columns
                filteredSection[column] = (section as any)[column]; // add property to filtered section
            }
            filteredResult.push(filteredSection); // add object to filtered result
        }
        return filteredResult;
    }
}
