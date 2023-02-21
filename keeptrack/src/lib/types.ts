import { head, tail, pair, Pair, List, append, is_null } from './list';

export type date = {day: string, month: string, year: number | string, time?: string | number};
export type activity = {activity: string, date: date, duration?: number};
export type user = {username: string, password: string, activites: List<activity>};

 


