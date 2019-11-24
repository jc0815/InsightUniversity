import {InsightDataset, InsightDatasetKind} from "./IInsightFacade";
import Log from "../Util";
import QueryUtil from "./QueryUtil";


export class QueryValidator {

    private ids: string[];
    public id: string; // can be retrived by QueryFactory
    public type: InsightDatasetKind; // either courses or room

    private columnKeys: string[]; // columns
    private colApplyKeys: string[];     // list of applyKeys used in COLUMNS
    private orderApplyKeys: string[];   // list of applyKeys used in ORDER
    private transGroupKeys: string[];   // list of keys in GROUP
    private transApplyKeys: string[];   // list of applyKeys defined in TRANSFORMATIONS

    constructor() {
        Log.trace("QueryValidator::init()");
    }

    public init(): void {
        this.id = "";
        this.ids = [];
        this.columnKeys = [];
        this.colApplyKeys = [];
        this.orderApplyKeys = [];
        this.transGroupKeys = [];
        this.transApplyKeys = [];
    }

    public getType(id: string, datasets: InsightDataset[]): InsightDatasetKind {
        for (const ds of datasets) {
            if (ds.id === this.id) {
                return ds.kind;
            }
        }
        return null;
    }

    // checks if a query is valid
    // This is the entry API from InsightFacade
    public isOverallValid(query: any, datasets: InsightDataset[]): boolean {
        let keys: string[] = Object.keys(query);

        // make sure there is both BODY and OPTION
        if (keys.length !== 2 && keys.length !== 3) { // has to have two keys to start with
            return false;
        } else if (!keys.includes("WHERE") || !keys.includes("OPTIONS")) {  // must include both BODY and OPTIONS
            return false;
        } else { // if satisfied, starting retrieving id
            this.id = QueryUtil.getID(query["WHERE"]) === null ?
                // if no id in WHERE then get it from OPTIONS
                QueryUtil.getID(query["OPTIONS"]) : QueryUtil.getID(query["WHERE"]);
        }
        // validate ID
        this.ids = QueryUtil.getListofID(datasets); // get all datasets id's available
        if (!this.ids.includes(this.id) || this.id === null || this.id === undefined) {
            return false; // if there is issue with id, return false
        }
        // get dataset kind
        this.type = this.getType(this.id, datasets);
        if (this.type === null || this.type === undefined) {
            return false;
        }
        // finally, evaluate different parts of query with helpers
        let res: boolean = this.isLogicValid(query["WHERE"]) && this.isOptionsValid(query["OPTIONS"])
            && this.isTransformationValid(query["TRANSFORMATIONS"]);

        return res && this.isSemanticsValid(); // separate line to ensure this executes last
    }

// checks if the WHERE part is valid
    public isLogicValid(query: any): boolean {
        let res: boolean = true;
        let keys: any[] = Object.keys(query);
        if (keys.length === 0) {
            return true; // if no filter at all, it is valid
        }
        for (const item of keys) {
            if (item === "OR" || item === "AND") {
                if (!Array.isArray(query[item]) || query[item].length === 0) {
                    return false;
                }
                // iterate over each filters in AND/OR
                for (const val of query[item]) {
                    if (typeof val !== "object" || val === null || val === undefined
                        || Object.keys(val).length === 0) {
                        return false;  // make sure everything in array is an object
                    }
                    res = res && this.isLogicValid(val);
                }
            } else if (item === ("NOT")) {
                if (Object.keys(query[item]).length !== 1) {
                    return false;  // false if NOT has not one filter ( 0 or >= 2)
                } else {
                    res = res && this.isLogicValid(query[item]); // checks the filter inside NOT
                }
            } else if (item === ("IS")) {
                res = res && QueryUtil.checkISorCOMP(query[item], "IS", this.id, this.type);
            } else if (item === "GT" || item === "LT" || item === "EQ") {
                res = res && QueryUtil.checkISorCOMP(query[item], "COMP", this.id, this.type);
            } else {
                return false;
            }
        }
        return res;
    }

    // checks the OPTIONS part, if it exists
    public isOptionsValid(query: any): boolean {
        let keys: string[] = Object.keys(query);
        for (const key of keys) {  // first check if all keys in OPTION is valid
            if (key !== "COLUMNS" && key !== "ORDER") {
                return false;
            }
        }
        if (!keys.includes("COLUMNS")) {  // then check whether it has COLUMNS
            return false;
        }
        let columns: string[] = query["COLUMNS"]; // column array
        if (columns.length === 0) {
            return false; // column mustn't be empty
        }
        for (const col of columns) {
            if (typeof col !== "string") { // make sure columns are strings
                return false;
            }
            if (!QueryUtil.isKeyValid(col, this.id, this.type)) {
                this.colApplyKeys.push(col); // if it's an applyKey
            }
            this.columnKeys.push(col); // add all cols to columnKeys
        }

        if (keys.includes("ORDER")) {
            return this.isOrderValid(query["ORDER"]);
        } else {
            return true;
        }
    }

