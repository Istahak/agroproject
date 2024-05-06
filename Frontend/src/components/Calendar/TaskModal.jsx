import React, { useState } from 'react';

const TaskModal = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct task object
    const newTask = {
      name: taskName,
      description: taskDescription,
      // Add other task properties like start date, end date, priority, etc.
    };
    // Call addTask function from parent component
    addTask(newTask);
    // Reset form fields
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <div className="task-modal">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskModal;
