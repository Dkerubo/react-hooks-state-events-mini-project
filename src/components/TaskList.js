// src/components/TaskList.js
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} onDelete={onDeleteTask} />
      ))}
    </ul>
  );
}

export default TaskList;
