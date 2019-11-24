import Log from "../Util";
import {
    IInsightFacade,
    InsightDataset,
    InsightDatasetKind,
    InsightError,
    NotFoundError,
    ResultTooLargeError
} from "./IInsightFacade";
import * as JSZip from "jszip";
import {QueryValidator} from "./QueryValidator";
import {QueryFactory} from "./QueryFactory";
import {AddCoursesHelpers} from "./addCoursesHelpers";
import {AddRoomsHelpers} from "./addRoomsHelpers";

/**
 * This is the main programmatic entry point for the project.
 * Method documentation is in IInsightFacade
 *
 */
export default class InsightFacade implements IInsightFacade {

    private datasets: InsightDataset[];
    // private savedCourses: any = {};
    // private savedRooms: any = {};
    private savedCoursesAndRooms: any = {};
    public qValidator: QueryValidator = new QueryValidator();
    public qFactory: QueryFactory = new QueryFactory();
    public addCourses: AddCoursesHelpers = new AddCoursesHelpers();
    public addRooms: AddRoomsHelpers = new AddRoomsHelpers();

    constructor() {
        Log.trace("InsightFacadeImpl::init()");
        this.datasets = [];
        // this.savedCourses = {};
        // this.savedRooms = {};
        this.savedCoursesAndRooms = {};
    }

    public addDataset(id: string, content: string, kind: InsightDatasetKind): Promise<string[]> {
        if (!this.isArgumentValid(id, content, kind)) {
            return Promise.reject(new InsightError("Invalid argument!"));
        }
        if (kind === InsightDatasetKind.Courses) { // if dataset is Course
            return this.coursesMain(id, content, kind);
        } else if (kind === InsightDatasetKind.Rooms) { // if dataset is Room
            return this.roomsMain(id, content, kind);
        } else {
            return Promise.reject(new InsightError("Not course data set kind!"));
        }
    }

    // AddDataset: main function to parse and save Rooms folder
    public roomsMain(id: string, content: string, kind: InsightDatasetKind): Promise<string[]> {
        return new Promise((resolve, reject) => {
            let currentZip = new JSZip();
            const parse5 = require("parse5");
            currentZip.loadAsync(content, {base64: true})
                .then((zip) => {
                    let buildings = zip.files["rooms/index.htm"].async("text")
                        .then((body) => {
                            // 1: return parse5.parse(body);
                            let buildingList: any = this.addRooms.getBuildings(parse5.parse(body));
                            let buildingListGeo: any = this.addRooms.sortGeoLocation(buildingList)
                                .then((result) => {
                                    // Log.info(result);
                                    return result;
                                }).catch((err) => {
                                    return;
                                });
                            return buildingListGeo;
                        }).catch((err) => {
                            reject(new InsightError("No index.html!"));
                        });
                    return buildings;
                })
                .then((buildings) => {
                    Log.info(buildings);
                    currentZip.loadAsync(content, {base64: true})
                        .then((zip) => {
                            return this.addRooms.getRooms(buildings, zip)
                                .then((res) => {
                                    // Log.info("res: ", res);
                                    return this.addRooms.filter(res);
                                }).catch((err) => {
                                    return;
                                });
                            // Log.info(JSON.stringify(roomList));
                            // return roomList;
                        })
                        .then((result: any) => {
                            Log.info("FINAL: ", result);
                            this.savedCoursesAndRooms[id] = result;
                            this.saveCoursesToDisk(result, id, content, kind);
                            // Log.info(this.savedRooms);
                            return resolve(Object.keys(this.savedCoursesAndRooms)); // pass
                        })
                        .catch((err) => {
                            reject(new InsightError("No rooms!"));
                        });
                })
                .catch((err) => {
                    Log.error(err);
                    reject(new InsightError("Cannot parse zip!")); // Couldn't parse zip
                });
        });
    }

    // AddDataset: main function to parse and save courses folder
    public coursesMain(id: string, content: string, kind: InsightDatasetKind): Promise<string[]> {
        return new Promise((resolve, reject) => { // returns a promise ( resolve | reject )
            let currentZip = new JSZip();
            currentZip.loadAsync(content, {base64: true})
                .then((zip) => {
                    let promiseContent = []; // where json data will be stored
                    for (let file in zip.files) { // for each file in courses.zip
                        if (file.substr(0, 8) !== "courses/") {
                            continue;
                        }
                        let fileContent = zip.files[file].async("text")
                            .then((body) => {
                                return JSON.parse(body);
                            }).catch((err) => {
                                return null;
                            });
                        promiseContent.push(fileContent); // push all json content to array
                    }
                    Promise.all(promiseContent) // Waits for content to be stored
                        .then((fileContent) => {
                            let allSections: any = [];
                            allSections = this.addCourses.findSections(fileContent);
                            if (Number(allSections.length) >= 1) { // if there are at least one good section
                                this.savedCoursesAndRooms[id] = allSections; // store to current instance with ID as key
                                this.saveCoursesToDisk(allSections, id, content, kind);
                                // Log.info(this.listDatasets());
                                return resolve(Object.keys(this.savedCoursesAndRooms)); // pass
                            } else { // couldn't find any good section
                                return reject(new InsightError("Did not find at least one valid section!"));
                            }
                        }).catch((err) => {
                        return reject(new InsightError("Cannot parse files!")); // Couldn't parse file in zip
                    });
                })
                .catch((err) => {
                    Log.error(err);
                    return reject(new InsightError("Cannot parse zip!")); // Couldn't parse zip
                });
        });
    }

