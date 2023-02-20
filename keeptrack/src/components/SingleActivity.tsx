import React, { useState } from 'react'
import { Activity } from '../activities'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

type Properties = {
    activity: Activity,
    activities: Activity[],
    setActivities: React.Dispatch<React.SetStateAction<Activity[]>>
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
   
  return <form className='activities_single'>
    {activity.isCompleted ?(
        <s className="singleactivity_text">{activity.todo}</s>
    ):(
        <span className="singleactivity_text">{activity.todo}</span>
    )}
        <div className='icons'>
            <span className="icon" onClick={()=> deleteActivity(activity.id)}>
                <AiFillDelete/>
            </span>
            <span className="icon" onClick={()=> markAsCompleted(activity.id)}>
                <MdDone/>
            </span>
        </div>
    </form>
}

export default SingleActivity
