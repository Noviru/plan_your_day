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
 * Checks if the year provided is in the correct range and if the year is a number
 * 
 * @param year - The year you want to check 
 * @returns - True or false whether the year is in range or not and is a number or not 
 */
export function check_year(year: string): boolean {
    return is_number(year) && Number(year) < 2100 && Number(year) > get_todays_year();
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
export function get_todays_year(): Number {
    return get_todays_date().getFullYear();
}