    // AddDataset: helper to save data to memory
    public saveCoursesToDisk(allSections: any, id: string, content: string, kind: InsightDatasetKind) {
        // Log.info(Object.keys(allSections).length);
        // this.savedCourses[id] = allSections;
        let currentCourse: InsightDataset = {id: id, kind: kind, numRows: Object.keys(allSections).length};
        this.datasets.push(currentCourse); // store dataset to current instance
        // Log.info("Result: " + Object.keys(this.savedCourses));
        this.addCourses.storeFile(allSections, id); // save current folder with data structure to directory
    }

    // AddDataset: helper to check boundary values for argument names
    public isArgumentValid(id: string, content: string, kind: InsightDatasetKind) {
        let argumentValid: boolean = true;
        if (this.isUndefinedOrNull(id) || id.includes("_") || (id.replace(/\s/g, "") === "")) { // ID has underscore
            argumentValid = false;
        } else if (this.isUndefinedOrNull(content) || this.isUndefinedOrNull(kind)) { // content is undefined or null
            argumentValid = false;
        } else if (this.isUndefinedOrNull(kind)) { // kind is undefined or null
            argumentValid = false;
        }
        for (let data of this.datasets) { // cannot have duplicate dataset IDs
            if (data.id === id) {
                argumentValid = false;
            }
        }
        return argumentValid;
    }

    // removes a dataset from datasets
    public removeDataset(id: string): Promise<string> {
        return new Promise((resolve, reject) => {
            // checks if id is valid
            if (this.isUndefinedOrNull(id) || id.includes("_") || (id.replace(/\s/g, "") === "")) {
                return reject(new InsightError("Invalid ID!"));
            }
            if (this.datasets.find((obj) => obj.id === id)) { // if id exists
                delete this.savedCoursesAndRooms[id]; // deletes from instance
                // reset dataset without the id
                this.datasets = this.datasets.filter((eachInsightDataset) => {
                    return eachInsightDataset.id !== String(id);
                });
                // removes from disk
                const fs = require("fs-extra");
                fs.removeSync("./data/" + id);
                return resolve(id);
            } else {
                return reject(new NotFoundError("ID is not in the dataset!"));
            }
        });
    }

    public performQuery(query: any): Promise<any[]> {
        return new Promise<any[]>((resolve, reject) => {
            let that = this;

            this.qValidator.init(); // initialize fields of validator
            if (!that.qValidator.isOverallValid(query, this.datasets)) {
                return reject(new InsightError("Invalid Query"));
            } else {
                let id: string = this.qValidator.id;
                let type: InsightDatasetKind = this.qValidator.type;
                let data: object[];
                if (type === InsightDatasetKind.Courses) {
                    data = this.savedCoursesAndRooms[id];
                } else {
                    data = this.savedCoursesAndRooms[id];
                }

                let logics: object = query["WHERE"];
                let columns: string[] = query["OPTIONS"]["COLUMNS"];
                let trans: object = query["TRANSFORMATIONS"]; // could be undefined
                let order: any = query["OPTIONS"]["ORDER"]; // NOTE: order can be either a string or an object
                this.qFactory.level = 0;
                let result: object[] = this.qFactory.performLogics(logics, columns, data);

                if (trans !== undefined) {
                    result = this.qFactory.performTrans(trans, result);
                }
                if (result.length > 5000) {
                    return reject(new ResultTooLargeError());
                }
                if (!this.isUndefinedOrNull(order)) {
                    // ------------- TEST -------------
                    // let testOrder = "courses_dept";
                    // let testResult = [{ courses_avg: 97.08, courses_dept: "epse"},
                    //     { courses_avg: 92.58, courses_dept: "cpsc"}, { courses_avg: 38.08, courses_dept: "phys"}];
                    // Log.info(this.qFactory.sortResult(testResult, testOrder));
                    // return resolve(this.qFactory.sortResult(testResult, testOrder));
                    // --------------------------------
                    result = this.qFactory.sortResult(result, order);
                }
                return resolve(this.qFactory.filterColumn(result, columns)); // filter result by specified columns
            }
        });
    }

    public listDatasets(): Promise<InsightDataset[]> {
        return Promise.resolve(this.datasets);
    }

    // Helper for getting undefined || null values
    public isUndefinedOrNull(currentString: any) {
        return ((currentString == null) || false || (typeof currentString === "undefined"));
    }
}
