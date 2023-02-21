import {useNavigate} from "react-router-dom"

import React, { useState } from 'react';
import { Activity } from './SingleActivity';
import '../App.css';
import ActivityInput from './ActivityInput';
import ActivityList from './ActivityList';

const Planyourday: React.FC = () => {
  const [activity, setActivity] = useState<string>("");
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page-refresh on every submit
    if(activity){
      setActivities([...activities, {id: Date.now(), todo:activity, isCompleted: false}]);
      setActivity("");
    }
  };

  return (
      <div className="App">
        <span className = "heading">Plan your day </span>
        <ActivityInput activity={activity} setActivity={setActivity} addActivity={addActivity}/>
        <ActivityList activities={activities} setActivities={setActivities}/>
      </div>
  );
}

export default Planyourday;