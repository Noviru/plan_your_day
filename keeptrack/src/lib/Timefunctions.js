"use strict";
exports.__esModule = true;
exports.check_time = exports.time_has_passed = exports.time_to_number = exports.check_minutes = exports.check_hours = void 0;
var DateFunctions_1 = require("./DateFunctions");
function check_hours(hours) {
    return (0, DateFunctions_1.is_number)(hours) && Number(hours) >= 0 && Number(hours) <= 23;
}
exports.check_hours = check_hours;
function check_minutes(minutes) {
    return (0, DateFunctions_1.is_number)(minutes) && Number(minutes) >= 0 && Number(minutes) <= 59;
}
exports.check_minutes = check_minutes;
function time_to_number(time) {
    var split_time = time.split(":", 2);
    var hours = split_time[0];
    var minutes = split_time[1];
    var time_string = hours + minutes;
    return Number(time_string);
}
exports.time_to_number = time_to_number;
function get_current_hours() {
    return (0, DateFunctions_1.get_todays_date)().getHours();
}
function get_current_minutes() {
    return (0, DateFunctions_1.get_todays_date)().getMinutes();
}
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
function time_has_passed(time) {
    var hour_minute_arr = time.split(":", 2);
    var hours = hour_minute_arr[0];
    var minutes = hour_minute_arr[1];
    var time_string = hours + minutes;
    var time_number = Number(time_string);
    return time_number < get_current_time_number();
}
exports.time_has_passed = time_has_passed;
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
