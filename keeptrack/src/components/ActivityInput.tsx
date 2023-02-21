import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

interface Properties{
  activity: string,
  setActivity: React.Dispatch<React.SetStateAction<string>>
  addActivity: (e: React.FormEvent) => void;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>
}

const ActivityInput = ({activity, setActivity, date, setDate, addActivity}: Properties) => {
  return (
    <form className="Input" onSubmit={addActivity}>
      <input type = "input" 
      value={activity}
      onChange={(e) => setActivity(e.target.value)}
        placeholder='Enter a task' className="input_activity_field"></input>
      
      <input type = "input" 
      value={date}
      onChange={(e) => setDate(e.target.value)}
        placeholder='Enter a deadline' className="input_activity_field"></input>
      
      <button className="submit" type="submit">
        <FaArrowRight />
      </button>
    </form>
  )
}
export default ActivityInput


