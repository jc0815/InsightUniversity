import Log from "../Util";

/*
 * Helpers for addDataset: Rooms
 */
export class AddRoomsHelpers {

    private tbodyBuildings: any;
    private tbodyRooms: any;
    private http: any;

    constructor() {
        Log.trace("addDataset::init()");
        this.http = require("http");
    }

    public filter(roomsList: any) {
        let filtered = roomsList.filter((el: any) => {
            return el != null;
        });
        let roomsFilterd = [];
        for (let filter in filtered) {
            for (let room in filtered[filter]) {
                roomsFilterd.push(filtered[filter][room]);
            }
        }
        return roomsFilterd;
    }

    // main for getting rooms
    public getRooms(buildingList: any, zip: any) {
        const parse5 = require("parse5");
        // Log.info("BUILDINGS: ", buildingList);
        let roomsList: any[] = [];
        for (let building in buildingList) {
            let currentBuilding = buildingList[building];
            let address = "rooms/campus/discover/buildings-and-classrooms/" + currentBuilding["rooms_shortname"];
            // Log.info(address);
            let promise = zip.files[String(address)].async("text")
                .then((result: any) => {
                    let roomsInBuilding = this.parseRooms(currentBuilding, parse5.parse(result));
                    return roomsInBuilding;
                }).catch((err: any) => {
                    return;
                });
            if (promise !== undefined && promise !== null) {
                // for (let rooms in promise) {
                //     roomsList.push(rooms);
                // }
                roomsList = roomsList.concat(promise);
            }
        }
        return Promise.all(roomsList);
    }

    // finds tbody in building file
    // returns list of every room of every building
    public parseRooms(currentBuilding: any, roomFile: any) {
        let rooms: any[] = [];
        for (let child in roomFile.childNodes) {
            // Log.info(div.childNodes[child]);
            if (roomFile.childNodes[child].nodeName === "html") {
                // Log.info("Found html");
                for (let childInHtml in roomFile.childNodes[child].childNodes) {
                    if (roomFile.childNodes[child].childNodes[childInHtml].nodeName === "body") {
                        // Log.info("Found body");
                        let htmlBody = roomFile.childNodes[child].childNodes[childInHtml];
                        let tableOfRooms = this.parseHtmlBodyRooms(htmlBody);
                        this.tbodyRooms = null;
                        let everyRoom = this.findEveryRoom(currentBuilding, tableOfRooms);
                        // everyRoom is okay
                        rooms = rooms.concat(everyRoom);
                    }
                }
            }
        }
        return rooms;
    }

    // parses html to find tbody of building html
    // returns tbody content
    public parseHtmlBodyRooms(div: any): any {
        let promise = null;
        if (div.nodeName === "tbody") {
            // Log.info("Found tbody");
            this.tbodyRooms = div;
            return div;
        } else if (div.childNodes) {
            for (let child in div.childNodes) {
                if (this.tbodyRooms !== null && this.tbodyRooms !== undefined) {
                    break;
                } else {
                    promise = this.parseHtmlBodyRooms(div.childNodes[child]);
                }
            }
        }
        return promise;
    }

    // finds every room in one building
    // returns list of every room in one building
    public findEveryRoom(currentBuilding: any, divRooms: any) {
        let roomList: any[] = [];
        for (let tr in divRooms.childNodes) {
            let currentTr = divRooms.childNodes[tr];
            if (currentTr.nodeName === "tr") {
                let saveBuilding: any = {};
                try {
                    saveBuilding["rooms_number"] = String(currentTr.childNodes[1]
                                                    .childNodes[1].childNodes[0].value.trim());
                    saveBuilding["rooms_seats"] = Number(currentTr.childNodes[3].childNodes[0].value.trim());
                    saveBuilding["rooms_furniture"] = String(currentTr.childNodes[5].childNodes[0].value.trim());
                    saveBuilding["rooms_type"] = String(currentTr.childNodes[7].childNodes[0].value.trim());
                } catch (err) {
                    continue;
                }
                saveBuilding["rooms_shortname"] = currentBuilding["rooms_shortname"];
                saveBuilding["rooms_fullname"] = currentBuilding["rooms_fullname"];
                saveBuilding["rooms_address"] = currentBuilding["rooms_address"];
                saveBuilding["rooms_lat"] = currentBuilding["rooms_lat"];
                saveBuilding["rooms_lon"] = currentBuilding["rooms_lon"];
                saveBuilding["rooms_name"] =  saveBuilding["rooms_shortname"] + "_" + saveBuilding["rooms_number"];
                saveBuilding["rooms_href"] =  "http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/"
                    + saveBuilding["rooms_shortname"] + "-" + saveBuilding["rooms_number"];
                // Log.info(saveBuilding);
                if (saveBuilding !== undefined && saveBuilding !== null) {
                    roomList = roomList.concat(saveBuilding);
                }

            }
        }
        return roomList;
    }

