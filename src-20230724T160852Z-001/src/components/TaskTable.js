import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskTable() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/NewTask');
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Submitted Tasks</h2>
      {tasks.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Name</th>
              <th>Status</th>
              <th>Task Details</th>
              <th>Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.taskname}</td>
                <td>{task.status}</td>
                <td>{task.taskdetails}</td>
                <td>{task.assignedto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default TaskTable;