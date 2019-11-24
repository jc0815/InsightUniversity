import {IScheduler, SchedRoom, SchedSection, TimeSlot} from "./IScheduler";

export default class Scheduler implements IScheduler {

    private timeSlots: TimeSlot[] = ["MWF 0800-0900", "MWF 0900-1000", "MWF 1000-1100",
        "MWF 1100-1200", "MWF 1200-1300",  "MWF 1300-1400", "MWF 1400-1500",
        "MWF 1500-1600", "MWF 1600-1700", "TR  0800-0930", "TR  0930-1100",
        "TR  1100-1230" , "TR  1230-1400", "TR  1400-1530", "TR  1530-1700"];

    private usedRooms: Array<[SchedRoom, TimeSlot]> = [];

    public schedule(sections: SchedSection[], rooms: SchedRoom[]): Array<[SchedRoom, SchedSection, TimeSlot]> {
        let plan: Array<[SchedRoom, SchedSection, TimeSlot]> = []; // the result

        // sort sections by size
        sections = this.sortBySize(sections);
        let trials: number = 10;
        let planScoreArray: Array<[number, Array<[SchedRoom, SchedSection, TimeSlot]>]> = [];
        // do 100 trials to produce 100 plans
        while (trials > 0) {
            let p: Array<[SchedRoom, SchedSection, TimeSlot]> = this.producePlan(sections, rooms);
            let score: number = this.getPlanScore(p, sections);
            let planScore: [number, Array<[SchedRoom, SchedSection, TimeSlot]>] = [score, p]; // store in score-plan
            planScoreArray.push(planScore);
            trials--;
        }
        // get highest score plan
        let maxIdx: number = 0;
        let maxScore: number = 0;
        for (let ps in planScoreArray) {
            if (planScoreArray[ps][0] > maxScore) {
                maxScore = planScoreArray[ps][0];
                maxIdx = Number(ps);
            }
        }
        return planScoreArray[maxIdx][1];
    }

    private producePlan(sections: SchedSection[], rooms: SchedRoom[]): Array<[SchedRoom, SchedSection, TimeSlot]> {
        let plan: Array<[SchedRoom, SchedSection, TimeSlot]> = []; // the result
        this.usedRooms = [];

        for (let i in sections) {
            let section: SchedSection = sections[i];
            let fitRooms: SchedRoom[] = this.getAllFitRooms(section, rooms); // get all rooms that fit
            let pair: [SchedRoom, TimeSlot] = this.getNextBestPair(section, fitRooms, plan);
            if (pair === [null, null]) {
                continue; // if no valid room can be fitted for this section
            } else {
                this.usedRooms.push(pair);
                plan.push([pair[0], section, pair[1]]);
            }
        }
        return plan;
    }

    private getPlanScore(plan: Array<[SchedRoom, SchedSection, TimeSlot]>, sections: SchedSection[]): number {
        let planSum: number = 0;
        let planMaxDist: number = 0;
        for (let p of plan) {
            let section: SchedSection = p[1];
            planSum = planSum + section.courses_audit + section.courses_pass + section.courses_fail;
            let room: SchedRoom = p[0];
            let maxDist: number = 0; // max distance of this room to any other rooms in the plan
            for (let pp of plan) {
                let room2: SchedRoom = pp[0];
                let lat1: number = room.rooms_lat;
                let lon1: number = room.rooms_lon;
                let lat2: number = room2.rooms_lat;
                let lon2: number = room2.rooms_lon;
                let dist: number = this.getDistance(lat1, lon1, lat2, lon2);
                if (dist > maxDist) {
                    maxDist = dist;
                }
            }
            if (maxDist > planMaxDist) {
                planMaxDist = maxDist; // max distance from all max distances between rooms
            }
        }
        let sum: number = 0;
        for (let section of sections) {
            sum = sum + section.courses_audit + section.courses_pass + section.courses_fail;
        }
        return 0.7 * (planSum / sum) + 0.3 * (1 - (planMaxDist / 1397));
    }

    private sortBySize(sections: SchedSection[]): SchedSection[] {
        let sorted: SchedSection[] = sections.sort((s1, s2) => {
            let size1: number = s1.courses_fail + s1.courses_pass + s1.courses_audit;
            let size2: number = s2.courses_fail + s2.courses_pass + s2.courses_audit;
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

    // Greedy algorithm to get the next best section-room pair
    private getNextBestPair(section: SchedSection, rooms: SchedRoom[],
                            plan: Array<[SchedRoom, SchedSection, TimeSlot]>): [SchedRoom, TimeSlot] {
        // get all rooms that fit
        let hasFit: boolean = false;
        let maxDistArray: number[] = [];
        let slotArray: TimeSlot[] = [];
        for (let i in rooms) {
            let lat: number = rooms[i].rooms_lat;
            let lon: number = rooms[i].rooms_lon;
            let hasTime: boolean = false;
            let slot: TimeSlot;
            // first get available time-slot for this room
            for (let j in this.timeSlots) {
                if (this.checkRoomSlot(rooms[i], this.timeSlots[j], section, plan)) {
                    hasTime = true;
                    hasFit = true;
                    slot = this.timeSlots[j]; // if there is available time slot, store it
                    break;
                }
            }
            if (hasTime) {  // if there is a valid time-slot for this room:
                let max: number = 0;
                for (let p of plan) {
                    let rm: SchedRoom = p[0];
                    let dist: number = this.getDistance(lat, lon, rm.rooms_lat, rm.rooms_lon);
                    if (dist > max) {
                        max = dist;
                    }
                }
                maxDistArray.push(max); // TODO: first section choose which building?
                slotArray.push(slot);
            } else {
                maxDistArray.push(10000000);
                slotArray.push(null);
            }
        }
        if (!hasFit) {
            return [null, null];
        } else {
            let idx = maxDistArray.indexOf(Math.min(...maxDistArray)); // get room with the least maxDistance
            if (plan.length === 0) {
                idx = Math.floor(Math.random() * (rooms.length)) ;
            }
            return [rooms[idx], slotArray[idx]];
        }
    }

    private getAllFitRooms(section: SchedSection, rooms: SchedRoom[]): SchedRoom[] {
        let size: number = section.courses_audit + section.courses_pass + section.courses_fail;
        let res: SchedRoom[] = [];
        for (let room of rooms) {
            if (room.rooms_seats >= size) {
                res.push(room);
            }
        }
        return res;
    }

    // checks whether a room-slot pair is available and valid
    private checkRoomSlot(room: SchedRoom, slot: TimeSlot, section: SchedSection,
                          plan: Array<[SchedRoom, SchedSection, TimeSlot]>): boolean {
        for (let pair of this.usedRooms) {
           if (pair[0] === room && pair[1] === slot) {
               return false; // no two sections at same room same time slot
           }
        }

        let course = section.courses_dept + section.courses_id;
        for (let p of plan) {
            let thisCourse = p[1].courses_dept + p[1].courses_id;
            if (thisCourse === course && p[2] === slot) {
                return false; // if same courses are allocated at same time-slot
            }
        }
        return true;
    }

    private getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        let r = 6371e3; // metres
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

    private toRadians(degree: number): number {
        return degree * (Math.PI / 180);
    }
}
