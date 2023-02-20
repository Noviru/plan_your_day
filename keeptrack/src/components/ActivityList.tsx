import React from 'react'
import { Activity } from '../activities'
import SingleActivity from './SingleActivity'
import './styles.css'

interface Properties{
    activities: Activity[],
    setActivities: React.Dispatch<React.SetStateAction<Activity[]>>
}


const ActivityList: React.FC<Properties>= ({activities, setActivities}: Properties) => {
  return (
    <div className='todos'>
      {activities.map((activity) => (
        <SingleActivity 
            activity={activity} 
            key={activity.id} 
            activities={activities}
            setActivities={setActivities}
        />

      ))}
    </div>
  )
}

export default ActivityList