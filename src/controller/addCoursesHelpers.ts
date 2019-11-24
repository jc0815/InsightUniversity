import Log from "../Util";


/*
 * Helpers for addDataset: Courses
 */
export class AddCoursesHelpers {

    constructor() {
        Log.trace("addDataset::init()");
    }

    // AddDataset: helper to find sections
    public findSections(fileContent: any) {
        let allSections: any = [];
        for (let jsonFile of fileContent) { // for every json file
            try {
                // if jsonFile is unreadable or can't find "result"
                if (jsonFile === null || jsonFile["result"] === null || !("result" in jsonFile)) {
                    continue; // skip to next file
                }
                for (let section of jsonFile["result"]) { // get value with key "result"
                    if (this.isSectionInvalid(section)) {
                        continue;
                    } // if section invalid
                    if (this.typeCheckSection(section)) { // type check each element
                        allSections.push(this.sortSection(section)); // add to array of sections
                    }
                }
            } catch (err) { // if anything goes wrong
                continue; // skip to next file
            }
        }
        return allSections;
    }

    // AddDataset: helper to type check necessary elements of a section
    public typeCheckSection(section: any) {
        return (typeof (section["Section"] === String) && typeof (section["Title"] === String)
            && typeof (section["id"] === String) && typeof (section["Professor"] === String)
            && typeof (section["Course"] === String) && typeof (section["Avg"] === String)
            && typeof (section["Year"] === Number) && typeof (section["Pass"] === String)
            && typeof (section["Audit"] === String) && typeof (section["Fail"] === String));
    }

    // AddDataset: helper to verify a section
    public isSectionInvalid(section: any) {
        return (!("Section" in section) || !("id" in section)
            || !("Professor" in section) || !("Audit" in section)
            || !("Title" in section) || !("Year" in section)
            || !("Course" in section) || !("Pass" in section)
            || !("Fail" in section) || !("Avg" in section)
            || !("Subject" in section));
    }

    // AddDataset: helper to sort a single section
    public sortSection(section: any) {
        let saveSection: any = {};
        saveSection["courses_dept"] = String(section["Subject"]); // course dept
        saveSection["courses_id"] = String(section["Course"]); // course number
        saveSection["courses_avg"] = Number(section["Avg"]); // course avg
        saveSection["courses_instructor"] = String(section["Professor"]); // course prof
        saveSection["courses_title"] = String(section["Title"]); // course name
        saveSection["courses_pass"] = Number(section["Pass"]); // course # pass
        saveSection["courses_fail"] = Number(section["Fail"]); // course # fail
        saveSection["courses_audit"] = Number(section["Audit"]); // course # audit
        saveSection["courses_uuid"] = String(section["id"]); // section ID
        if (String(section["Section"]) === "overall") {
            saveSection["courses_year"] = Number(1900);
        } else {
            saveSection["courses_year"] = Number(section["Year"]); // course year
        }
        return saveSection;
    }

    // AddDataset: helper to store data to disk
    public storeFile(sections: any, id: string) {
        let fs = require("fs");
        if (!fs.existsSync("./data/")) {
            fs.mkdirSync("./data/");
        }
        let newDir = "./data/" + id;
        if (!fs.existsSync(newDir)) {
            fs.mkdirSync(newDir);
        }
        fs.writeFile(newDir + "/" + id + ".json", JSON.stringify(sections), (err: any) => {
            if (err) {
                return Log.error(err);
            }
        });
    }

    // Helper for getting undefined || null values
    public isUndefinedOrNull(currentString: any) {
        return ((currentString == null) || false || (typeof currentString === "undefined"));
    }

}
