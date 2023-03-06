import {Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from './components/Register';
import Planyourday from './components/Planyourday';

/**
 * Runs the main application
 *
 * @returns - a web application that allows a user to log in/sign up and 
 * access an individual to-do list.
 */
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route  path="/register" element={<Register/>}/>
        <Route  path="/planyourday" element={<Planyourday/>}/>

        
      </Routes>
    </div>
  );
}

export default App;

