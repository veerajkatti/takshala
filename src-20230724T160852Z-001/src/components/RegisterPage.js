import React, { useState } from 'react';
 import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
 
  const initialFormData = {
    username: '',
    email: '',
    password: '',
    repassword: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.username || !formData.email || !formData.password || !formData.repassword) {
      alert('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.repassword) {
      alert('Passwords do not match');
      return;
    }

    createMerchant();
  };

  const createMerchant = async () => {
    setSubmitting(true);
    try {
      const data = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        repassword: formData.repassword,
      };

      navigate('/Sidebar', { state: { username: formData.username }});
      const response = await axios.post('http://localhost:3002/register_data', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);
      alert('Registration successfully submitted');
       
      setError('');
      setPasswordError('');
      resetForm();

     
    } catch (error) {
      console.error(error);
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    
    setFormData(initialFormData);
  };

  return (
    <section>
      <div className="login-box">
        <form action="" onSubmit={handleSubmit}>
          <h2>Register</h2>
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
              data-aos="fade-right"
            />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              data-aos="fade-right"
            />
            <label>Email</label>
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
              data-aos="fade-right"
            />
            <label>Password</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              id="repassword"
              name="repassword"
              value={formData.repassword}
              onChange={handleChange}
              data-aos="fade-right"
            />
            <label>Re-enter Password</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={submitting} data-aos="fade-up">
            {submitting ? 'Registering...' : 'Register'}
          </button>
          <br />
          <br />
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;