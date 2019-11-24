"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../Util");
const QueryUtil_1 = require("./QueryUtil");
class QueryValidator {
    constructor() {
        Util_1.default.trace("QueryValidator::init()");
    }
    init() {
        this.id = "";
        this.ids = [];
        this.columnKeys = [];
        this.colApplyKeys = [];
        this.orderApplyKeys = [];
        this.transGroupKeys = [];
        this.transApplyKeys = [];
    }
    getType(id, datasets) {
        for (const ds of datasets) {
            if (ds.id === this.id) {
                return ds.kind;
            }
        }
        return null;
    }
    isOverallValid(query, datasets) {
        let keys = Object.keys(query);
        if (keys.length !== 2 && keys.length !== 3) {
            return false;
        }
        else if (!keys.includes("WHERE") || !keys.includes("OPTIONS")) {
            return false;
        }
        else {
            this.id = QueryUtil_1.default.getID(query["WHERE"]) === null ?
                QueryUtil_1.default.getID(query["OPTIONS"]) : QueryUtil_1.default.getID(query["WHERE"]);
        }
        this.ids = QueryUtil_1.default.getListofID(datasets);
        if (!this.ids.includes(this.id) || this.id === null || this.id === undefined) {
            return false;
        }
        this.type = this.getType(this.id, datasets);
        if (this.type === null || this.type === undefined) {
            return false;
        }
        let res = this.isLogicValid(query["WHERE"]) && this.isOptionsValid(query["OPTIONS"])
            && this.isTransformationValid(query["TRANSFORMATIONS"]);
        return res && this.isSemanticsValid();
    }
    isLogicValid(query) {
        let res = true;
        let keys = Object.keys(query);
        if (keys.length === 0) {
            return true;
        }
        for (const item of keys) {
            if (item === "OR" || item === "AND") {
                if (!Array.isArray(query[item]) || query[item].length === 0) {
                    return false;
                }
                for (const val of query[item]) {
                    if (typeof val !== "object" || val === null || val === undefined
                        || Object.keys(val).length === 0) {
                        return false;
                    }
                    res = res && this.isLogicValid(val);
                }
            }
            else if (item === ("NOT")) {
                if (Object.keys(query[item]).length !== 1) {
                    return false;
                }
                else {
                    res = res && this.isLogicValid(query[item]);
                }
            }
            else if (item === ("IS")) {
                res = res && QueryUtil_1.default.checkISorCOMP(query[item], "IS", this.id, this.type);
            }
            else if (item === "GT" || item === "LT" || item === "EQ") {
                res = res && QueryUtil_1.default.checkISorCOMP(query[item], "COMP", this.id, this.type);
            }
            else {
                return false;
            }
        }
        return res;
    }
    isOptionsValid(query) {
        let keys = Object.keys(query);
        for (const key of keys) {
            if (key !== "COLUMNS" && key !== "ORDER") {
                return false;
            }
        }
        if (!keys.includes("COLUMNS")) {
            return false;
        }
        let columns = query["COLUMNS"];
        if (columns.length === 0) {
            return false;
        }
        for (const col of columns) {
            if (typeof col !== "string") {
                return false;
            }
            if (!QueryUtil_1.default.isKeyValid(col, this.id, this.type)) {
                this.colApplyKeys.push(col);
            }
            this.columnKeys.push(col);
        }
        if (keys.includes("ORDER")) {
            return this.isOrderValid(query["ORDER"]);
        }
        else {
            return true;
        }
    }
    isOrderValid(query) {
        if (typeof query === "string") {
            if (!this.columnKeys.includes(query)) {
                return false;
            }
            else if (!QueryUtil_1.default.isKeyValid(query, this.id, this.type)) {
                this.orderApplyKeys.push(query);
            }
        }
        else if (typeof query === "object") {
            let keys = Object.keys(query);
            for (const key of keys) {
                if (key !== "dir" && key !== "keys") {
                    return false;
                }
            }
            if (!keys.includes("dir") || !keys.includes("keys")) {
                return false;
            }
            if (query["dir"] !== "UP" && query["dir"] !== "DOWN") {
                return false;
            }
            if (!Array.isArray(query["keys"])) {
                return false;
            }
            else {
                for (const key of query["keys"]) {
                    if (!this.columnKeys.includes(key)) {
                        return false;
                    }
                    else if (!QueryUtil_1.default.isKeyValid(key, this.id, this.type)) {
                        this.orderApplyKeys.push(key);
                    }
                }
            }
        }
        return true;
    }
    isTransformationValid(query) {
        if (query === null || query === undefined) {
            return true;
        }
        let keys = Object.keys(query);
        if (!keys.includes("GROUP") || !keys.includes("APPLY")) {
            return false;
        }
        if (!Array.isArray(query["GROUP"])) {
            return false;
        }
        else if (query["GROUP"].length === 0) {
            return false;
        }
        else {
            for (const col of query["GROUP"]) {
                if (typeof col !== "string") {
                    return false;
                }
                else if (!QueryUtil_1.default.isKeyValid(col, this.id, this.type)) {
                    return false;
                }
                this.transGroupKeys.push(col);
            }
        }
        if (!Array.isArray(query["APPLY"])) {
            return false;
        }
        else {
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
    isApplyValid(obj) {
        let keys = Object.keys(obj);
        if (keys.length !== 1) {
            return false;
        }
        let applyKey = keys[0];
        if (this.transApplyKeys.includes(applyKey) || !this.columnKeys.includes(applyKey)
            || applyKey.includes("_")) {
            return false;
        }
        else {
            this.transApplyKeys.push(applyKey);
        }
        let definition = obj[applyKey];
        let defKey = Object.keys(definition);
        if (defKey.length !== 1) {
            return false;
        }
        else if (defKey[0] !== "MAX" && defKey[0] !== "MIN" && defKey[0] !== "AVG"
            && defKey[0] !== "COUNT" && defKey[0] !== "SUM") {
            return false;
        }
        let defValue = definition[defKey[0]];
        if (typeof defValue !== "string") {
            return false;
        }
        let field = defValue.substring(defValue.indexOf("_") + 1, defValue.length);
        if (defKey[0] === "COUNT") {
            return QueryUtil_1.default.isKeyValid(defValue, this.id, this.type);
        }
        else {
            let res = field === "lat" || field === "lon" || field === "seats"
                || field === "avg" || field === "pass" || field === "fail" || field === "audit" || field === "year";
            return res && QueryUtil_1.default.isKeyValid(defValue, this.id, this.type);
        }
    }
    isSemanticsValid() {
        if (this.transGroupKeys.length !== 0 || this.transApplyKeys.length !== 0) {
            for (const key of this.columnKeys) {
                if (!this.transGroupKeys.includes(key) && !this.transApplyKeys.includes(key)) {
                    return false;
                }
            }
        }
        for (const key of this.colApplyKeys) {
            if (!this.transApplyKeys.includes(key)) {
                return false;
            }
        }
        return true;
    }
}
exports.QueryValidator = QueryValidator;
//# sourceMappingURL=QueryValidator.js.map