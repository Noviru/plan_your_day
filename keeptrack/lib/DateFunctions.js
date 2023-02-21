"use strict";
exports.__esModule = true;
exports.date_to_number = exports.check_date = exports.date_has_passed = exports.leap_year_check = exports.day_in_month = exports.check_year = exports.binary_search = exports.current_day = exports.current_month = exports.current_year = exports.get_todays_date = exports.is_number = void 0;
/**
 * Checks if a value is a number
 *
 * @param value - Value to check if it is a number
 * @returns - True or false whether the value is a number or not
 */
function is_number(value) {
    return value != null && value != '' && !isNaN(Number(value));
}
exports.is_number = is_number;
/**
 * Returns the date for today
 *
 * @returns Todays date
 */
function get_todays_date() {
    return new Date();
}
exports.get_todays_date = get_todays_date;
/**
 * Returns the current year
 *
 * @returns - current year
 */
function current_year() {
    return get_todays_date().getFullYear();
}
exports.current_year = current_year;
/**
 * Returns the current month
 *
 * @returns - current month
 */
function current_month() {
    return get_todays_date().getMonth();
}
exports.current_month = current_month;
/**
 * Returns the current day
 *
 * @returns - current day
 */
function current_day() {
    return get_todays_date().getDay();
}
exports.current_day = current_day;
/**
 * a searching algorithm used in a sorted array by repeatedly dividing the search interval in half
 *
 * @param value - number to search for
 * @param arr - array with numbers
 * @returns - true or false whether the value is in the array
 */
function binary_search(value, arr) {
    var index = 0;
    var limit = arr.length - 1;
    while (index <= limit) {
        var pointer = Math.ceil((index + limit) / 2);
        var entry = arr[pointer];
        if (value > entry) {
            index = pointer + 1;
            continue;
        }
        else if (value < entry) {
            limit = pointer - 1;
            continue;
        }
        return true;
    }
    return false;
}
exports.binary_search = binary_search;
;
/**
 * Checks if the year provided is in the correct range and if the year is a number
 *
 * @param year - The year you want to check
 * @returns - True or false whether the year is in range or not
 */
function check_year(year) {
    return is_number(year) && Number(year) <= 2100 && Number(year) >= current_year();
}
exports.check_year = check_year;
/**
 * Checks if the input day is included in input month
 *
 * @param month - the month we want to check for
 * @param day - the day we want to check for
 * @returns - true or false whether the day exists in the month or not
 */
function day_in_month(month, day) {
    var months_with_30_days = [1, 3, 5, 7, 8, 10, 12];
    var months_with_31_days = [4, 6, 9, 11];
    if (is_number(month) && is_number(day) && Number(day) >= 1) {
        if (binary_search(Number(month), months_with_30_days) && Number(day) <= 30) {
            return true;
        }
        else if (binary_search(Number(month), months_with_31_days) && Number(day) <= 31) {
            return true;
        }
        else if (Number(month) === 2 && Number(day) <= 28) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
exports.day_in_month = day_in_month;
/**
 * Checks if input date is february 29th in a leap year
 *
 * @param year - year to check if its a leap year
 * @param month - month to check if its february
 * @param day - day to check if it's the 29th
 * @returns - true or false whether the input date is february 29th in a leap your or not
 */
function leap_year_check(year, month, day) {
    return is_number(year) && is_number(month) && is_number(day) &&
        Number(year) % 4 === 0 && Number(month) === 2 && Number(day) === 29;
}
exports.leap_year_check = leap_year_check;
/**
 * Checks if input date already has passed
 *
 * @param year - year of input date
 * @param month - month of input date
 * @param day - day of input date
 * @returns - true or false whether input date has passed or not
 */
function date_has_passed(year, month, day) {
    var curr_year = current_year();
    var curr_month = current_month();
    var curr_day = current_day();
    if (Number(year) < curr_year) {
        return true;
    }
    else if (Number(year) === curr_year && Number(month) < curr_month) {
        return true;
    }
    else if (Number(year) === curr_year && Number(month) === curr_month && Number(day) < curr_day) {
        return true;
    }
    else {
        return false;
    }
}
exports.date_has_passed = date_has_passed;
/**
 * Checks if input date is correctly written or not
 *
 * @param date - date to check
 * @returns - boolean whether input date is correct or not
 */
function check_date(date) {
    var date_arr = date.split("-", 3);
    var year = date_arr[0];
    var month = date_arr[1];
    var day = date_arr[2];
    if (check_year(year) && (day_in_month(month, day) || leap_year_check(year, month, day))
        && date.length === 10 && !date_has_passed(year, month, day)) {
        return true;
    }
    else {
        return false;
    }
}
exports.check_date = check_date;
/**
 * Turns a date string into a number
 *
 * @param date
 * @returns
 */
function date_to_number(date) {
    var split_date = date.split("-", 3);
    var year = split_date[0];
    var month = split_date[1];
    var day = split_date[2];
    var number_string = year + month + day;
    return Number(number_string);
}
exports.date_to_number = date_to_number;
