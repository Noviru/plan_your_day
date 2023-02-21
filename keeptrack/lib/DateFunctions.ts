/**
 * Checks if a value is a number
 * 
 * @param value - Value to check if it is a number
 * @returns - True or false whether the value is a number or not
 */
export function is_number(value: string): boolean {
    return value != null && value != '' && !isNaN(Number(value));
}

/**
 * Returns the date for today
 * 
 * @returns Todays date
 */
export function get_todays_date(): Date {
    return new Date();
}

/**
 * Returns the current year
 * 
 * @returns - current year
 */
export function current_year(): number {
    return get_todays_date().getFullYear();
}
/**
 * Returns the current month
 * 
 * @returns - current month
 */
export function current_month(): number {
    return get_todays_date().getMonth();
} 

/**
 * Returns the current day
 * 
 * @returns - current day
 */
export function current_day(): number {
    return get_todays_date().getDay();
}

/**
 * a searching algorithm used in a sorted array by repeatedly dividing the search interval in half
 * 
 * @param value - number to search for
 * @param arr - array with numbers
 * @returns - true or false whether the value is in the array
 */
export function binary_search(value: number, arr: Array<number>): boolean {
    let index = 0;
    let limit = arr.length - 1;
    while (index <= limit) {
        const pointer = Math.ceil((index + limit) / 2);
        const entry = arr[pointer];
        if (value > entry) {
            index = pointer + 1;
            continue;
        } else if (value < entry) {
            limit = pointer - 1;
            continue;
        }
        return true; 
    }
  return false;
};

/**
 * Checks if the year provided is in the correct range and if the year is a number
 * 
 * @param year - The year you want to check 
 * @returns - True or false whether the year is in range or not
 */
export function check_year(year: string): boolean {
    return is_number(year) && Number(year) <= 2100 && Number(year) >= current_year();
}


/**
 * Checks if the input day is included in input month
 * 
 * @param month - the month we want to check for
 * @param day - the day we want to check for
 * @returns - true or false whether the day exists in the month or not
 */
export function day_in_month(month: string, day: string): boolean {
    const months_with_30_days: Array<number> = [1, 3, 5, 7, 8, 10, 12];
    const months_with_31_days: Array<number> = [4, 6, 9, 11];
    if (is_number(month) && is_number(day) && Number(day) >= 1) {
        if (binary_search(Number(month), months_with_30_days) && Number(day) <= 30) {
            return true;
        } else if (binary_search(Number(month), months_with_31_days) && Number(day) <= 31) {
            return true;
        } else if (Number(month) === 2 && Number(day) <= 28) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * Checks if input date is february 29th in a leap year
 * 
 * @param year - year to check if its a leap year
 * @param month - month to check if its february
 * @param day - day to check if it's the 29th
 * @returns - true or false whether the input date is february 29th in a leap your or not
 */
export function leap_year_check(year: string, month:string, day: string): boolean {
    return is_number(year) && is_number(month) && is_number(day) && 
           Number(year) % 4 === 0 && Number(month) === 2 && Number(day) === 29;
}


/**
 * Checks if input date already has passed
 * 
 * @param year - year of input date
 * @param month - month of input date
 * @param day - day of input date
 * @returns - true or false whether input date has passed or not
 */
export function date_has_passed(year: string, month: string, day: string): boolean {
    const curr_year = current_year();
    const curr_month = current_month();
    const curr_day = current_day();
    if (Number(year) < curr_year) {
        return true;        
    } else if (Number(year) === curr_year && Number(month) < curr_month) {
        return true;
    } else if (Number(year) === curr_year && Number(month) === curr_month && Number(day) < curr_day) {
        return true;
    } else {
        return false;
    }

}


/**
 * Checks if input date is correctly written or not
 * 
 * @param date - date to check
 * @returns - boolean whether input date is correct or not
 */
export function check_date(date: string): boolean {
    const date_arr: Array<string> = date.split("-", 3);
    const year: string = date_arr[0];
    const month: string = date_arr[1];
    const day: string = date_arr[2];
    if (check_year(year) && (day_in_month(month, day) || leap_year_check(year, month, day)) 
        && date.length === 10 && !date_has_passed(year, month, day)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Turns a date string into a number
 * 
 * @param date - date string of format "YYYY-MM-DD"
 * @returns - a number of format YYYYMMDD
 */
export function date_to_number(date: string): number {
    const split_date: Array<string> = date.split("-", 3);
    const year: string = split_date[0];
    const month: string = split_date[1];
    const day: string = split_date[2];
    const number_string: string = year + month + day;
    return Number(number_string);
}

