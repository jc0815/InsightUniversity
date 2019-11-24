"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../Util");
class AddRoomsHelpers {
    constructor() {
        Util_1.default.trace("addDataset::init()");
        this.http = require("http");
    }
    filter(roomsList) {
        let filtered = roomsList.filter((el) => {
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
    getRooms(buildingList, zip) {
        const parse5 = require("parse5");
        let roomsList = [];
        for (let building in buildingList) {
            let currentBuilding = buildingList[building];
            let address = "rooms/campus/discover/buildings-and-classrooms/" + currentBuilding["rooms_shortname"];
            let promise = zip.files[String(address)].async("text")
                .then((result) => {
                let roomsInBuilding = this.parseRooms(currentBuilding, parse5.parse(result));
                return roomsInBuilding;
            }).catch((err) => {
                return;
            });
            if (promise !== undefined && promise !== null) {
                roomsList = roomsList.concat(promise);
            }
        }
        return Promise.all(roomsList);
    }
    parseRooms(currentBuilding, roomFile) {
        let rooms = [];
        for (let child in roomFile.childNodes) {
            if (roomFile.childNodes[child].nodeName === "html") {
                for (let childInHtml in roomFile.childNodes[child].childNodes) {
                    if (roomFile.childNodes[child].childNodes[childInHtml].nodeName === "body") {
                        let htmlBody = roomFile.childNodes[child].childNodes[childInHtml];
                        let tableOfRooms = this.parseHtmlBodyRooms(htmlBody);
                        this.tbodyRooms = null;
                        let everyRoom = this.findEveryRoom(currentBuilding, tableOfRooms);
                        rooms = rooms.concat(everyRoom);
                    }
                }
            }
        }
        return rooms;
    }
    parseHtmlBodyRooms(div) {
        let promise = null;
        if (div.nodeName === "tbody") {
            this.tbodyRooms = div;
            return div;
        }
        else if (div.childNodes) {
            for (let child in div.childNodes) {
                if (this.tbodyRooms !== null && this.tbodyRooms !== undefined) {
                    break;
                }
                else {
                    promise = this.parseHtmlBodyRooms(div.childNodes[child]);
                }
            }
        }
        return promise;
    }
    findEveryRoom(currentBuilding, divRooms) {
        let roomList = [];
        for (let tr in divRooms.childNodes) {
            let currentTr = divRooms.childNodes[tr];
            if (currentTr.nodeName === "tr") {
                let saveBuilding = {};
                try {
                    saveBuilding["rooms_number"] = String(currentTr.childNodes[1]
                        .childNodes[1].childNodes[0].value.trim());
                    saveBuilding["rooms_seats"] = Number(currentTr.childNodes[3].childNodes[0].value.trim());
                    saveBuilding["rooms_furniture"] = String(currentTr.childNodes[5].childNodes[0].value.trim());
                    saveBuilding["rooms_type"] = String(currentTr.childNodes[7].childNodes[0].value.trim());
                }
                catch (err) {
                    continue;
                }
                saveBuilding["rooms_shortname"] = currentBuilding["rooms_shortname"];
                saveBuilding["rooms_fullname"] = currentBuilding["rooms_fullname"];
                saveBuilding["rooms_address"] = currentBuilding["rooms_address"];
                saveBuilding["rooms_lat"] = currentBuilding["rooms_lat"];
                saveBuilding["rooms_lon"] = currentBuilding["rooms_lon"];
                saveBuilding["rooms_name"] = saveBuilding["rooms_shortname"] + "_" + saveBuilding["rooms_number"];
                saveBuilding["rooms_href"] = "http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/"
                    + saveBuilding["rooms_shortname"] + "-" + saveBuilding["rooms_number"];
                if (saveBuilding !== undefined && saveBuilding !== null) {
                    roomList = roomList.concat(saveBuilding);
                }
            }
        }
        return roomList;
    }
    getBuildings(htmlContent) {
        return this.parseBuildings(htmlContent);
    }
    parseBuildings(div) {
        for (let child in div.childNodes) {
            if (div.childNodes[child].nodeName === "html") {
                for (let childInHtml in div.childNodes[child].childNodes) {
                    if (div.childNodes[child].childNodes[childInHtml].nodeName === "body") {
                        let table = this.parseHtmlBodyBuildings(div.childNodes[child].childNodes[childInHtml]);
                        return this.findEveryBuilding(table);
                    }
                }
            }
        }
    }
    parseHtmlBodyBuildings(div) {
        let promise = null;
        if (div.nodeName === "tbody") {
            this.tbodyBuildings = div;
            return div;
        }
        else if (div.childNodes) {
            for (let child in div.childNodes) {
                if (this.tbodyBuildings !== null && this.tbodyBuildings !== undefined) {
                    break;
                }
                else {
                    promise = this.parseHtmlBodyBuildings(div.childNodes[child]);
                }
            }
        }
        return promise;
    }
    findEveryBuilding(tableDiv) {
        let buildingList = [];
        for (let tr in tableDiv.childNodes) {
            if (tableDiv.childNodes[tr].nodeName === "tr") {
                let currentBuilding = tableDiv.childNodes[tr];
                let saveBuilding = {};
                try {
                    saveBuilding["rooms_shortname"] = String(currentBuilding.childNodes[3].childNodes[0].value.trim());
                    saveBuilding["rooms_fullname"] = String(currentBuilding.childNodes[5].
                        childNodes[1].childNodes[0].value.trim());
                    saveBuilding["rooms_address"] = String(currentBuilding.childNodes[7].childNodes[0].value.trim());
                }
                catch (err) {
                    continue;
                }
                buildingList.push(saveBuilding);
            }
        }
        return buildingList;
    }
    sortGeoLocation(buildingList) {
        let promises = [];
        let requestUrl = "http://cs310.students.cs.ubc.ca:11316/api/v1/project_team120/";
        for (let building in buildingList) {
            let promise = new Promise((resolve, reject) => {
                this.getLatLon(requestUrl, buildingList[building]["rooms_address"])
                    .then((result) => {
                    try {
                        let promiseBuilding = {};
                        promiseBuilding["rooms_shortname"] = buildingList[building]["rooms_shortname"];
                        promiseBuilding["rooms_fullname"] = buildingList[building]["rooms_fullname"];
                        promiseBuilding["rooms_address"] = buildingList[building]["rooms_address"];
                        promiseBuilding["rooms_lat"] = Number(result.lat);
                        promiseBuilding["rooms_lon"] = Number(result.lon);
                        resolve(promiseBuilding);
                    }
                    catch (err) {
                        reject();
                    }
                }).catch((err) => {
                    reject();
                });
            });
            promises.push(promise);
        }
        return Promise.all(promises);
    }
    getLatLon(url, address) {
        let result;
        let requestUrl = String(url) + String(address.replace(" ", "%20"));
        return new Promise((resolve, reject) => {
            this.http.get(requestUrl, (res) => {
                const { statusCode } = res;
                const contentType = res.headers["content-type"];
                let error;
                if (statusCode !== 200) {
                    reject(null);
                }
                else if (!/^application\/json/.test(contentType)) {
                    reject(null);
                }
                if (error) {
                    reject(null);
                    res.resume();
                    return;
                }
                res.setEncoding("utf8");
                let rawData = "";
                res.on("data", (chunk) => {
                    rawData += chunk;
                });
                res.on("end", () => {
                    try {
                        result = JSON.parse(rawData);
                        resolve(result);
                    }
                    catch (e) {
                    }
                });
            }).on("error", (e) => {
                reject(null);
            });
        });
    }
}
exports.AddRoomsHelpers = AddRoomsHelpers;
//# sourceMappingURL=addRoomsHelpers.js.map