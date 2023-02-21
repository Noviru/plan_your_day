import React from 'react'

interface Properties{
  activity: string,
  setActivity: React.Dispatch<React.SetStateAction<string>>
  addActivity: (e: React.FormEvent) => void;
}

const ActivityInput = ({activity, setActivity, addActivity}: Properties) => {
  return (
    <form className = "Input" onSubmit={addActivity}>
      <input type = "input" 
      value={activity}
      onChange={(e) => setActivity(e.target.value)}
      placeholder='Enter a task' className = "input_activity_field"></input>
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  )
}

export default ActivityInput


