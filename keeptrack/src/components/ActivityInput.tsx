import { FaArrowRight } from 'react-icons/fa';
import React from 'react';
import {time_or_date_has_passed } from "../lib/DateFunctions"

// Properties for typing the parameters to the ActivityInput function
interface Properties{
  activity: string,
  setActivity: React.Dispatch<React.SetStateAction<string>>
  addActivity: (e: React.FormEvent) => void;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>
  isDateValid: boolean
  inputLength: number;
  setInputLength: React.Dispatch<React.SetStateAction<number>>
  Time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  isTimeValid: boolean
}

/**
 * Interface for creating an activity
 * 
 * @param activity - activity as a property of type Activity
 * @param setActivity - updates activity
 * @param date - date as a property of type Activity
 * @param setDate - activity as an element
 * @param addActivity - function for adding activities to an array
 * @param isDateValid - validates if the date has passed or not
 * @param inputLength - counts the input length
 * @param setInputLength - updates inputLength
 * @param Time - time as a property of type Activity
 * @param setTime - updates Time
 * @param isTimeValid - validates if the time at a certain date has passed or not
 * 
 * @returns - Input fields for creating an activity of type Activity 
 * with the correct properties
 */
function ActivityInput({ activity, setActivity, date, setDate, addActivity,
                          isDateValid, inputLength, setInputLength, Time, setTime,
  isTimeValid }: Properties) {
  const MAX_LENGTH = 50;
  const handleActivityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setInputLength(inputText.length);
    setActivity(inputText.slice(0, MAX_LENGTH));
  };
  return (
    <form className="Input" onSubmit={addActivity}>
      <input type="input"
        value={activity}
        onChange={handleActivityChange}
        placeholder='Enter a task'
        className="input_activity_field_todo">
        </input>
      <div className="character-counter">{MAX_LENGTH - inputLength < 1 ? 0 : MAX_LENGTH - inputLength}</div>
      <input
        id="date-input"
        type="input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder='YYYY-MM-DD'
        className={`input_activity_field ${isDateValid && !time_or_date_has_passed(date,Time)? 'valid' : 'invalid'}`}
      ></input>
      <input
        id="time-input"
        type="input"
        value={Time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="HH:MM"
        className={`input_activity_field ${isTimeValid && !time_or_date_has_passed(date,Time)? 'valid' : 'invalid'}`}
      />
      <button className="submit" type="submit">
        <FaArrowRight />
      </button>
    </form>
  )
}

export default ActivityInput
