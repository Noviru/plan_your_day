import { is_number } from "./DateFunctions";

export function check_hours(hours: string): boolean {
    return is_number(hours) && Number(hours) >= 0 && Number(hours) <= 23;
}

export function check_minutes(minutes: string): boolean {
    return is_number(minutes) && Number(minutes) >= 0 && Number(minutes) <= 59;
}

export function check_time(time: string): boolean {
    const hour_minute_arr: Array<string> = time.split(":", 2);
    const hours: string = 
}