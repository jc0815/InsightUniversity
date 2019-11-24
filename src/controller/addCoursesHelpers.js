"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../Util");
class AddCoursesHelpers {
    constructor() {
        Util_1.default.trace("addDataset::init()");
    }
    findSections(fileContent) {
        let allSections = [];
        for (let jsonFile of fileContent) {
            try {
                if (jsonFile === null || jsonFile["result"] === null || !("result" in jsonFile)) {
                    continue;
                }
                for (let section of jsonFile["result"]) {
                    if (this.isSectionInvalid(section)) {
                        continue;
                    }
                    if (this.typeCheckSection(section)) {
                        allSections.push(this.sortSection(section));
                    }
                }
            }
            catch (err) {
                continue;
            }
        }
        return allSections;
    }
    typeCheckSection(section) {
        return (typeof (section["Section"] === String) && typeof (section["Title"] === String)
            && typeof (section["id"] === String) && typeof (section["Professor"] === String)
            && typeof (section["Course"] === String) && typeof (section["Avg"] === String)
            && typeof (section["Year"] === Number) && typeof (section["Pass"] === String)
            && typeof (section["Audit"] === String) && typeof (section["Fail"] === String));
    }
    isSectionInvalid(section) {
        return (!("Section" in section) || !("id" in section)
            || !("Professor" in section) || !("Audit" in section)
            || !("Title" in section) || !("Year" in section)
            || !("Course" in section) || !("Pass" in section)
            || !("Fail" in section) || !("Avg" in section)
            || !("Subject" in section));
    }
    sortSection(section) {
        let saveSection = {};
        saveSection["courses_dept"] = String(section["Subject"]);
        saveSection["courses_id"] = String(section["Course"]);
        saveSection["courses_avg"] = Number(section["Avg"]);
        saveSection["courses_instructor"] = String(section["Professor"]);
        saveSection["courses_title"] = String(section["Title"]);
        saveSection["courses_pass"] = Number(section["Pass"]);
        saveSection["courses_fail"] = Number(section["Fail"]);
        saveSection["courses_audit"] = Number(section["Audit"]);
        saveSection["courses_uuid"] = String(section["id"]);
        if (String(section["Section"]) === "overall") {
            saveSection["courses_year"] = Number(1900);
        }
        else {
            saveSection["courses_year"] = Number(section["Year"]);
        }
        return saveSection;
    }
    storeFile(sections, id) {
        let fs = require("fs");
        if (!fs.existsSync("./data/")) {
            fs.mkdirSync("./data/");
        }
        let newDir = "./data/" + id;
        if (!fs.existsSync(newDir)) {
            fs.mkdirSync(newDir);
        }
        fs.writeFile(newDir + "/" + id + ".json", JSON.stringify(sections), (err) => {
            if (err) {
                return Util_1.default.error(err);
            }
        });
    }
    isUndefinedOrNull(currentString) {
        return ((currentString == null) || false || (typeof currentString === "undefined"));
    }
}
exports.AddCoursesHelpers = AddCoursesHelpers;
//# sourceMappingURL=addCoursesHelpers.js.map