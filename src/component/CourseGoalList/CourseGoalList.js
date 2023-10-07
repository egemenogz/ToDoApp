import React from "react";

import "./CourseGoalList.css";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem.js";

export default function CourseGoalList(props) {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
}
