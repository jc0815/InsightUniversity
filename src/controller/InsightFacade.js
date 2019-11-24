"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../Util");
const IInsightFacade_1 = require("./IInsightFacade");
const JSZip = require("jszip");
const QueryValidator_1 = require("./QueryValidator");
const QueryFactory_1 = require("./QueryFactory");
const addCoursesHelpers_1 = require("./addCoursesHelpers");
const addRoomsHelpers_1 = require("./addRoomsHelpers");
class InsightFacade {
    constructor() {
        this.savedCoursesAndRooms = {};
        this.qValidator = new QueryValidator_1.QueryValidator();
        this.qFactory = new QueryFactory_1.QueryFactory();
        this.addCourses = new addCoursesHelpers_1.AddCoursesHelpers();
        this.addRooms = new addRoomsHelpers_1.AddRoomsHelpers();
        Util_1.default.trace("InsightFacadeImpl::init()");
        this.datasets = [];
        this.savedCoursesAndRooms = {};
    }
    addDataset(id, content, kind) {
        if (!this.isArgumentValid(id, content, kind)) {
            return Promise.reject(new IInsightFacade_1.InsightError("Invalid argument!"));
        }
        if (kind === IInsightFacade_1.InsightDatasetKind.Courses) {
            return this.coursesMain(id, content, kind);
        }
        else if (kind === IInsightFacade_1.InsightDatasetKind.Rooms) {
            return this.roomsMain(id, content, kind);
        }
        else {
            return Promise.reject(new IInsightFacade_1.InsightError("Not course data set kind!"));
        }
    }
    roomsMain(id, content, kind) {
        return new Promise((resolve, reject) => {
            let currentZip = new JSZip();
            const parse5 = require("parse5");
            currentZip.loadAsync(content, { base64: true })
                .then((zip) => {
                let buildings = zip.files["rooms/index.htm"].async("text")
                    .then((body) => {
                    let buildingList = this.addRooms.getBuildings(parse5.parse(body));
                    let buildingListGeo = this.addRooms.sortGeoLocation(buildingList)
                        .then((result) => {
                        return result;
                    }).catch((err) => {
                        return;
                    });
                    return buildingListGeo;
                }).catch((err) => {
                    reject(new IInsightFacade_1.InsightError("No index.html!"));
                });
                return buildings;
            })
                .then((buildings) => {
                Util_1.default.info(buildings);
                currentZip.loadAsync(content, { base64: true })
                    .then((zip) => {
                    return this.addRooms.getRooms(buildings, zip)
                        .then((res) => {
                        return this.addRooms.filter(res);
                    }).catch((err) => {
                        return;
                    });
                })
                    .then((result) => {
                    Util_1.default.info("FINAL: ", result);
                    this.savedCoursesAndRooms[id] = result;
                    this.saveCoursesToDisk(result, id, content, kind);
                    return resolve(Object.keys(this.savedCoursesAndRooms));
                })
                    .catch((err) => {
                    reject(new IInsightFacade_1.InsightError("No rooms!"));
                });
            })
                .catch((err) => {
                Util_1.default.error(err);
                reject(new IInsightFacade_1.InsightError("Cannot parse zip!"));
            });
        });
    }
    coursesMain(id, content, kind) {
        return new Promise((resolve, reject) => {
            let currentZip = new JSZip();
            currentZip.loadAsync(content, { base64: true })
                .then((zip) => {
                let promiseContent = [];
                for (let file in zip.files) {
                    if (file.substr(0, 8) !== "courses/") {
                        continue;
                    }
                    let fileContent = zip.files[file].async("text")
                        .then((body) => {
                        return JSON.parse(body);
                    }).catch((err) => {
                        return null;
                    });
                    promiseContent.push(fileContent);
                }
                Promise.all(promiseContent)
                    .then((fileContent) => {
                    let allSections = [];
                    allSections = this.addCourses.findSections(fileContent);
                    if (Number(allSections.length) >= 1) {
                        this.savedCoursesAndRooms[id] = allSections;
                        this.saveCoursesToDisk(allSections, id, content, kind);
                        return resolve(Object.keys(this.savedCoursesAndRooms));
                    }
                    else {
                        return reject(new IInsightFacade_1.InsightError("Did not find at least one valid section!"));
                    }
                }).catch((err) => {
                    return reject(new IInsightFacade_1.InsightError("Cannot parse files!"));
                });
            })
                .catch((err) => {
                Util_1.default.error(err);
                return reject(new IInsightFacade_1.InsightError("Cannot parse zip!"));
            });
        });
    }
    saveCoursesToDisk(allSections, id, content, kind) {
        let currentCourse = { id: id, kind: kind, numRows: Object.keys(allSections).length };
        this.datasets.push(currentCourse);
        this.addCourses.storeFile(allSections, id);
    }
    isArgumentValid(id, content, kind) {
        let argumentValid = true;
        if (this.isUndefinedOrNull(id) || id.includes("_") || (id.replace(/\s/g, "") === "")) {
            argumentValid = false;
        }
        else if (this.isUndefinedOrNull(content) || this.isUndefinedOrNull(kind)) {
            argumentValid = false;
        }
        else if (this.isUndefinedOrNull(kind)) {
            argumentValid = false;
        }
        for (let data of this.datasets) {
            if (data.id === id) {
                argumentValid = false;
            }
        }
        return argumentValid;
    }
    removeDataset(id) {
        return new Promise((resolve, reject) => {
            if (this.isUndefinedOrNull(id) || id.includes("_") || (id.replace(/\s/g, "") === "")) {
                return reject(new IInsightFacade_1.InsightError("Invalid ID!"));
            }
            if (this.datasets.find((obj) => obj.id === id)) {
                delete this.savedCoursesAndRooms[id];
                this.datasets = this.datasets.filter((eachInsightDataset) => {
                    return eachInsightDataset.id !== String(id);
                });
                const fs = require("fs-extra");
                fs.removeSync("./data/" + id);
                return resolve(id);
            }
            else {
                return reject(new IInsightFacade_1.NotFoundError("ID is not in the dataset!"));
            }
        });
    }
    performQuery(query) {
        return new Promise((resolve, reject) => {
            let that = this;
            this.qValidator.init();
            if (!that.qValidator.isOverallValid(query, this.datasets)) {
                return reject(new IInsightFacade_1.InsightError("Invalid Query"));
            }
            else {
                let id = this.qValidator.id;
                let type = this.qValidator.type;
                let data;
                if (type === IInsightFacade_1.InsightDatasetKind.Courses) {
                    data = this.savedCoursesAndRooms[id];
                }
                else {
                    data = this.savedCoursesAndRooms[id];
                }
                let logics = query["WHERE"];
                let columns = query["OPTIONS"]["COLUMNS"];
                let trans = query["TRANSFORMATIONS"];
                let order = query["OPTIONS"]["ORDER"];
                this.qFactory.level = 0;
                let result = this.qFactory.performLogics(logics, columns, data);
                if (trans !== undefined) {
                    result = this.qFactory.performTrans(trans, result);
                }
                if (result.length > 5000) {
                    return reject(new IInsightFacade_1.ResultTooLargeError());
                }
                if (!this.isUndefinedOrNull(order)) {
                    result = this.qFactory.sortResult(result, order);
                }
                return resolve(this.qFactory.filterColumn(result, columns));
            }
        });
    }
    listDatasets() {
        return Promise.resolve(this.datasets);
    }
    isUndefinedOrNull(currentString) {
        return ((currentString == null) || false || (typeof currentString === "undefined"));
    }
}
exports.default = InsightFacade;
//# sourceMappingURL=InsightFacade.js.map