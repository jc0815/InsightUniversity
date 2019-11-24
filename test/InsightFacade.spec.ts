import {expect} from "chai";
import * as fs from "fs-extra";
import {InsightDataset, InsightDatasetKind, InsightError, NotFoundError} from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";
import Scheduler from "../src/scheduler/Scheduler";
import {SchedRoom, SchedSection} from "../src/scheduler/IScheduler";
import Log from "../src/Util";
import TestUtil from "./TestUtil";

// This should match the schema given to TestUtil.validate(..) in TestUtil.readTestQueries(..)
// except 'filename' which is injected when the file is read.
export interface ITestQuery {
    title: string;
    query: any;  // make any to allow testing structurally invalid queries
    isQueryValid: boolean;
    result: any;
    filename: string;  // This is injected when reading the file
}

describe("InsightFacade Add/Remove Dataset", function () {
    // Reference any datasets you've added to test/data here and they will
    // automatically be loaded in the 'before' hook.
    const datasetsToLoad: { [id: string]: string } = {
        courses:            "./test/data/courses.zip",
        coursesCopy:        "./test/data/courses_2.zip",
        coursesEmpty:       "./test/data/courses_empty.zip",
        invalid_id:         "./test/data/courses.zip",
        oneInvalidId:       "./test/data/one_invalid_id.zip",
        oneInvalidContent:  "./test/data/one_invalid_content.zip",
        allInvalidId:       "./test/data/invalid_courses_id.zip",
        allInvalidContent:  "./test/data/invalid_courses_content.zip",
        incompleteContent:  "./test/data/incomplete_content.zip",
        notEvenZip:         "./test/data/not_zip_file.json",
        noSubFolder:        "./test/data/no_courses_folder.zip",
        noValidSection:     "./test/data/no_valid_section.zip",
        rooms:              "./test/data/rooms.zip"
    };
    let datasets: { [id: string]: string } = {};
    let insightFacade: InsightFacade;
    let scheduler: Scheduler = new Scheduler();
    const cacheDir = __dirname + "/../data";

    before(function () {
        // This section runs once and loads all datasets specified in the datasetsToLoad object
        // into the datasets object
        Log.test(`Before all`);
        for (const id of Object.keys(datasetsToLoad)) {
            datasets[id] = fs.readFileSync(datasetsToLoad[id]).toString("base64");
        }
    });

    beforeEach(function () {
        // This section resets the data directory (removing any cached data) and resets the InsightFacade instance
        // This runs before each test, which should make each test independent from the previous one
        Log.test(`BeforeTest: ${this.currentTest.title}`);
        try {
            fs.removeSync(cacheDir);
            fs.mkdirSync(cacheDir);
            insightFacade = new InsightFacade();
        } catch (err) {
            Log.error(err);
        }
    });

    after(function () {
        Log.test(`After: ${this.test.parent.title}`);
    });

    afterEach(function () {
        Log.test(`AfterTest: ${this.currentTest.title}`);
    });

    // Test for D3: Scheduler
    it("a) Scheduler test one", function () {
        let course: SchedSection[] = [{courses_dept: "cpsc", courses_id: "340", courses_uuid: "1319", courses_pass: 101,
                        courses_fail: 7, courses_audit: 2},
                      {courses_dept: "cpsc", courses_id: "340", courses_uuid: "3397", courses_pass: 171,
                        courses_fail: 3, courses_audit: 1},
                      {courses_dept: "cpsc", courses_id: "344", courses_uuid: "62413", courses_pass: 93,
                        courses_fail: 2, courses_audit: 0},
                      {courses_dept: "cpsc", courses_id: "344", courses_uuid: "72385", courses_pass: 43,
                        courses_fail: 1, courses_audit : 0}];
        let rooms: SchedRoom[] = [{rooms_shortname: "AERL", rooms_number: "120", rooms_seats: 144, rooms_lat: 49.26372,
                        rooms_lon: -123.25099},
                    {rooms_shortname: "ALRD", rooms_number: "105", rooms_seats: 94, rooms_lat: 49.2699,
                        rooms_lon: -123.25318},
                    {rooms_shortname: "ANGU", rooms_number: "098", rooms_seats: 260, rooms_lat: 49.26486,
                        rooms_lon: -123.25364},
                    {rooms_shortname: "BUCH", rooms_number: "A101", rooms_seats: 275, rooms_lat: 49.26826,
                        rooms_lon: -123.25468}];
        let expectedOutput: any = [ [ { rooms_shortname: "AERL", rooms_number: "120", rooms_seats: 144,
                            rooms_lat: 49.26372, rooms_lon: -123.25099 },
                        { courses_dept: "cpsc", courses_id: "340", courses_uuid: "1319",
                            courses_pass: 101, courses_fail: 7, courses_audit: 2 }, "MWF 0800-0900" ],
                        [ { rooms_shortname: "ANGU", rooms_number: "098", rooms_seats: 260,
                            rooms_lat: 49.26486, rooms_lon: -123.25364 }, { courses_dept: "cpsc", courses_id: "340",
                            courses_uuid: "3397", courses_pass: 171, courses_fail: 3, courses_audit: 1 },
                            "MWF 0800-0900" ],
                        [ { rooms_shortname: "BUCH", rooms_number: "A101", rooms_seats: 275,
                            rooms_lat: 49.26826, rooms_lon: -123.25468 }, { courses_dept: "cpsc", courses_id: "344",
                            courses_uuid: "62413", courses_pass: 93, courses_fail: 2, courses_audit: 0 },
                            "MWF 0800-0900" ],
                        [ { rooms_shortname: "ALRD", rooms_number: "105", rooms_seats: 94, rooms_lat: 49.2699,
                        rooms_lon: -123.25318 }, { courses_dept: "cpsc", courses_id: "344", courses_uuid: "72385",
                            courses_pass: 43, courses_fail: 1, courses_audit: 0 }, "MWF 0800-0900" ]
                        ];
        try {
            let actualOutput = scheduler.schedule(course, rooms);
            expect(actualOutput).to.deep.equal(expectedOutput);
        } catch (err) {
            expect.fail(err, expectedOutput, "Should not have rejected");
        }
    });

    // a) Adding a valid Rooms dataset
    // Note: use a-z for Rooms tests (easier)
    it("a) Should add a valid Rooms dataset", function () {
        const id: string = "rooms";
        const expected: string[] = [id];
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Rooms).then((result: string[]) => {
            expect(result).to.deep.equal(expected);
        }).catch((err: any) => {
            expect.fail(err, expected, "Should not have rejected");
        });
    });

    // 1) This is a unit test. You should create more like this!
    it("1) Should add a valid dataset", function () {
        const id: string = "courses";
        const expected: string[] = [id];
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect(result).to.deep.equal(expected);
        }).catch((err: any) => {
            expect.fail(err, expected, "Should not have rejected");
        });
    });

    // 2) adding with only one invalid course content but the rest is ok
    it("2) Should add a dataset with only one invalid course", function () {
        const id: string = "oneInvalidContent";
        const expected: string[] = [id];
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect(result).to.deep.equal(expected);
        }).catch((err: any) => {
            expect.fail(err, expected, "Should not have rejected");
        });
    });

    // 3) adding with only one invalid course id but the rest is ok
    it("3) Should add a dataset with only one invalid course", function () {
        const id: string = "oneInvalidId";
        const expected: string[] = [id];
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect(result).to.deep.equal(expected);
        }).catch((err: any) => {
            expect.fail(err, expected, "Should not have rejected");
        });
    });

    // 4) adding duplicate dataset
    it("4) Should not add dataset with duplicated name", function () {
        const id: string = "courses";
        const expected: any = InsightError;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses);
        }).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected dataset with duplicated name");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 5) adding with invalid id
    it("5) should not add dataset with invalid id", function () {
        const id: string = "invalid_id";
        const expected: any = InsightError;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected dataset with invalid id");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 6) adding dataset with whitespace id
    it("6) Should not add whitespace id dataset", function () {
        const id: string = " ";
        const expected: any = InsightError;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected dataset with whitespace id");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 7) adding dataset with empty string id
    it("7) Should not add empty string id dataset", function () {
        const id: string = "";
        const expected: any = InsightError;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected dataset with empty string as id");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 8) adding dataset with null id
    it("8) Should not add null id dataset", function () {
        const id: string = null;
        const expected: any = InsightError;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected dataset with null id");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 9) adding dataset with undefined id
    it("9) Should not add undefined id dataset", function () {
        const id: string = undefined;
        const expected: any = InsightError;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected dataset with undefined id");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 10) adding an empty dataset
    it("10) Should not add an empty dataset", function () {
        const id: string = "coursesEmpty";
        const expected: any = InsightError;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected empty dataset");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 11) adding invalid courses with all invalid content
    it("11) Should not add invalid dataset", function () {
        const id: string = "allInvalidContent";
        const expected: any = InsightError;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected invalid dataset");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 12) adding invalid courses with all invalid ID
    // it("12) Should not add invalid dataset", function () {
    //     const id: string = "allInvalidId";
    //     const expected: any = InsightError;
    //     return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
    //         expect.fail(result, expected, "Should have rejected invalid dataset");
    //     }).catch((err: any) => {
    //         expect(err).to.be.instanceOf(expected);
    //     });
    // });

    // 13) adding not a zip file
    it("13) Should not add invalid dataset", function () {
        const id: string = "notEvenZip";
        const expected: any = InsightError;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected invalid dataset");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 14) adding no sub-folder /courses
    it("14) Should not add invalid dataset", function () {
        const id: string = "noSubFolder";
        const expected: any = InsightError;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected invalid dataset");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 15) adding with valid courses but no valid sections
    it("15) Should not add invalid dataset", function () {
        const id: string = "noValidSection";
        const expected: any = InsightError;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected invalid dataset");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 16) malformed parameters (null kind)
    it("16) Should not add invalid dataset", function () {
        const expected: any = InsightError;
        return insightFacade.addDataset("123", null, null).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected invalid dataset");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 17) malformed parameters (undefined kind)
    it("17) Should not add invalid dataset", function () {
        const expected: any = InsightError;
        return insightFacade.addDataset("123", undefined, undefined).then((result: string[]) => {
            expect.fail(result, expected, "Should have rejected invalid dataset");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // =============================================================================== //

    // 18) Removing a valid dataset
    it("18) Should delete an existing dataset", function () {
        const id: string = "courses";
        const expected: string = id;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            return insightFacade.removeDataset(id);
        }).then((result: string) => {
            expect(result).to.deep.equal(expected);
        }).catch((err: any) => {
            expect.fail(err, expected, "Should have been deleted");
        });
    });

    // 19) Removing a valid dataset twice
    it("19) Should not delete a dataset twice", function () {
        const id: string = "courses";
        const expected: any = NotFoundError;
        return insightFacade.addDataset(id, datasets[id], InsightDatasetKind.Courses).then((result: string[]) => {
            return insightFacade.removeDataset(id);
        }).then((result: string) => {
            return insightFacade.removeDataset(id);
        }).then((result: string) => {
            expect.fail(result, expected, "Should not delete twice");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 20) Removing non-existent dataset
    it("20) Should not delete a non-existent dataset", function () {
        const id: string = "courses";
        const expected: any = NotFoundError;
        return insightFacade.removeDataset(id).then((result: string) => {
            expect.fail(result, expected, "Should not have been deleted");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 21) Removing with invalid id
    it("21) Should not delete a dataset with invalid id", function () {
        const id: string = "invalid_id";
        const expected: any = InsightError;
        return insightFacade.removeDataset(id).then((result: string) => {
            expect.fail(result, expected, "Should not have been deleted");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 22) Removing with whitespace id
    it("22) Should not delete a dataset with whitespace id", function () {
        const id: string = " ";
        const expected: any = InsightError;
        return insightFacade.removeDataset(id).then((result: string) => {
            expect.fail(result, expected, "Should not delete with whitespace id");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 23) Removing with null id
    it("23) Should not delete a dataset with null id", function () {
        const expected: any = InsightError;
        return insightFacade.removeDataset(null).then((result: string) => {
            expect.fail(result, expected, "Should not delete anything with null id");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 24) Removing with undefined id
    it("24) Should not delete a dataset with undefined id", function () {
        const expected: any = InsightError;
        return insightFacade.removeDataset(undefined).then((result: string) => {
            expect.fail(result, expected, "Should not delete anything with undefined id");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // 25) Removing dataset with empty id
    it("25) Should not delete a dataset with empty id", function () {
        const id: string = "";
        const expected: any = InsightError;
        return insightFacade.removeDataset(id).then((result: string) => {
            expect.fail(result, expected, "Should not have deleted with empty id");
        }).catch((err: any) => {
            expect(err).to.be.instanceOf(expected);
        });
    });

    // =============================================================================== //

    // 26) test listing dataset
    it("26) Should list all added dataset", function () {
        const id: string[] = ["courses", "coursesCopy"];
        const expectedLen: number = 2;
        return insightFacade.addDataset(id[0], datasets[id[0]], InsightDatasetKind.Courses)
            .then((result: string[]) => {
            return insightFacade.addDataset(id[1], datasets[id[1]], InsightDatasetKind.Courses);
        }).then((result: string[]) => {
            return insightFacade.listDatasets();
        }).then((result: InsightDataset[]) => {
            expect(result.length).to.equal(expectedLen);
        }).catch((err: any) => {
            expect.fail(err, expectedLen, "Should have list length of 2");
        });
    });

    // 27) test listing empty dataset list
    it("27) Should list when no dataset exists", function () {
        const expectedLen: number = 0;
        return insightFacade.listDatasets().then((result: InsightDataset[]) => {
            expect(result.length).to.equal(expectedLen);
        }).catch((err: any) => {
            expect.fail(err, expectedLen, "Should have list length of 0");
        });
    });
});

/*
 * This test suite dynamically generates tests from the JSON files in test/queries.
 * You should not need to modify it; instead, add additional files to the queries directory.
 * You can still make tests the normal way, this is just a convenient tool for a majority of queries.
 */
describe("InsightFacade PerformQuery", () => {
    const datasetsToQuery: { [id: string]: any } = {
        courses: {id: "courses", path: "./test/data/courses.zip", kind: InsightDatasetKind.Courses},
        rooms: {id: "rooms", path: "./test/data/rooms.zip", kind: InsightDatasetKind.Rooms}
    };
    let insightFacade: InsightFacade = new InsightFacade();
    let testQueries: ITestQuery[] = [];

    // Load all the test queries, and call addDataset on the insightFacade instance for all the datasets
    before(function () {
        Log.test(`Before: ${this.test.parent.title}`);

        // Load the query JSON files under test/queries.
        // Fail if there is a problem reading ANY query.
        try {
            testQueries = TestUtil.readTestQueries();
        } catch (err) {
            expect.fail("", "", `Failed to read one or more test queries. ${err}`);
        }

        // Load the datasets specified in datasetsToQuery and add them to InsightFacade.
        // Will fail* if there is a problem reading ANY dataset.
        const loadDatasetPromises: Array<Promise<string[]>> = [];
        for (const key of Object.keys(datasetsToQuery)) {
            const ds = datasetsToQuery[key];
            const data = fs.readFileSync(ds.path).toString("base64");
            loadDatasetPromises.push(insightFacade.addDataset(ds.id, data, ds.kind));
        }
        return Promise.all(loadDatasetPromises).catch((err) => {
            /* *IMPORTANT NOTE: This catch is to let this run even without the implemented addDataset,
             * for the purposes of seeing all your tests run.
             * For D1, remove this catch block (but keep the Promise.all)
             */
            return Promise.resolve("HACK TO LET QUERIES RUN");
        });
    });

    beforeEach(function () {
        Log.test(`BeforeTest: ${this.currentTest.title}`);
    });

    after(function () {
        Log.test(`After: ${this.test.parent.title}`);
    });

    afterEach(function () {
        Log.test(`AfterTest: ${this.currentTest.title}`);
    });

    // Dynamically create and run a test for each query in testQueries.
    // Creates an extra "test" called "Should run test queries" as a byproduct. Don't worry about it
    it("Should run test queries", function () {
        describe("Dynamic InsightFacade PerformQuery tests", function () {
            for (const test of testQueries) {
                it(`[${test.filename}] ${test.title}`, function (done) {
                    insightFacade.performQuery(test.query).then((result) => {
                        TestUtil.checkQueryResult(test, result, done);
                    }).catch((err) => {
                        TestUtil.checkQueryResult(test, err, done);
                    });
                });
            }
        });
    });
});
