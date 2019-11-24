export interface SchedSection {
    courses_dept: string;
    courses_id: string;
    courses_uuid: string;
    courses_pass: number;
    courses_fail: number;
    courses_audit: number;
    courses_avg?: number;
    courses_instructor?: string;
    courses_title?: string;
    courses_year?: number;
}

export interface SchedRoom {
    rooms_shortname: string;
    rooms_number: string;
    rooms_seats: number;
    rooms_lat: number;
    rooms_lon: number;
    rooms_name?: string;
    rooms_fullname?: string;
    rooms_address?: string;
    rooms_type?: string;
    rooms_furniture?: string;
    rooms_href?: string;
}

export type TimeSlot =
    "MWF 0800-0900" | "MWF 0900-1000" | "MWF 1000-1100" |
    "MWF 1100-1200" | "MWF 1200-1300" | "MWF 1300-1400" |
    "MWF 1400-1500" | "MWF 1500-1600" | "MWF 1600-1700" |
    "TR  0800-0930" | "TR  0930-1100" | "TR  1100-1230" |
    "TR  1230-1400" | "TR  1400-1530" | "TR  1530-1700";


export interface IScheduler {
    /**
     * Schedule course sections into rooms
     *
     * @param sections
     * An array of course sections to be scheduled
     *
     * @param rooms
     * An array of rooms for sections to be scheduled into
     *
     * @return Array<[SchedRoom, SchedSection, TimeSlot]>
     * return a timetable, which is an array of [room, section, time slot] assignment tuples
     */
    schedule(sections: SchedSection[], rooms: SchedRoom[]): Array<[SchedRoom, SchedSection, TimeSlot]>;
}
