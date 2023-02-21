import {useNavigate} from "react-router-dom"

import React, { useState } from 'react';
import { Activity } from './SingleActivity';
import '../App.css';
import ActivityInput from './ActivityInput';
import ActivityList from './ActivityList';

const Planyourday: React.FC = () => {
  const [activity, setActivity] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page-refresh on every submit
    if(activity && date){
      setActivities([...activities, {id: Date.now(), todo:activity, date: date, isCompleted: false}]);
      setActivity("");
      setDate("");
    }
  };

  console.log(date)

  return (
      <div className="App">
        <span className = "heading">Plan your day </span>
      <ActivityInput activity={activity} setActivity={setActivity} date={date} setDate={setDate} addActivity={addActivity} />
      <div className="activity-title">
        <h2>Activities</h2>
        <div className="activity-title-underline"></div>
      </div>
      <ActivityList activities={activities} setActivities={setActivities}/>
      </div>
  );
}

export default Planyourday;