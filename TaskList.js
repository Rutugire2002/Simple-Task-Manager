import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleTaskCompletion }) => {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
