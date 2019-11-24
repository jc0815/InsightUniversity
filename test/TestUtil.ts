import * as fs from "fs";
import Log from "../src/Util";
import { ITestQuery } from "./InsightFacade.spec";
import {expect} from "chai";
import {InsightError, ResultTooLargeError} from "../src/controller/IInsightFacade";

export default class TestUtil {

    // To students: There is no need or expectation for you to understand or modify this file
    // However checkQueryResult below may be of interest.
    public static checkQueryResult(test: ITestQuery, response: any, done: any): void {
        try {
            if (test.isQueryValid) {
                expect(response).to.deep.equal(test.result);
            } else {
                if (test.result === "ResultTooLargeError") {
                    expect(response).to.be.instanceOf(ResultTooLargeError);
                } else {
                    expect(response).to.be.instanceOf(InsightError);
                }
            }
            done();
        } catch (e) {
            done(e);
        }
    }

    /**
     * Recursively searches for test query JSON files in the path and returns those matching the specified schema.
     * @param path The path to the sample query JSON files.
     */
    public static readTestQueries(path: string = "test/queries"): ITestQuery[] {
        const methodName: string = "TestUtil::readTestQueries --";
        const testQueries: ITestQuery[] = [];
        let files: string[];

        try {
            files = TestUtil.readAllFiles(path);
            if (files.length === 0) {
                Log.warn(`${methodName} No query files found in ${path}.`);
            }
        } catch (err) {
            Log.error(`${methodName} Exception reading files in ${path}.`);
            throw err;
        }

        for (const file of files) {
            const skipFile: string = file.replace(__dirname, "test");
            let content: Buffer;

            try {
                content = fs.readFileSync(file);
            } catch (err) {
                Log.error(`${methodName} Could not read ${skipFile}.`);
                throw err;
            }

            try {
                const query = JSON.parse(content.toString());
                TestUtil.validate(query, {title: "string", query: null, isQueryValid: "boolean", result: null});
                query["filename"] = file;
                testQueries.push(query);
            } catch (err) {
                Log.error(`${methodName} ${skipFile} does not conform to the query schema.`);
                throw new Error(`In ${file} ${err.message}`);
            }
        }

        return testQueries;
    }

    private static readAllFiles(currentPath: string): string[] {
        let filePaths: string[] = [];
        const filesInDir = TestUtil.attemptDirRead(currentPath);
        for (const fileOrDirName of filesInDir) {
            const fullPath = `${currentPath}/${fileOrDirName}`;
            if (TestUtil.isDirectory(fullPath)) {
                filePaths = filePaths.concat(TestUtil.readAllFiles(fullPath));
            } else if (fileOrDirName.endsWith(".json")) {
                filePaths.push(fullPath);
            }
        }
        return filePaths;
    }

    private static attemptDirRead(currentPath: string): string[] {
        try {
            return fs.readdirSync(currentPath);
        } catch (err) {
            Log.error(`Error reading directory ${currentPath}`);
            throw err;
        }
    }

    // From https://stackoverflow.com/questions/15630770/node-js-check-if-path-is-file-or-directory
    private static isDirectory(path: string) {
        try {
            const stat = fs.lstatSync(path);
            return stat.isDirectory();
        } catch (e) {
            return false;
        }
    }

    private static validate(content: any, schema: {[key: string]: string}) {
        for (const [property, type] of Object.entries(schema)) {
            if (!content.hasOwnProperty(property)) {
                throw new Error(`required property ${property} is missing.`);
            } else if (type !== null && typeof content[property] !== type) {
                throw new Error(`the value of ${property} is not ${type === "object" ? "an" : "a"} ${type}.`);
            }

        }
    }
}
