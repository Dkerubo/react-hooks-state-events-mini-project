// src/components/Task.js
import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <li>
      <div>
        <span>{text}</span>
        <span>{category}</span>
        <button onClick={() => onDelete(text)}>Delete</button>
      </div>
    </li>
  );
}

export default Task;
