import React from 'react'
import { Activity } from './SingleActivity'
import SingleActivity from './SingleActivity'
import './styles.css'
import { doc, getDoc } from "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/database'
import { activity } from '../lib/types';
import { useEffect } from 'react';

interface Properties{
    activities: Activity[],
    setActivities: React.Dispatch<React.SetStateAction<Activity[]>>
}



const ActivityList: React.FC<Properties>= ({activities, setActivities}: Properties) => {

  // Fetches the activites from the database and set the activits variable to the activites in the database.
  useEffect(() => {
    const fetchActivities = async () => {
      const userRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser!.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const activities = docSnap.data()?.activities;
        setActivities(activities);
      } else {
        console.log("No such document!");
      }
    };
    fetchActivities();
  }, []);
  

  //const user_activity = getActivity()

  return (
    <div className='todos'>
      {activities.map((activity) => (
        <SingleActivity 
          activity={activity} 
          date={activity.date}
          time={activity.time}
          key={activity.id} 
          activities={activities}
          setActivities={setActivities}
        />
      ))}
    </div>
  )
}

export default ActivityList
