"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const fs = require("fs-extra");
const IInsightFacade_1 = require("../src/controller/IInsightFacade");
const InsightFacade_1 = require("../src/controller/InsightFacade");
const Scheduler_1 = require("../src/scheduler/Scheduler");
const Util_1 = require("../src/Util");
const TestUtil_1 = require("./TestUtil");
describe("InsightFacade Add/Remove Dataset", function () {
    const datasetsToLoad = {
        courses: "./test/data/courses.zip",
        coursesCopy: "./test/data/courses_2.zip",
        coursesEmpty: "./test/data/courses_empty.zip",
        invalid_id: "./test/data/courses.zip",
        oneInvalidId: "./test/data/one_invalid_id.zip",
        oneInvalidContent: "./test/data/one_invalid_content.zip",
        allInvalidId: "./test/data/invalid_courses_id.zip",
        allInvalidContent: "./test/data/invalid_courses_content.zip",
        incompleteContent: "./test/data/incomplete_content.zip",
        notEvenZip: "./test/data/not_zip_file.json",
        noSubFolder: "./test/data/no_courses_folder.zip",
        noValidSection: "./test/data/no_valid_section.zip",
        rooms: "./test/data/rooms.zip"
    };
    let datasets = {};
    let insightFacade;
    let scheduler = new Scheduler_1.default();
    const cacheDir = __dirname + "/../data";
    before(function () {
        Util_1.default.test(`Before all`);
        for (const id of Object.keys(datasetsToLoad)) {
            datasets[id] = fs.readFileSync(datasetsToLoad[id]).toString("base64");
        }
    });
    beforeEach(function () {
        Util_1.default.test(`BeforeTest: ${this.currentTest.title}`);
        try {
            fs.removeSync(cacheDir);
            fs.mkdirSync(cacheDir);
            insightFacade = new InsightFacade_1.default();
        }
        catch (err) {
            Util_1.default.error(err);
        }
    });
    after(function () {
        Util_1.default.test(`After: ${this.test.parent.title}`);
    });
    afterEach(function () {
        Util_1.default.test(`AfterTest: ${this.currentTest.title}`);
    });
    it("a) Scheduler test one", function () {
        let course = [{ courses_dept: "cpsc", courses_id: "340", courses_uuid: "1319", courses_pass: 101,
                courses_fail: 7, courses_audit: 2 },
            { courses_dept: "cpsc", courses_id: "340", courses_uuid: "3397", courses_pass: 171,
                courses_fail: 3, courses_audit: 1 },
            { courses_dept: "cpsc", courses_id: "344", courses_uuid: "62413", courses_pass: 93,
                courses_fail: 2, courses_audit: 0 },
            { courses_dept: "cpsc", courses_id: "344", courses_uuid: "72385", courses_pass: 43,
                courses_fail: 1, courses_audit: 0 }];
        let rooms = [{ rooms_shortname: "AERL", rooms_number: "120", rooms_seats: 144, rooms_lat: 49.26372,
                rooms_lon: -123.25099 },
            { rooms_shortname: "ALRD", rooms_number: "105", rooms_seats: 94, rooms_lat: 49.2699,
                rooms_lon: -123.25318 },
            { rooms_shortname: "ANGU", rooms_number: "098", rooms_seats: 260, rooms_lat: 49.26486,
                rooms_lon: -123.25364 },
            { rooms_shortname: "BUCH", rooms_number: "A101", rooms_seats: 275, rooms_lat: 49.26826,
                rooms_lon: -123.25468 }];
        let expectedOutput = [[{ rooms_shortname: "AERL", rooms_number: "120", rooms_seats: 144,
                    rooms_lat: 49.26372, rooms_lon: -123.25099 },
                { courses_dept: "cpsc", courses_id: "340", courses_uuid: "1319",
                    courses_pass: 101, courses_fail: 7, courses_audit: 2 }, "MWF 0800-0900"],
            [{ rooms_shortname: "ANGU", rooms_number: "098", rooms_seats: 260,
                    rooms_lat: 49.26486, rooms_lon: -123.25364 }, { courses_dept: "cpsc", courses_id: "340",
                    courses_uuid: "3397", courses_pass: 171, courses_fail: 3, courses_audit: 1 },
                "MWF 0800-0900"],
            [{ rooms_shortname: "BUCH", rooms_number: "A101", rooms_seats: 275,
                    rooms_lat: 49.26826, rooms_lon: -123.25468 }, { courses_dept: "cpsc", courses_id: "344",
                    courses_uuid: "62413", courses_pass: 93, courses_fail: 2, courses_audit: 0 },
                "MWF 0800-0900"],
            [{ rooms_shortname: "ALRD", rooms_number: "105", rooms_seats: 94, rooms_lat: 49.2699,
                    rooms_lon: -123.25318 }, { courses_dept: "cpsc", courses_id: "344", courses_uuid: "72385",
                    courses_pass: 43, courses_fail: 1, courses_audit: 0 }, "MWF 0800-0900"]
        ];
        try {
            let actualOutput = scheduler.schedule(course, rooms);
            chai_1.expect(actualOutput).to.deep.equal(expectedOutput);
        }
        catch (err) {
            chai_1.expect.fail(err, expectedOutput, "Should not have rejected");
        }
    });
    it("a) Should add a valid Rooms dataset", function () {
        const id = "rooms";
        const expected = [id];
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Rooms).then((result) => {
            chai_1.expect(result).to.deep.equal(expected);
        }).catch((err) => {
            chai_1.expect.fail(err, expected, "Should not have rejected");
        });
    });
    it("1) Should add a valid dataset", function () {
        const id = "courses";
        const expected = [id];
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect(result).to.deep.equal(expected);
        }).catch((err) => {
            chai_1.expect.fail(err, expected, "Should not have rejected");
        });
    });
    it("2) Should add a dataset with only one invalid course", function () {
        const id = "oneInvalidContent";
        const expected = [id];
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect(result).to.deep.equal(expected);
        }).catch((err) => {
            chai_1.expect.fail(err, expected, "Should not have rejected");
        });
    });
    it("3) Should add a dataset with only one invalid course", function () {
        const id = "oneInvalidId";
        const expected = [id];
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect(result).to.deep.equal(expected);
        }).catch((err) => {
            chai_1.expect.fail(err, expected, "Should not have rejected");
        });
    });
    it("4) Should not add dataset with duplicated name", function () {
        const id = "courses";
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses);
        }).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected dataset with duplicated name");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("5) should not add dataset with invalid id", function () {
        const id = "invalid_id";
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected dataset with invalid id");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("6) Should not add whitespace id dataset", function () {
        const id = " ";
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected dataset with whitespace id");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("7) Should not add empty string id dataset", function () {
        const id = "";
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected dataset with empty string as id");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("8) Should not add null id dataset", function () {
        const id = null;
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected dataset with null id");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("9) Should not add undefined id dataset", function () {
        const id = undefined;
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected dataset with undefined id");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("10) Should not add an empty dataset", function () {
        const id = "coursesEmpty";
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected empty dataset");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("11) Should not add invalid dataset", function () {
        const id = "allInvalidContent";
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected invalid dataset");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("13) Should not add invalid dataset", function () {
        const id = "notEvenZip";
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected invalid dataset");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("14) Should not add invalid dataset", function () {
        const id = "noSubFolder";
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected invalid dataset");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("15) Should not add invalid dataset", function () {
        const id = "noValidSection";
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected invalid dataset");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("16) Should not add invalid dataset", function () {
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset("123", null, null).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected invalid dataset");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("17) Should not add invalid dataset", function () {
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.addDataset("123", undefined, undefined).then((result) => {
            chai_1.expect.fail(result, expected, "Should have rejected invalid dataset");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("18) Should delete an existing dataset", function () {
        const id = "courses";
        const expected = id;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            return insightFacade.removeDataset(id);
        }).then((result) => {
            chai_1.expect(result).to.deep.equal(expected);
        }).catch((err) => {
            chai_1.expect.fail(err, expected, "Should have been deleted");
        });
    });
    it("19) Should not delete a dataset twice", function () {
        const id = "courses";
        const expected = IInsightFacade_1.NotFoundError;
        return insightFacade.addDataset(id, datasets[id], IInsightFacade_1.InsightDatasetKind.Courses).then((result) => {
            return insightFacade.removeDataset(id);
        }).then((result) => {
            return insightFacade.removeDataset(id);
        }).then((result) => {
            chai_1.expect.fail(result, expected, "Should not delete twice");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("20) Should not delete a non-existent dataset", function () {
        const id = "courses";
        const expected = IInsightFacade_1.NotFoundError;
        return insightFacade.removeDataset(id).then((result) => {
            chai_1.expect.fail(result, expected, "Should not have been deleted");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("21) Should not delete a dataset with invalid id", function () {
        const id = "invalid_id";
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.removeDataset(id).then((result) => {
            chai_1.expect.fail(result, expected, "Should not have been deleted");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("22) Should not delete a dataset with whitespace id", function () {
        const id = " ";
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.removeDataset(id).then((result) => {
            chai_1.expect.fail(result, expected, "Should not delete with whitespace id");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("23) Should not delete a dataset with null id", function () {
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.removeDataset(null).then((result) => {
            chai_1.expect.fail(result, expected, "Should not delete anything with null id");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("24) Should not delete a dataset with undefined id", function () {
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.removeDataset(undefined).then((result) => {
            chai_1.expect.fail(result, expected, "Should not delete anything with undefined id");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("25) Should not delete a dataset with empty id", function () {
        const id = "";
        const expected = IInsightFacade_1.InsightError;
        return insightFacade.removeDataset(id).then((result) => {
            chai_1.expect.fail(result, expected, "Should not have deleted with empty id");
        }).catch((err) => {
            chai_1.expect(err).to.be.instanceOf(expected);
        });
    });
    it("26) Should list all added dataset", function () {
        const id = ["courses", "coursesCopy"];
        const expectedLen = 2;
        return insightFacade.addDataset(id[0], datasets[id[0]], IInsightFacade_1.InsightDatasetKind.Courses)
            .then((result) => {
            return insightFacade.addDataset(id[1], datasets[id[1]], IInsightFacade_1.InsightDatasetKind.Courses);
        }).then((result) => {
            return insightFacade.listDatasets();
        }).then((result) => {
            chai_1.expect(result.length).to.equal(expectedLen);
        }).catch((err) => {
            chai_1.expect.fail(err, expectedLen, "Should have list length of 2");
        });
    });
    it("27) Should list when no dataset exists", function () {
        const expectedLen = 0;
        return insightFacade.listDatasets().then((result) => {
            chai_1.expect(result.length).to.equal(expectedLen);
        }).catch((err) => {
            chai_1.expect.fail(err, expectedLen, "Should have list length of 0");
        });
    });
});
describe("InsightFacade PerformQuery", () => {
    const datasetsToQuery = {
        courses: { id: "courses", path: "./test/data/courses.zip", kind: IInsightFacade_1.InsightDatasetKind.Courses },
        rooms: { id: "rooms", path: "./test/data/rooms.zip", kind: IInsightFacade_1.InsightDatasetKind.Rooms }
    };
    let insightFacade = new InsightFacade_1.default();
    let testQueries = [];
    before(function () {
        Util_1.default.test(`Before: ${this.test.parent.title}`);
        try {
            testQueries = TestUtil_1.default.readTestQueries();
        }
        catch (err) {
            chai_1.expect.fail("", "", `Failed to read one or more test queries. ${err}`);
        }
        const loadDatasetPromises = [];
        for (const key of Object.keys(datasetsToQuery)) {
            const ds = datasetsToQuery[key];
            const data = fs.readFileSync(ds.path).toString("base64");
            loadDatasetPromises.push(insightFacade.addDataset(ds.id, data, ds.kind));
        }
        return Promise.all(loadDatasetPromises).catch((err) => {
            return Promise.resolve("HACK TO LET QUERIES RUN");
        });
    });
    beforeEach(function () {
        Util_1.default.test(`BeforeTest: ${this.currentTest.title}`);
    });
    after(function () {
        Util_1.default.test(`After: ${this.test.parent.title}`);
    });
    afterEach(function () {
        Util_1.default.test(`AfterTest: ${this.currentTest.title}`);
    });
    it("Should run test queries", function () {
        describe("Dynamic InsightFacade PerformQuery tests", function () {
            for (const test of testQueries) {
                it(`[${test.filename}] ${test.title}`, function (done) {
                    insightFacade.performQuery(test.query).then((result) => {
                        TestUtil_1.default.checkQueryResult(test, result, done);
                    }).catch((err) => {
                        TestUtil_1.default.checkQueryResult(test, err, done);
                    });
                });
            }
        });
    });
});
//# sourceMappingURL=InsightFacade.spec.js.map