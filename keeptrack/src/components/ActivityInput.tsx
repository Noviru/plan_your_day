
import { FaArrowRight } from 'react-icons/fa';
import React, { useState, SetStateAction, Dispatch } from 'react';

interface Properties{
  activity: string,
  setActivity: React.Dispatch<React.SetStateAction<string>>
  addActivity: (e: React.FormEvent) => void;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>
  isDateValid: boolean
  Time: string;
  setTime: Dispatch<SetStateAction<string>>;
}

const ActivityInput = ({activity, setActivity, date, setDate, addActivity, isDateValid}: Properties) => {
  return (
    <form className="Input" onSubmit={addActivity}>
      <input type = "input" 
      value={activity}
      onChange={(e) => setActivity(e.target.value)}
        placeholder='Enter a task' className="input_activity_field"></input>
      <input
        id="date-input"
        type="input" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder='YYYY-MM-DD'
        className={`input_activity_field ${isDateValid ? 'valid' : 'invalid'}`}
      ></input>
      
      
      <button className="submit" type="submit">
        <FaArrowRight />
      </button>
    </form>
  )
}
export default ActivityInput


