import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface Properties{
  activity: string,
  setActivity: React.Dispatch<React.SetStateAction<string>>
  addActivity: (e: React.FormEvent) => void;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>
  isDateValid: boolean
}



const MAX_LENGTH = 50;

const ActivityInput = ({activity, setActivity, date, setDate, addActivity, isDateValid}: Properties) => {
  const [inputLength, setInputLength] = useState<number>(activity.length);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setInputLength(inputText.length);
    setActivity(inputText.slice(0, MAX_LENGTH));
  };

  return (
    <form className="Input" onSubmit={addActivity}>
    <input 
      type="text" 
      value={activity}
      onChange={handleChange}
      maxLength={MAX_LENGTH}
      placeholder='Enter a task' 
      className="input_activity_field" 
      />
      <div className="character-counter">{inputLength}/{MAX_LENGTH}</div>
      <input
        id="date-input"
        type="input" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder='YYYY-MM-DD'
        className={`input_activity_field ${isDateValid ? 'valid' : 'invalid'}`}
      />
      <button className="submit" type="submit">
        <FaArrowRight />
      </button>
    </form>
  );
};

export default ActivityInput;