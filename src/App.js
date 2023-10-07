import React, {useState} from 'react';
import './App.css';

import CourseGoalList from './component/CourseGoalList/CourseGoalList';
import CourseInput from './component/CourseGoalInput/CourseInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises', id: 'g1' },
    { text: 'Finish Course', id: 'g2' }
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  
  const deleteItemHandler = goalId => {
    setCourseGoals((prevGoals) => {
      const updateGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updateGoals;
    });
  };

  let content = null;

  if (courseGoals.length > 0) {
    content = <CourseGoalList items={courseGoals} />;
  } else {
    content = <p>No goals found, Maybe add one?</p>;
  };

  if (courseGoals.length > 0) {
    content = (<CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />)
  }

  return (
    <div className="App">
      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>
        {content}
        
      </section>
    </div>
  );
};

export default App;