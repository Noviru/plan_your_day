"use strict";
exports.__esModule = true;
exports.check_time = exports.time_has_passed = exports.get_current_time_string = exports.get_current_minutes = exports.get_current_hours = exports.time_to_number = exports.check_minutes = exports.check_hours = void 0;
var DateFunctions_1 = require("./DateFunctions");
/**
 * Checks if input hours is correcly written
 *
 * @param hours number of hours that you want to check
 * @returns true or false whether the input hours is correctly inputted
 */
function check_hours(hours) {
    return (0, DateFunctions_1.is_number)(hours) && Number(hours) >= 0 && Number(hours) <= 23;
}
exports.check_hours = check_hours;
/**
 * Checks if input minutes is correctly written
 *
 * @param minutes number of minutes that you want to check
 * @returns true or false whether the input minutes is correctly inputted
 */
function check_minutes(minutes) {
    return (0, DateFunctions_1.is_number)(minutes) && Number(minutes) >= 0 && Number(minutes) <= 59;
}
exports.check_minutes = check_minutes;
/**
 * Turns a time string into a number in the format HH:MM
 *
 * @param time the time you want to turn into a number
 * @returns number of the time in the format HHMM
 */
function time_to_number(time) {
    var split_time = time.split(":", 2);
    var hours = split_time[0];
    var minutes = split_time[1];
    var time_string = hours + minutes;
    return Number(time_string);
}
exports.time_to_number = time_to_number;
/**
 * Gives you the current hours of current time
 *
 * @returns a number of the current hours
 */
function get_current_hours() {
    return (0, DateFunctions_1.get_todays_date)().getHours();
}
exports.get_current_hours = get_current_hours;
/**
 * Gives you the current minutes of current time
 *
 * @returns a number of the current minutes
 */
function get_current_minutes() {
    return (0, DateFunctions_1.get_todays_date)().getMinutes();
}
exports.get_current_minutes = get_current_minutes;
/**
 * Gives you the current time as a string of format HH:MM
 *
 * @returns string of the current time
 */
function get_current_time_string() {
    var current_hours = get_current_hours();
    var current_minutes = get_current_minutes();
    var current_hours_string = current_hours.toString();
    var current_minutes_string = current_minutes.toString();
    if (current_hours < 10) {
        current_hours_string = "0" + current_hours_string;
    }
    if (current_minutes < 10) {
        current_minutes_string = "0" + current_minutes_string;
    }
    var current_time_string = current_hours + current_minutes_string;
    return current_time_string;
}
exports.get_current_time_string = get_current_time_string;
/**
 * Gives you the current time as a number of format HHMM
 *
 * @returns number of the current time
 */
function get_current_time_number() {
    var current_hours = get_current_hours().toString();
    var current_minutes = get_current_minutes();
    var current_minutes_string = current_minutes.toString();
    if (current_minutes < 10) {
        current_minutes_string = "0" + current_minutes_string;
    }
    var current_time_string = current_hours + current_minutes_string;
    return Number(current_time_string);
}
/**
 * Checks if input time has passed or not
 *
 * @param time time to check if it has passed
 * @returns true or false whether the time has passed or not
 */
function time_has_passed(time) {
    var time_number = time_to_number(time);
    return time_number < get_current_time_number();
}
exports.time_has_passed = time_has_passed;
/**
 * Checks if the input time is correctly formated and checks if input time actually exists
 *
 * @param time input to check if its correctly inputted
 * @returns true or false whether the time is correctly written or not
 */
function check_time(time) {
    var hour_minute_arr = time.split(":", 2);
    var hours = hour_minute_arr[0];
    var minutes = hour_minute_arr[1];
    if (check_hours(hours) && check_minutes(minutes) && time.length === 5) {
        return true;
    }
    else {
        return false;
    }
}
exports.check_time = check_time;
