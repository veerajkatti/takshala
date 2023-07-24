import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link,Navigate, BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Task from './components/Task';
import Chatbox from './components/Chatbox';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Profileform from './components/Profileform';
import ForgotPassword from './components/ForgotPassword';
import Lead from './components/Lead';
import RegisterPage from './components/RegisterPage';
import EmployeeDashboard from './components/employeeDashboard';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginType, setLoginType] = useState('');

  return (
    <div> 
      <Router>
        <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<EmployeeDashboard/>} />
            <Route path="/task" element={<Task/>} />
            <Route path="/chatbox" element={<Chatbox/>} />
            <Route path="/profile" element={<Profileform/>} />
            <Route path="/sidebar" element={<Sidebar/>} />
            <Route path="/ForgotPassword" element={<ForgotPassword/>} />
            <Route path="/Lead" element={<Lead/>} />
            <Route path="/RegisterPage" element={<RegisterPage/>} />
            <Route path="/dashboard" element={<EmployeeDashboard/>} />
 
          </Routes>
        </Router>
    </div>
  );
}
export default App;