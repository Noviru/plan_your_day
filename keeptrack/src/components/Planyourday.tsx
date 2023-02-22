


import {useNavigate} from "react-router-dom"
import { check_date, date_to_number } from "../lib/DateFunctions"
import React, { useState } from 'react';
import { Activity } from './SingleActivity';
import '../App.css';
import ActivityInput from './ActivityInput';
import ActivityList from './ActivityList';

export function sort_dates(activites: Array<Activity>): Array<Activity> {
  function swap(arr: Array<Activity>, index1: number, index2: number) {
      const temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
  }
  let min: number;
  for (let i = 0; i < activites.length; i = i + 1) {
      min = i
      for (let j = i + 1; j < activites.length; j = j + 1) {
          if (date_to_number(activites[j].date) < date_to_number(activites[min].date)) {
              min = j;
          }
      }
      if (min !== i) {
        swap(activites, min, i);
      }
  }
  return activites;
}

const Planyourday: React.FC = () => {
  const [activity, setActivity] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isDateValid, setIsDateValid] = useState<boolean>(true);

  const addActivity = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page-refresh on every submit
    const isValid = check_date(date);
    setIsDateValid(isValid);
    if (activity && date && isValid) {
      document.getElementById("date-input.invalid-date")?.classList.remove("invalid-date");
      setActivities(sort_dates([...activities, {id: Date.now(), todo:activity, date: date, isCompleted: false}]));
      setActivity("");
      setDate("");



    } else {
      document.getElementById("date-input")?.classList.add("invalid-date");
      setActivities(activities);

    }
  };

  return (
      <div className="App">
        <span className = "heading">PlanYourDay </span>
      <ActivityInput activity={activity} setActivity={setActivity} date={date}
                              setDate={setDate} addActivity={addActivity} isDateValid={isDateValid} />
      <div className="activity-title">
        <h2>Activities</h2>
        <div className="activity-title-underline"></div>
      </div>
      <ActivityList activities={activities} setActivities={setActivities}/>
      </div>
  );
}

export default Planyourday;