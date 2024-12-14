import React, { useEffect, useState } from 'react';
import './App.css';

const API_URL = 'http://192.168.1.106:3001';

function App() {

  const[tasks, setTasks] = useState([]);
  const[newTask, setNewTask] = useState({});
  const[error, setError] = useState('');

  useEffect(() => {
    const fatchApi = async() => {
      const response = await fetch(`${API_URL}/tasks`);
  
      const tasksApi = await response.json();
  
      setTasks(tasksApi);
    };
    
   fatchApi();

  }, []);
  

  return (
    <div className="App">
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.task}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
