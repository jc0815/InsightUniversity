"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../Util");
const decimal_js_1 = require("decimal.js");
class QueryFactory {
    constructor() {
        this.level = 0;
        Util_1.default.trace("QueryFactory::init()");
    }
    performLogics(logics, columns, data) {
        let res = [];
        let keys = Object.keys(logics);
        if (keys.length === 0) {
            return data;
        }
        for (const key of keys) {
            if (key === "AND") {
                this.level = 0;
                const objectArray = logics[key];
                for (const object of objectArray) {
                    if (res.length === 0 && this.level === 0) {
                        res = this.performLogics(object, columns, data);
                    }
                    else {
                        res = this.intersection(res, this.performLogics(object, columns, data));
                    }
                }
            }
            else if (key === "OR") {
                this.level = 1;
                const objectArray = logics[key];
                for (const object of objectArray) {
                    res = this.union(res, this.performLogics(object, columns, data));
                }
            }
            else if (key === "IS") {
                this.level = 1;
                res = this.filterIS(logics[key], data);
            }
            else if (key === "GT" || key === "EQ" || key === "LT") {
                this.level = 1;
                res = this.filterComp(key, logics[key], data);
            }
            else if (key === "NOT") {
                this.level = 1;
                res = this.exclude(this.performLogics(logics[key], columns, data), data);
            }
        }
        return res;
    }
    intersection(a1, a2) {
        let res = [];
        for (let obj of a1) {
            if (a2.includes(obj)) {
                res.push(obj);
            }
        }
        return res;
    }
    union(a1, a2) {
        let res = a1;
        for (let i in a2) {
            if (!a1.includes(a2[i])) {
                res.push(a2[i]);
            }
        }
        return res;
    }
    exclude(a1, data) {
        const res = Object.assign([], data);
        for (const obj of a1) {
            if (res.includes(obj)) {
                const idx = res.indexOf(obj);
                res.splice(idx, 1);
            }
        }
        return res;
    }
    filterIS(obj, data) {
        let res = [];
        let keyIS = Object.keys(obj)[0];
        let valIS = Object.values(obj)[0];
        for (const object of data) {
            let objectArray = [];
            if (valIS.endsWith("*") && valIS.startsWith("*")
                && object[keyIS].includes(valIS.split("*").join(""))) {
                objectArray.push(object);
                res = this.union(res, objectArray);
            }
            else if (valIS.endsWith("*") &&
                object[keyIS].startsWith(valIS.replace("*", ""))) {
                objectArray.push(object);
                res = this.union(res, objectArray);
            }
            else if (valIS.startsWith("*") &&
                object[keyIS].endsWith(valIS.replace("*", ""))) {
                objectArray.push(object);
                res = this.union(res, objectArray);
            }
            else if (object[keyIS] === valIS) {
                objectArray.push(object);
                res = this.union(res, objectArray);
            }
        }
        return res;
    }
    filterComp(sign, query, data) {
        let res = [];
        let filterKey = Object.keys(query)[0];
        let filterVal = Object.values(query)[0];
        for (const obj of data) {
            switch (sign) {
                case "GT": {
                    if (obj[filterKey] > filterVal) {
                        res.push(obj);
                    }
                    break;
                }
                case "EQ": {
                    if (obj[filterKey] === filterVal) {
                        res.push(obj);
                    }
                    break;
                }
                case "LT": {
                    if (obj[filterKey] < filterVal) {
                        res.push(obj);
                    }
                    break;
                }
            }
        }
        return res;
    }
    performTrans(trans, result) {
        let res = [];
        let groupCol = trans["GROUP"];
        let appRules = trans["APPLY"];
        let groupedData = this.divideGroups(result, groupCol);
        let combKeys = Object.keys(groupedData);
        for (let combKey of combKeys) {
            let groupedObj = {};
            let obj0 = groupedData[combKey][0];
            for (let col of groupCol) {
                groupedObj[col] = obj0[col];
            }
            for (let rule of appRules) {
                let appKey = Object.keys(rule)[0];
                groupedObj[appKey] = this.performApply(rule[appKey], groupedData[combKey]);
            }
            res.push(groupedObj);
        }
        return res;
    }
    divideGroups(data, groupCol) {
        let res = {};
        for (let obj of data) {
            let combKey = this.getCombString(obj, groupCol);
            if (res[combKey] === undefined) {
                res[combKey] = [];
                res[combKey].push(obj);
            }
            else {
                res[combKey].push(obj);
            }
        }
        return res;
    }
    getCombString(obj, groupCol) {
        let res = "";
        for (let col of groupCol) {
            res = res + String(obj[col]);
        }
        return res;
    }
    performApply(rule, group) {
        let token = Object.keys(rule)[0];
        let key = Object.values(rule)[0];
        let dataArray = [];
        for (let obj of group) {
            dataArray.push(obj[key]);
        }
        if (token === "COUNT") {
            return this.countHelper(dataArray);
        }
        else if (token === "MAX") {
            return Math.max(...dataArray);
        }
        else if (token === "MIN") {
            return Math.min(...dataArray);
        }
        else if (token === "AVG") {
            let sum = new decimal_js_1.Decimal(0);
            for (let data of dataArray) {
                let thisNum = new decimal_js_1.Decimal(data);
                sum = decimal_js_1.Decimal.add(sum, thisNum);
            }
            let avg = sum.toNumber() / dataArray.length;
            return Number(avg.toFixed(2));
        }
        else if (token === "SUM") {
            let sum = new decimal_js_1.Decimal(0);
            for (let data of dataArray) {
                let thisNum = new decimal_js_1.Decimal(data);
                sum = decimal_js_1.Decimal.add(sum, thisNum);
            }
            return Number(sum.toFixed(2));
        }
    }
    countHelper(dataArray) {
        let res = [];
        for (let data of dataArray) {
            if (!res.includes(data)) {
                res.push(data);
            }
        }
        return res.length;
    }
    sortResult(result, order) {
        let orderCols = [];
        let descend = false;
        if (typeof order === "string") {
            orderCols.push(order);
        }
        else {
            if (order["dir"] === "DOWN") {
                descend = true;
            }
            orderCols = order["keys"];
        }
        for (let i = orderCols.length - 1; i >= 0; i--) {
            let col = orderCols[i];
            result = this.insertionSort(result, col, descend);
        }
        return result;
    }
    insertionSort(result, col, descend) {
        let current;
        let j;
        function cmp(a, b) {
            if (descend) {
                return a < b;
            }
            else {
                return a > b;
            }
        }
        for (let i = 1; i < result.length; i += 1) {
            current = result[i];
            j = i - 1;
            while (j >= 0 && cmp(result[j][col], current[col])) {
                result[j + 1] = result[j];
                j -= 1;
            }
            result[j + 1] = current;
        }
        return result;
    }
    filterColumn(result, columns) {
        let filteredResult = [];
        for (const section of result) {
            let filteredSection = {};
            for (const column of columns) {
                filteredSection[column] = section[column];
            }
            filteredResult.push(filteredSection);
        }
        return filteredResult;
    }
}
exports.QueryFactory = QueryFactory;
//# sourceMappingURL=QueryFactory.js.map