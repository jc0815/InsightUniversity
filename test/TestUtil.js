"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Util_1 = require("../src/Util");
const chai_1 = require("chai");
const IInsightFacade_1 = require("../src/controller/IInsightFacade");
class TestUtil {
    static checkQueryResult(test, response, done) {
        try {
            if (test.isQueryValid) {
                chai_1.expect(response).to.deep.equal(test.result);
            }
            else {
                if (test.result === "ResultTooLargeError") {
                    chai_1.expect(response).to.be.instanceOf(IInsightFacade_1.ResultTooLargeError);
                }
                else {
                    chai_1.expect(response).to.be.instanceOf(IInsightFacade_1.InsightError);
                }
            }
            done();
        }
        catch (e) {
            done(e);
        }
    }
    static readTestQueries(path = "test/queries") {
        const methodName = "TestUtil::readTestQueries --";
        const testQueries = [];
        let files;
        try {
            files = TestUtil.readAllFiles(path);
            if (files.length === 0) {
                Util_1.default.warn(`${methodName} No query files found in ${path}.`);
            }
        }
        catch (err) {
            Util_1.default.error(`${methodName} Exception reading files in ${path}.`);
            throw err;
        }
        for (const file of files) {
            const skipFile = file.replace(__dirname, "test");
            let content;
            try {
                content = fs.readFileSync(file);
            }
            catch (err) {
                Util_1.default.error(`${methodName} Could not read ${skipFile}.`);
                throw err;
            }
            try {
                const query = JSON.parse(content.toString());
                TestUtil.validate(query, { title: "string", query: null, isQueryValid: "boolean", result: null });
                query["filename"] = file;
                testQueries.push(query);
            }
            catch (err) {
                Util_1.default.error(`${methodName} ${skipFile} does not conform to the query schema.`);
                throw new Error(`In ${file} ${err.message}`);
            }
        }
        return testQueries;
    }
    static readAllFiles(currentPath) {
        let filePaths = [];
        const filesInDir = TestUtil.attemptDirRead(currentPath);
        for (const fileOrDirName of filesInDir) {
            const fullPath = `${currentPath}/${fileOrDirName}`;
            if (TestUtil.isDirectory(fullPath)) {
                filePaths = filePaths.concat(TestUtil.readAllFiles(fullPath));
            }
            else if (fileOrDirName.endsWith(".json")) {
                filePaths.push(fullPath);
            }
        }
        return filePaths;
    }
    static attemptDirRead(currentPath) {
        try {
            return fs.readdirSync(currentPath);
        }
        catch (err) {
            Util_1.default.error(`Error reading directory ${currentPath}`);
            throw err;
        }
    }
    static isDirectory(path) {
        try {
            const stat = fs.lstatSync(path);
            return stat.isDirectory();
        }
        catch (e) {
            return false;
        }
    }
    static validate(content, schema) {
        for (const [property, type] of Object.entries(schema)) {
            if (!content.hasOwnProperty(property)) {
                throw new Error(`required property ${property} is missing.`);
            }
            else if (type !== null && typeof content[property] !== type) {
                throw new Error(`the value of ${property} is not ${type === "object" ? "an" : "a"} ${type}.`);
            }
        }
    }
}
exports.default = TestUtil;
//# sourceMappingURL=TestUtil.js.map