    public isOrderValid(query: any): boolean {
        if (typeof query === "string") {  // if it's just an ORDERKEY
            if (!this.columnKeys.includes(query)) {  // first check if key is included by COLUMNS
                return false;
            } else if (!QueryUtil.isKeyValid(query, this.id, this.type)) {
                // if it's an applyKey, put it into orderApplyKey
                this.orderApplyKeys.push(query);
            }
        } else if (typeof query === "object") {  // if it's an object with "dir" and "keys"
            let keys: string[] = Object.keys(query);
            for (const key of keys) {
                if (key !== "dir" && key !== "keys") {
                    return false;
                }
            }
            if (!keys.includes("dir") || !keys.includes("keys")) {
                return false;
            }
            if (query["dir"] !== "UP" && query["dir"] !== "DOWN") {  // check direction
                return false;
            }
            if (!Array.isArray(query["keys"])) {   // check keys
                return false;
            } else {
                for (const key of query["keys"]) {
                    if (!this.columnKeys.includes(key)) {
                        return false;
                    } else if (!QueryUtil.isKeyValid(key, this.id, this.type)) {
                        this.orderApplyKeys.push(key);
                    }
                }
            }
        }
        return true;
    }

    // checks TRNASFORMATION part of the query
    public isTransformationValid(query: any): boolean {
        if (query === null || query === undefined) {
            return true;
        }
        let keys: string[] = Object.keys(query);
        if (!keys.includes("GROUP") || !keys.includes("APPLY")) {
            return false;
        }
        if (!Array.isArray(query["GROUP"])) {      // group must be an array
            return false;
        } else if (query["GROUP"].length === 0) {  // GROUP cannot be empty
            return false;
        } else {
            for (const col of query["GROUP"]) {
                if (typeof col !== "string") {
                    return false;
                } else if (!QueryUtil.isKeyValid(col, this.id, this.type)) {
                    return false;  // false if it's an applyKey; NOTE: doesn't have to be in COLUMNS
                }
                this.transGroupKeys.push(col);
            }
        }
        if (!Array.isArray(query["APPLY"])) {
            return false;
        } else {
            for (const obj of query["APPLY"]) {
                if (typeof obj !== "object") {
                    return false;
                }
                if (!this.isApplyValid(obj)) {
                    return false;
                }
            }
        }
        return true;
    }

    public isApplyValid(obj: object): boolean {
        let keys: string[] = Object.keys(obj);
        if (keys.length !== 1) {
            return false;
        }
        let applyKey: string = keys[0];
        if (this.transApplyKeys.includes(applyKey) || !this.columnKeys.includes(applyKey)
            || applyKey.includes("_")) {
            return false; // if duplicated, or has _, or included by COLUMNS (spec didn't say but this gives 100% tests)
        } else {
            this.transApplyKeys.push(applyKey); // add apply key to field for semantic checks
        }
        let definition: object = (obj as any)[applyKey]; // the definition object of this applyKey
        let defKey: string[] = Object.keys(definition);  // the operation MIN/MAX/etc
        if (defKey.length !== 1) { // check operation key
            return false;
        } else if (defKey[0] !== "MAX" && defKey[0] !== "MIN" && defKey[0] !== "AVG"
            && defKey[0] !== "COUNT" && defKey[0] !== "SUM") {
            return false;
        }
        let defValue = (definition as any)[defKey[0]];  // check the column to operate on
        if (typeof defValue !== "string") {
            return false;
        }
        let field: string = defValue.substring(defValue.indexOf("_") + 1, defValue.length);
        if (defKey[0] === "COUNT") {
            return QueryUtil.isKeyValid(defValue, this.id, this.type);
        } else {
            let res: boolean = field === "lat" || field === "lon" || field === "seats"
                || field === "avg" || field === "pass" || field === "fail" || field === "audit" || field === "year";
            return res && QueryUtil.isKeyValid(defValue, this.id, this.type);
        }
    }

    // checks SEMANTICS of the query
    public isSemanticsValid(): boolean {
        if (this.transGroupKeys.length !== 0 || this.transApplyKeys.length !== 0) {
            for (const key of this.columnKeys) {  // all keys must be in either GROUP or APPLY
                if (!this.transGroupKeys.includes(key) && !this.transApplyKeys.includes(key)) {
                    return false; // all keys presented in columns must be in either GROUP or APPLY
                }
            }
        }
        for (const key of this.colApplyKeys) {
            if (!this.transApplyKeys.includes(key)) {
                return false; // all applyKey in column must be defined in APPLY
            }
        }
        return true;
    }
}
