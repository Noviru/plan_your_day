"use strict";
exports.__esModule = true;
exports.check_time = exports.time_to_number = exports.check_minutes = exports.check_hours = void 0;
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