    // main for getting buildings
    public getBuildings(htmlContent: any) {
        return this.parseBuildings(htmlContent);
    }

    // main method to get all buildings
    public parseBuildings(div: any) {
        for (let child in div.childNodes) {
            // Log.info(div.childNodes[child]);
            if (div.childNodes[child].nodeName === "html") {
                // Log.info("Found html");
                for (let childInHtml in div.childNodes[child].childNodes) {
                    if (div.childNodes[child].childNodes[childInHtml].nodeName === "body") {
                        // Log.info("Found body");
                        let table = this.parseHtmlBodyBuildings(div.childNodes[child].childNodes[childInHtml]);
                        return this.findEveryBuilding(table);
                    }
                }
            }
        }
    }

    // parses html to find tbody of index.html
    // returns tbody content
    public parseHtmlBodyBuildings(div: any): any {
        let promise = null;
        if (div.nodeName === "tbody") {
            // Log.info("Found tbody");
            this.tbodyBuildings = div;
            return div;
        } else if (div.childNodes) {
            for (let child in div.childNodes) {
                if (this.tbodyBuildings !== null && this.tbodyBuildings !== undefined) {
                    break;
                } else {
                    promise = this.parseHtmlBodyBuildings(div.childNodes[child]);
                }
            }
        }
        return promise;
    }

    // parses tbody and finds every building details
    // returns building object list
    public findEveryBuilding(tableDiv: any) {
        let buildingList: any[] = [];
        for (let tr in tableDiv.childNodes) {
            if (tableDiv.childNodes[tr].nodeName === "tr") {
                let currentBuilding = tableDiv.childNodes[tr];
                let saveBuilding: any = {};
                try {
                    saveBuilding["rooms_shortname"] = String(currentBuilding.childNodes[3].childNodes[0].value.trim());
                    saveBuilding["rooms_fullname"] = String(currentBuilding.childNodes[5].
                        childNodes[1].childNodes[0].value.trim());
                    saveBuilding["rooms_address"] = String(currentBuilding.childNodes[7].childNodes[0].value.trim());
                } catch (err) {
                    // Log.error(err);
                    continue;
                }
                buildingList.push(saveBuilding);
            }
        }
        return buildingList;
    }

    // makes a request for each building for geo loc.
    public sortGeoLocation(buildingList: any) {
        let promises: any[] = [];
        let requestUrl = "http://cs310.students.cs.ubc.ca:11316/api/v1/project_team120/";
        for (let building in buildingList) {
            let promise = new Promise((resolve, reject) => {
                this.getLatLon(requestUrl, buildingList[building]["rooms_address"])
                    .then((result: any) => {
                        try {
                            let promiseBuilding: any = {};
                            promiseBuilding["rooms_shortname"] = buildingList[building]["rooms_shortname"];
                            promiseBuilding["rooms_fullname"] = buildingList[building]["rooms_fullname"];
                            promiseBuilding["rooms_address"] = buildingList[building]["rooms_address"];
                            promiseBuilding["rooms_lat"] = Number(result.lat);
                            promiseBuilding["rooms_lon"] = Number(result.lon);
                            resolve(promiseBuilding);
                        } catch (err) {
                            reject();
                        }
                    }).catch((err: any) => {
                        reject();
                    });
            });
            promises.push(promise);

        }
        return Promise.all(promises);
    }

    // make a request for lat & lon
    public getLatLon(url: any, address: any) {
        let result;
        let requestUrl = String(url) + String(address.replace(" ", "%20"));
        // ----------------------------------------------
        // Note: everything in request below was taken
        //       from the original documentation:
        //       https://nodejs.org/api/http.html
        // ----------------------------------------------
        return new Promise((resolve, reject) => {
            this.http.get(requestUrl, (res: any) => {
            const { statusCode } = res;
            const contentType = res.headers["content-type"];
            let error;
            if (statusCode !== 200) {
                reject(null);
            } else if (!/^application\/json/.test(contentType)) {
                reject(null);
            }
            if (error) {
                reject(null);
                res.resume();
                return;
            }
            res.setEncoding("utf8");
            let rawData = "";
            res.on("data", (chunk: any) => {
                rawData += chunk;
            });
            res.on("end", () => {
            try {
                result = JSON.parse(rawData);
                resolve(result);
                // Log.info(parsedData);
                } catch (e) {
                // Log.error(e.message);
            }
            });
          }).on("error", (e: any) => {
              reject(null);
          });
        });
        // return result;
    }

}
