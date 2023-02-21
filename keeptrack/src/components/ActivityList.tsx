import React from 'react'
import { Activity } from './SingleActivity'
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
          date={activity.date}
          key={activity.id} 
          activities={activities}
          setActivities={setActivities}
        />

      ))}
    </div>
  )
}

export default ActivityList
