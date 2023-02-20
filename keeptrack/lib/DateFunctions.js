"use strict";
exports.__esModule = true;
exports.get_todays_year = exports.check_year = exports.is_number = void 0;
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
 * Checks if the year provided is in the correct range and if the year is a number
 *
 * @param year - The year you want to check
 * @returns - True or false whether the year is in range or not and is a number or not
 */
function check_year(year) {
    return is_number(year) && Number(year) < 2100 && Number(year) > get_todays_year();
}
exports.check_year = check_year;
/**
 * Returns the current year
 *
 * @returns - current year
 */
function get_todays_year() {
    var todays_date = new Date();
    return todays_date.getFullYear();
}
exports.get_todays_year = get_todays_year;
