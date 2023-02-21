export function is_number(value: number | string): boolean {
    return value != null && value != '' && !isNaN(Number(value.toString()));
}