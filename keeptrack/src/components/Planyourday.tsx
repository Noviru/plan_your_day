import {useNavigate} from "react-router-dom"
import { check_date, date_to_number, time_or_date_has_passed } from "../lib/DateFunctions"
import { check_time, time_to_number } from "../lib/Timefunctions";
import React, { useState } from 'react';
import { Activity } from './SingleActivity';
import '../App.css';
import ActivityInput from './ActivityInput';
import ActivityList from './ActivityList';
import { useLocation } from 'react-router-dom';
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/database'
import image from "./resources/pyd.png"
import { BiUser } from 'react-icons/bi'
import { User } from "../firebase-setup/firebase";

/**
 * Swaps two elements in an array
 * 
 * @param arr - array of elements
 * @param index1 - index of first element to be swapped
 * @param index2 - index of second element to be swapped
 * 
 * @returns - array with two elements swapped
 */
function swap(arr: Array<Activity>, index1: number, index2: number) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

/**
 * Sorts array of activities by dates by using selction sort 
 * 
 * @param activites - array of activities with dates
 * @returns - array of activities sorted by dates
 */
function sort_dates(activites: Array<Activity>): Array<Activity> {
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

/**
 * Sorts array of activities by time by using selction sort 
 * 
 * @param activites - array of activities with dates
 * @returns - array of activities sorted by time
 */
function sort_time(activites: Array<Activity>): Array<Activity> {
  let min: number;
  for (let i = 0; i < activites.length; i = i + 1) {
      min = i
      for (let j = i + 1; j < activites.length; j = j + 1) {
          if (time_to_number(activites[j].time) < time_to_number(activites[min].time)) {
              min = j;
          }
      }
      if (min !== i) {
        swap(activites, min, i);
      }
  }
  return activites;
}

/**
 * Sorts array of activities alpabeticly by using selction sort 
 * 
 * @param activites - array of activities with dates
 * @returns - array of activities sorted alphabeticly
 */
function sort_alphabeticly(activites: Array<Activity>): Array<Activity> {
  let min: number;
  for (let i = 0; i < activites.length; i = i + 1) {
      min = i
      for (let j = i + 1; j < activites.length; j = j + 1) {
          if (activites[j].todo < activites[min].todo) {
              min = j;
          }
      }
      if (min !== i) {
        swap(activites, min, i);
      }
  }
  return activites;
}

/**
 * Runs the todo-list page
 * 
 * @returns - a todo list where you can add/remove activities with a certain 
 * deadline of a date and a time
 */
const Planyourday: React.FC = () => {
  const location = useLocation();
  const userData : User = location.state.userData;
  const [activity, setActivity] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [Time, setTime] = useState<string>("");
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isDateValid, setIsDateValid] = useState<boolean>(true);
  const [isTimeValid, setIsTimeValid] = useState<boolean>(true);
  const [inputLength, setInputLength] = useState<number>(activity.length);
  const navigate = useNavigate();

  // Adds an activity to the database and to the variable activites which is an array.
  // The activity is then displayed when we send the variable to the ActivityList component.
  const addActivity = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page-refresh on every submit
    const ValidDate = check_date(date); 
    setIsDateValid(ValidDate);
    const ValidTime = check_time(Time);
    setIsTimeValid(ValidTime);
    const has_not_passed = !time_or_date_has_passed(date, Time);
    if (activity && date && ValidDate  && has_not_passed && ValidTime) {
      if(firebase.auth().currentUser !== null){ 
        const userRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser!.uid);
        userRef.get().then((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            const updatedActivities = sort_dates(sort_time(sort_alphabeticly(
              [...userData?.activities, {id: Date.now(), todo: activity, date: date, time: Time, isCompleted: false}])));
            userRef.update({
              activities: updatedActivities
            });
          }
        });
      }
      setActivities(sort_dates(sort_time(sort_alphabeticly(
        [...activities, {id: Date.now(), todo:activity, date: date, time: Time, isCompleted: false}]))));
      setActivity("");
      setDate("");
      setInputLength(0);
       setTime("");
    } else {
      document.getElementById("date-input")?.classList.add("invalid-date");
      setActivities(activities);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <div className="userinfo"></div>
        <img src={image} className="header_image" />
        <div className="userinfo">
           <BiUser className="userinfo_icon"/>
          <h2 className="userinfo_name">{userData.username}</h2>
          <button className="logout_button" onClick={() => navigate("/")}>Logout</button>
        </div>
      </div>
      <ActivityInput activity={activity} setActivity={setActivity} date={date}
        setDate={setDate} addActivity={addActivity} isDateValid={isDateValid}
        inputLength={inputLength} setInputLength={setInputLength} Time={Time}
        setTime={setTime} isTimeValid={isTimeValid } />
      <div className="activity-title">
        <h2>Activities</h2>
        <div className="activity-title-underline"></div>
      </div>
      <ActivityList activities={activities} setActivities={setActivities}/>
      </div>
  ) ;

  }
export default Planyourday;