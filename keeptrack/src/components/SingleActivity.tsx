import React, { useState } from 'react'
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { activity } from '../lib/types'

type Properties = {
    activity: Activity,
    date: string,
    activities: Activity[],
    setActivities: React.Dispatch<React.SetStateAction<Activity[]>>
}

export interface Activity{
    id: number,
    todo: string,
    date: string, 
    isCompleted: boolean
}

const SingleActivity : React.FC<Properties>= ({activity, activities, setActivities}) => {
    const deleteActivity = (id: number) => {
        setActivities(activities.filter( activity => activity.id !== id ))
    };
    const markAsCompleted = (id: number) => {
        setActivities(activities.map(activity => activity.id === id 
                                    ? {...activity, isCompleted: !activity.isCompleted}
                                    : activity
        ))
    };
   
  return (
  <form className="activity">
    {activity.isCompleted ? (
      <div className="activity-text">
        <s className="activity-todo">{activity.todo}</s>
        <span className="activity-date">{activity.date}</span>
      </div>
    ) : (
      <div className="activity-text">
        <span className="activity-todo">{activity.todo}</span>
        <span className="activity-date">{activity.date}</span>
      </div>
    )}
    <div className="activity-icons">
      <span className="activity-icon" onClick={() => deleteActivity(activity.id)}>
        <AiFillCloseCircle />
      </span>
      <span className="activity-icon" onClick={() => markAsCompleted(activity.id)}>
        <AiFillCheckCircle />
      </span>
    </div>
  </form>
);

}

export default SingleActivity
