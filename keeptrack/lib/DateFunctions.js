"use strict";
exports.__esModule = true;
exports.check_date = exports.date_has_passed = exports.leap_year_check = exports.day_in_month = exports.check_year = exports.binary_search = exports.current_day = exports.current_month = exports.current_year = exports.get_todays_date = exports.is_number = void 0;
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
function current_month() {
    return get_todays_date().getMonth();
}
exports.current_month = current_month;
function current_day() {
    return get_todays_date().getDay();
}
exports.current_day = current_day;
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
 * @returns - True or false whether the year is in range or not and is a number or not
 */
function check_year(year) {
    return is_number(year) && Number(year) <= 2100 && Number(year) >= current_year();
}
exports.check_year = check_year;
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
function leap_year_check(year, month, day) {
    return is_number(year) && is_number(month) && is_number(day) &&
        Number(year) % 4 === 0 && Number(month) === 2 && Number(day) === 29;
}
exports.leap_year_check = leap_year_check;
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
