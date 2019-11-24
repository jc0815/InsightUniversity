import {InsightDataset, InsightDatasetKind} from "./IInsightFacade";
import Log from "../Util";

export default class QueryUtil {

    public static getListofID(datasets: InsightDataset[]): string[] {
        let res: string[] = [];
        for (const index in datasets) {
            // Log.info("dataset id is", datasets[index].id);
            res.push(datasets[Number(index)].id);
        }
        return res;
    }

    public static getID(query: any): string {
        for (const key of Object.keys(query)) {
            if (key === "AND" || key === "OR") {
                if (!Array.isArray(query[key])) {  // if it isn't an array then cannot find key
                    return null;
                }
                for (const object of query[key]) {
                    if (object === null || object === undefined) {
                        return null;
                    } else {
                        return this.getID(object);
                    }
                }
            } else if (key === "IS" || key === "GT" || key === "EQ" || key === "LT") {
                if (Object.keys(query[key]).length === 0) {
                    return null;
                }
                let subKey: string = Object.keys(query[key])[0];
                if (QueryUtil.getIndices(subKey, "_").length !== 1) {
                    return null;
                }
                return subKey.substring(0, QueryUtil.getIndices(subKey, "_")[0]);
            } else if (key === "NOT") {
                return this.getID(query[key]);
            } else if (key === "COLUMNS") { // else it must be in OPTION, so we look for columns
                let subKey: string = query[key][0];
                if (QueryUtil.getIndices(subKey, "_").length !== 1) {
                    return null;
                } else {
                    return subKey.substring(0, QueryUtil.getIndices(subKey, "_")[0]);
                }
            } else {
                return null;
            }
        }
        return null; // default
    }

    // helper function to get an array of indices of an element, specifically for strings
    public static getIndices(s: string, e: string): number[] {
        let indices: number[] = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === e) {
                indices.push(i);
            }
        }
        return indices;
    }

    // checks whether a key is valid
    public static isKeyValid(key: string, id: string, type: InsightDatasetKind): boolean {
        if (QueryUtil.getIndices(key, "_").length !== 1) {
            return false; // key must contain one "_"
        }
        let idstring: string = key.substring(0, key.indexOf("_"));           // idstring
        let field: string = key.substring(key.indexOf("_") + 1, key.length); // field
        if (idstring !== id) {
            return false;
        }
        if (type === InsightDatasetKind.Courses) {
            return (field === "dept" || field === "id" || field === "avg" || field === "instructor"
                || field === "title" || field === "pass" || field === "fail" || field === "audit"
                || field === "uuid" || field === "year");
        } else {
            return (field === "fullname" || field === "shortname" || field === "number"
                || field === "name" || field === "address" || field === "lat" || field === "lon"
                || field === "seats" || field === "type" || field === "furniture" || field === "href");
        }
    }

// returns true if the key value pair(s) are valid in type
    public static isKeyValueValid(key: string, val: any, id: string, type: InsightDatasetKind): boolean {
        if (!QueryUtil.isKeyValid(key, id, type)) {
            return false;
        }
        let field: string = key.substring(key.indexOf("_") + 1, key.length); // field

        if (type === InsightDatasetKind.Courses) {
            if (field === "dept" || field === "id" || field === "instructor"
                || field === "title" || field === "uuid") {
                return typeof val === "string";
            } else if (field === "avg" || field === "pass" || field === "fail"
                || field === "audit" || field === "year") {
                return typeof val === "number";
            } else {
                return false; // returns false for other key values;
            }
        } else {
            if (field === "fullname" || field === "shortname" || field === "number"
                || field === "name" || field === "address" || field === "type"
                || field === "furniture" || field === "href") {
                return typeof val === "string";
            } else if (field === "lat" || field === "lon" || field === "seats") {
                return typeof val === "number";
            } else {
                return false;
            }
        }
    }

    // helper function to check IS or GT/EQ/LT cases
    public static checkISorCOMP(query: any, method: string, id: string, type: InsightDatasetKind): boolean {
        let keys: string[] = Object.keys(query);
        if (keys === undefined) {
            return false; // false if there is no filter
        } else if (keys.length !== 1) {
            return false; // false if there is more than 1 filter
        }
        let key: string = keys[0];              // key of the embedded filter
        let val: any = Object.values(query)[0]; // value of the embedded filter
        if (!QueryUtil.isKeyValueValid(key, val, id, type)) {  // Type compatibility is also checked here
            return false;
        }
        let field: string = key.substring(key.indexOf("_") + 1, key.length);  // field
        if (method === "IS") {
            if (field !== "dept" && field !== "id" && field !== "instructor" && field !== "title"
                && field !== "uuid" && field !== "fullname" && field !== "shortname"
                && field !== "number" && field !== "name" && field !== "address"
                && field !== "type" && field !== "furniture" && field !== "href") {
                return false;  // check sfields
            } else {
                // checking wildcards
                if (val.includes("*")) {
                    let indices: number[] = QueryUtil.getIndices(val, "*");
                    for (const idx of indices) {
                        if (idx !== 0 && idx !== val.length - 1) {
                            return false; // invalid if "*" is neither at the start nor the end
                        }
                    }
                }
                return typeof val === "string";
            }
        } else if (method === "COMP") {
            if (field !== "avg" && field !== "pass"
                && field !== "fail" && field !== "audit" && field !== "year" && field !== "uuid"
                && field !== "lat" && field !== "lon" && field !== "seats") {
                return false;
            } else {
                return typeof val === "number";
            }
        }
    }
}
