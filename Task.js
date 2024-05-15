import React from 'react';

const Task = ({ task, index, toggleTaskCompletion }) => {
  return (
    <li
      className={`task-item ${task.completed ? 'completed' : ''}`}
      onClick={() => toggleTaskCompletion(index)}
    >
      {task.text}
    </li>
  );
};

export default Task;
