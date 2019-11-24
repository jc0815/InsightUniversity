"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scheduler {
    constructor() {
        this.timeSlots = ["MWF 0800-0900", "MWF 0900-1000", "MWF 1000-1100",
            "MWF 1100-1200", "MWF 1200-1300", "MWF 1300-1400", "MWF 1400-1500",
            "MWF 1500-1600", "MWF 1600-1700", "TR  0800-0930", "TR  0930-1100",
            "TR  1100-1230", "TR  1230-1400", "TR  1400-1530", "TR  1530-1700"];
        this.usedRooms = [];
    }
    schedule(sections, rooms) {
        let plan = [];
        sections = this.sortBySize(sections);
        let trials = 10;
        let planScoreArray = [];
        while (trials > 0) {
            let p = this.producePlan(sections, rooms);
            let score = this.getPlanScore(p, sections);
            let planScore = [score, p];
            planScoreArray.push(planScore);
            trials--;
        }
        let maxIdx = 0;
        let maxScore = 0;
        for (let ps in planScoreArray) {
            if (planScoreArray[ps][0] > maxScore) {
                maxScore = planScoreArray[ps][0];
                maxIdx = Number(ps);
            }
        }
        return planScoreArray[maxIdx][1];
    }
    producePlan(sections, rooms) {
        let plan = [];
        this.usedRooms = [];
        for (let i in sections) {
            let section = sections[i];
            let fitRooms = this.getAllFitRooms(section, rooms);
            let pair = this.getNextBestPair(section, fitRooms, plan);
            if (pair === [null, null]) {
                continue;
            }
            else {
                this.usedRooms.push(pair);
                plan.push([pair[0], section, pair[1]]);
            }
        }
        return plan;
    }
    getPlanScore(plan, sections) {
        let planSum = 0;
        let planMaxDist = 0;
        for (let p of plan) {
            let section = p[1];
            planSum = planSum + section.courses_audit + section.courses_pass + section.courses_fail;
            let room = p[0];
            let maxDist = 0;
            for (let pp of plan) {
                let room2 = pp[0];
                let lat1 = room.rooms_lat;
                let lon1 = room.rooms_lon;
                let lat2 = room2.rooms_lat;
                let lon2 = room2.rooms_lon;
                let dist = this.getDistance(lat1, lon1, lat2, lon2);
                if (dist > maxDist) {
                    maxDist = dist;
                }
            }
            if (maxDist > planMaxDist) {
                planMaxDist = maxDist;
            }
        }
        let sum = 0;
        for (let section of sections) {
            sum = sum + section.courses_audit + section.courses_pass + section.courses_fail;
        }
        return 0.7 * (planSum / sum) + 0.3 * (1 - (planMaxDist / 1397));
    }
    sortBySize(sections) {
        let sorted = sections.sort((s1, s2) => {
            let size1 = s1.courses_fail + s1.courses_pass + s1.courses_audit;
            let size2 = s2.courses_fail + s2.courses_pass + s2.courses_audit;
            if (size1 > size2) {
                return -1;
            }
            if (size1 < size2) {
                return 1;
            }
            return 0;
        });
        return sorted;
    }
    getNextBestPair(section, rooms, plan) {
        let hasFit = false;
        let maxDistArray = [];
        let slotArray = [];
        for (let i in rooms) {
            let lat = rooms[i].rooms_lat;
            let lon = rooms[i].rooms_lon;
            let hasTime = false;
            let slot;
            for (let j in this.timeSlots) {
                if (this.checkRoomSlot(rooms[i], this.timeSlots[j], section, plan)) {
                    hasTime = true;
                    hasFit = true;
                    slot = this.timeSlots[j];
                    break;
                }
            }
            if (hasTime) {
                let max = 0;
                for (let p of plan) {
                    let rm = p[0];
                    let dist = this.getDistance(lat, lon, rm.rooms_lat, rm.rooms_lon);
                    if (dist > max) {
                        max = dist;
                    }
                }
                maxDistArray.push(max);
                slotArray.push(slot);
            }
            else {
                maxDistArray.push(10000000);
                slotArray.push(null);
            }
        }
        if (!hasFit) {
            return [null, null];
        }
        else {
            let idx = maxDistArray.indexOf(Math.min(...maxDistArray));
            if (plan.length === 0) {
                idx = Math.floor(Math.random() * (rooms.length));
            }
            return [rooms[idx], slotArray[idx]];
        }
    }
    getAllFitRooms(section, rooms) {
        let size = section.courses_audit + section.courses_pass + section.courses_fail;
        let res = [];
        for (let room of rooms) {
            if (room.rooms_seats >= size) {
                res.push(room);
            }
        }
        return res;
    }
    checkRoomSlot(room, slot, section, plan) {
        for (let pair of this.usedRooms) {
            if (pair[0] === room && pair[1] === slot) {
                return false;
            }
        }
        let course = section.courses_dept + section.courses_id;
        for (let p of plan) {
            let thisCourse = p[1].courses_dept + p[1].courses_id;
            if (thisCourse === course && p[2] === slot) {
                return false;
            }
        }
        return true;
    }
    getDistance(lat1, lon1, lat2, lon2) {
        let r = 6371e3;
        lat1 = this.toRadians(lat1);
        lat2 = this.toRadians(lat2);
        let latDiff = this.toRadians(lat2 - lat1);
        let lonDiff = this.toRadians(lon2 - lon1);
        let a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
                Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return r * c;
    }
    toRadians(degree) {
        return degree * (Math.PI / 180);
    }
}
exports.default = Scheduler;
//# sourceMappingURL=Scheduler.js.map