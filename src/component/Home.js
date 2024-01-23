// Home.js

import React, { useState } from 'react';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h2>My Daily Task List</h2>
      <div>
        <label>
          New Task:
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} className="custom-input" />
        </label>
        <button onClick={addTask} className="addTask">Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => removeTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
