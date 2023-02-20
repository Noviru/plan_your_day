import React from 'react';
import ActivityInput from './components/ActivityInput';
import { activity,date,user } from '../lib/types';
import {Routes, Route, Router, BrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import Register from './components/Register';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route  path="/register" element={<Register/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

