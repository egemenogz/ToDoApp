import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../Button/Button.js';

export default function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (e) => {
    const inputValue = e.target.value.trim(); 
    if (inputValue.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setEnteredValue(e.target.value); 
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); //Prevent it from submitting a form.

    const inputValue = enteredValue.trim(); 
    if (inputValue.length === 0) {  //to Dynamic CSS
      setIsValid(false);
      return;
    }

    props.onAddGoal(inputValue);
    setEnteredValue('');
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        {/* If it's false then invalid else '' */}
        <div className={`form-control ${!isValid ? 'invalid' : ''}`}> 
          <label>My Goal</label>
          <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
        </div>

        <Button type="submit">Add Goal</Button>
      </form>
    </div>
  );
}