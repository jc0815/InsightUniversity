"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IInsightFacade_1 = require("./IInsightFacade");
class QueryUtil {
    static getListofID(datasets) {
        let res = [];
        for (const index in datasets) {
            res.push(datasets[Number(index)].id);
        }
        return res;
    }
    static getID(query) {
        for (const key of Object.keys(query)) {
            if (key === "AND" || key === "OR") {
                if (!Array.isArray(query[key])) {
                    return null;
                }
                for (const object of query[key]) {
                    if (object === null || object === undefined) {
                        return null;
                    }
                    else {
                        return this.getID(object);
                    }
                }
            }
            else if (key === "IS" || key === "GT" || key === "EQ" || key === "LT") {
                if (Object.keys(query[key]).length === 0) {
                    return null;
                }
                let subKey = Object.keys(query[key])[0];
                if (QueryUtil.getIndices(subKey, "_").length !== 1) {
                    return null;
                }
                return subKey.substring(0, QueryUtil.getIndices(subKey, "_")[0]);
            }
            else if (key === "NOT") {
                return this.getID(query[key]);
            }
            else if (key === "COLUMNS") {
                let subKey = query[key][0];
                if (QueryUtil.getIndices(subKey, "_").length !== 1) {
                    return null;
                }
                else {
                    return subKey.substring(0, QueryUtil.getIndices(subKey, "_")[0]);
                }
            }
            else {
                return null;
            }
        }
        return null;
    }
    static getIndices(s, e) {
        let indices = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === e) {
                indices.push(i);
            }
        }
        return indices;
    }
    static isKeyValid(key, id, type) {
        if (QueryUtil.getIndices(key, "_").length !== 1) {
            return false;
        }
        let idstring = key.substring(0, key.indexOf("_"));
        let field = key.substring(key.indexOf("_") + 1, key.length);
        if (idstring !== id) {
            return false;
        }
        if (type === IInsightFacade_1.InsightDatasetKind.Courses) {
            return (field === "dept" || field === "id" || field === "avg" || field === "instructor"
                || field === "title" || field === "pass" || field === "fail" || field === "audit"
                || field === "uuid" || field === "year");
        }
        else {
            return (field === "fullname" || field === "shortname" || field === "number"
                || field === "name" || field === "address" || field === "lat" || field === "lon"
                || field === "seats" || field === "type" || field === "furniture" || field === "href");
        }
    }
    static isKeyValueValid(key, val, id, type) {
        if (!QueryUtil.isKeyValid(key, id, type)) {
            return false;
        }
        let field = key.substring(key.indexOf("_") + 1, key.length);
        if (type === IInsightFacade_1.InsightDatasetKind.Courses) {
            if (field === "dept" || field === "id" || field === "instructor"
                || field === "title" || field === "uuid") {
                return typeof val === "string";
            }
            else if (field === "avg" || field === "pass" || field === "fail"
                || field === "audit" || field === "year") {
                return typeof val === "number";
            }
            else {
                return false;
            }
        }
        else {
            if (field === "fullname" || field === "shortname" || field === "number"
                || field === "name" || field === "address" || field === "type"
                || field === "furniture" || field === "href") {
                return typeof val === "string";
            }
            else if (field === "lat" || field === "lon" || field === "seats") {
                return typeof val === "number";
            }
            else {
                return false;
            }
        }
    }
    static checkISorCOMP(query, method, id, type) {
        let keys = Object.keys(query);
        if (keys === undefined) {
            return false;
        }
        else if (keys.length !== 1) {
            return false;
        }
        let key = keys[0];
        let val = Object.values(query)[0];
        if (!QueryUtil.isKeyValueValid(key, val, id, type)) {
            return false;
        }
        let field = key.substring(key.indexOf("_") + 1, key.length);
        if (method === "IS") {
            if (field !== "dept" && field !== "id" && field !== "instructor" && field !== "title"
                && field !== "uuid" && field !== "fullname" && field !== "shortname"
                && field !== "number" && field !== "name" && field !== "address"
                && field !== "type" && field !== "furniture" && field !== "href") {
                return false;
            }
            else {
                if (val.includes("*")) {
                    let indices = QueryUtil.getIndices(val, "*");
                    for (const idx of indices) {
                        if (idx !== 0 && idx !== val.length - 1) {
                            return false;
                        }
                    }
                }
                return typeof val === "string";
            }
        }
        else if (method === "COMP") {
            if (field !== "avg" && field !== "pass"
                && field !== "fail" && field !== "audit" && field !== "year" && field !== "uuid"
                && field !== "lat" && field !== "lon" && field !== "seats") {
                return false;
            }
            else {
                return typeof val === "number";
            }
        }
    }
}
exports.default = QueryUtil;
//# sourceMappingURL=QueryUtil.js.map