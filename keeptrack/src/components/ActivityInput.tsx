import React from 'react'

const ActivityInput = () => {
  return (
    <form className = "Input">
      <input type = "input" placeholder='Enter a task' className = "input_activity_field"></input>
      <input type = "input" placeholder='Enter a date' className = "input_date_field"></input>
      <button className="submit" type="button">
        Submit
      </button>
    </form>
  )
}

export default ActivityInput


