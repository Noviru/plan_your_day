import { NumericLiteral } from "typescript";
import { is_number } from "./DateFunctions";

export function check_hours(hours: string): boolean {
    return is_number(hours) && Number(hours) >= 0 && Number(hours) <= 23;
}

export function check_minutes(minutes: string): boolean {
    return is_number(minutes) && Number(minutes) >= 0 && Number(minutes) <= 59;
}

export function time_to_number(time: string): number {
    const split_time: Array<string> = time.split(":", 2);
    const hours: string = split_time[0];
    const minutes: string = split_time[1];
    const time_string: string = hours + minutes;
    return Number(time_string);
}

export function check_time(time: string): boolean {
    const hour_minute_arr: Array<string> = time.split(":", 2);
    const hours: string = hour_minute_arr[0];
    const minutes: string = hour_minute_arr[1];
    if (check_hours(hours) && check_minutes(minutes) && time.length === 5) {
        return true;
    } else {
        return false;
    }
}