import React, { useState } from 'react'
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { activity } from '../lib/types'
import { string } from 'yup'
import { doc, setDoc, getDoc, updateDoc} from "firebase/firestore";


import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import 'firebase/compat/database'

type Properties = {
    activity: Activity,
    date: string,
    time: string,
    activities: Activity[],
    setActivities: React.Dispatch<React.SetStateAction<Activity[]>>
}

export interface Activity{
    id: number,
    todo: string,
    date: string, 
    time: string,
    isCompleted: boolean
}

interface MyData {
  todos: { id: string, date: string, todo: string, isCompleted: boolean }[];
}

const SingleActivity : React.FC<Properties>= ({activity, activities, setActivities}) => {
    const [data, setData] = useState<MyData | null>(null);
    const deleteActivity = async (id: number) => {
        setActivities(activities.filter( activity => activity.id !== id ))
        const newActivities = activities.filter((activity) => activity.id !== id);

        const docRef = firebase.firestore().collection("users").doc(firebase.auth().currentUser!.uid);

        await updateDoc(docRef, {
          activities: newActivities
        });

  
    };
    const markAsCompleted = (id: number) => {
        console.log("Här då?")
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
        <span className='activity-time'>{activity.time}</span>
      </div>
    ) : (
      <div className="activity-text">
        <span className="activity-todo">{activity.todo}</span>
        <span className="activity-date">{activity.date}</span>
        <span className='activity-time'>{activity.time}</span>
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
