import React from 'react';
import './App.css';
import ActivityInput from './components/ActivityInput';






const App: React.FC = () => {
  return (
      <div className="App">
        <span className = "heading">Plan your day </span>
        <ActivityInput/>
      </div>
  );
}

export default App;
