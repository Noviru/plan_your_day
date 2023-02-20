import React, { useState } from 'react';
import { Activity } from '../activities';
import './App.css';
import ActivityInput from '../components/ActivityInput';
import ActivityList from '../components/ActivityList';

const App: React.FC = () => {
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

export default App;
