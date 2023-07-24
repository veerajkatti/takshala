import React, { useState } from 'react';
import axios from 'axios';
import './Loginpage.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import ForgotPassword from './ForgotPassword';
import { useCookies } from 'react-cookie';

function LoginPage() {
  return (
    <section>
      <div className="login-box">
        
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
          </Routes>
      </div>
    </section>
  );
}

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, setCookies] = useCookies(['authToken']);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = {
        username: formData.username,
        password: formData.password,
      };

      const response = await axios.post('http://localhost:3001/login_page', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);
      setError('');

      
      const authToken = response.data.authToken;
      setCookies('authToken', authToken);

      
      const { from } = location.state || { from: { pathname: '/Sidebar' } };
      navigate(from);
    } catch (error) {
      console.error(error);
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="input-box">
        <span className="icon">
          <ion-icon name="person"></ion-icon>
        </span>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          data-aos="fade-right"
        />
        <label>Username</label>
      </div>
      <div className="input-box">
        <span className="icon">
          <ion-icon name="eye-off"></ion-icon>
        </span>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          data-aos="fade-right"
        />
        <label>Password</label>
      </div>
      <div className="remember-forgot">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#">
          <i><Link to="/ForgotPassword">Forgotten Password?</Link></i>
        </a>
      </div>

      <button type="submit" disabled={submitting} data-aos="fade-up">
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
      <br />
      <br />
      <h5>_ OR _</h5>
      <div className="log-google">
        <GoogleOAuthProvider clientId="476717558763-pbbvpjdugi7ium3eprbclkqn8f61hllf.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const details = jwt_decode(credentialResponse.credential);
              console.log(details);
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
      </div>
      <div className="register-link">
        <p>
          Don't have an account? <Link to="/RegisterPage">Register</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginPage;