import React, { useState, useEffect } from 'react';
import TaskImage from '../components/images/TaskImage.jpg';
import axios from 'axios';
import './TaskForm.css';
import Task from './Task';

function Lead() {
  const [taskData, setTaskData] = useState({
    id: '',
    taskname: '',
    status: '',
    taskdetails: '',
    assignedto: ''
  });

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/NewTask', taskData);

      setTaskData({
        id: '',
        taskname: '',
        status: '',
        taskdetails: '',
        assignedto: ''
      });

      alert('Task has been submitted');

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleStatusChange = (taskId, newStatus) => {
    const confirmChange = window.confirm('Do you want to change the status?');
    if (confirmChange) {
      axios
        .put(`http://localhost:3001/NewTask/${taskId}`, { status: newStatus })
        .then((response) => {
          alert('Status has been successfully changed');
          fetchTasks();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleDelete = async (taskId, taskStatus) => {
    console.log('Delete Task:', taskId, taskStatus); // Add this line to log the task ID and status
    const confirmDelete = window.confirm('Do you want to delete this task?');
    if (confirmDelete) {
      if (taskStatus === 'Completed') {
        try {
          await axios.delete(`http://localhost:3001/NewTask/${taskId}`);
          alert('Task has been successfully deleted');
          fetchTasks();
        } catch (error) {
          console.error(error);
        }
      } else {
        alert('Only completed tasks can be deleted.');
      }
    }
  };
  
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/NewTask');
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='LeadPage'>
      <div className="leadTask">
        <div className='leadLeft'>
        <img className="taskImage"
            src={TaskImage}
            alt="My Image" 
            backgroundSize="cover"
            />
        </div>
        <div className='leadRight'>
          <div className="centeredContainer">
            <h2 className="mb-4">Task Management</h2>

            <div className="formTaskLead">
            <form className="task-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="id">ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                    value={taskData.id}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="taskname">Task Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskname"
                    name="taskname"
                    value={taskData.taskname}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="status">Status:</label>
                  <select
                    className="form-control"
                    id="status"
                    name="status"
                    value={taskData.status}
                    onChange={handleInputChange}
                  >
                    <option value="">Select status</option>
                    <option value="New">New</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="taskdetails">Task Details:</label>
                  <textarea
                    className="form-control"
                    id="taskdetails"
                    name="taskdetails"
                    value={taskData.taskdetails}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="assignedto">Assigned To:</label>
                  <select
                    className="form-control"
                    id="assignedto"
                    name="assignedto"
                    value={taskData.assignedto}
                    onChange={handleInputChange}
                  >
                    <option value="">Select assignee</option>
                    <option value="Venktesh">Venktesh</option>
                    <option value="Narendra">Narendra</option>
                    <option value="Arun">Arun</option>
                    <option value="Shaikh">Shaikh</option>
                    <option value="Charan">Charan</option>
                    <option value="Pavan">Pavan</option>
                    <option value="Ravi">Ravi</option>
                  </select>
                </div>

                <button type="submit" className="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

          <hr />&nbsp;

          <h2 className="mb-4">Submitted Tasks</h2>&nbsp;
          {tasks.length > 0 ? (
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Task Name</th>
                  <th>Status</th>
                  <th>Task Details</th>
                  <th>Assigned To</th>
                  <th>Action</th> {/* New column for delete button */}
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.taskname}</td>
                    <td>
                      <select
                        className="form-select"
                        value={task.status}
                        onChange={(e) =>
                          handleStatusChange(task.id, e.target.value)
                        }
                      >
                        <option value="New">New</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Completed">Completed</option>
                      </select>
                    </td>
                    <td>{task.taskdetails}</td>
                    <td>{task.assignedto}</td>
                    <td>
                      <button
                        type="button"
                        className="btn-deletetask"
                        onClick={() => handleDelete(task.id,task.status)} // Call handleDelete with task id
                      >
                        Delete
                      </button>
                    </td>
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

export default Lead;