import React, { useState } from 'react';
import axios from 'axios';
import './Forgot.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = ({ onClose }) => {
  const [passwordData, setPasswordData] = useState({
    newpassword: '',
    repassword: '',
  });
  const initialFormData = {
    newpassword: '',
    repassword: '',
  };


  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevPasswordData) => ({
      ...prevPasswordData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      
      if (passwordData.newpassword !== passwordData.repassword) {
        setError('Passwords do not match');
        return;
      }

      navigate('/', { state: { password: formData.newpassword }});
      const response = await axios.post('http://localhost:3002/forgot_page', {
        newpassword: passwordData.newpassword,
        repassword: passwordData.repassword,
      });

      console.log(response);
      alert('Password updated successfully');
      setError('');

    } catch (error) {
      console.error(error);

    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="outsideborder">
      <div className="popup-container">
        <div className="popup" style={{ backgroundColor: '#fff', padding: '20px' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Forgot Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="newpassword">New Password</label>
              <input
                className="manage-text"
                type="password"
                id="newpassword"
                name="newpassword"
                placeholder="Enter new password"
                value={passwordData.newpassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="repassword">Confirm Password</label>
              <input
                type="password"
                id="repassword"
                name="repassword"
                placeholder="Confirm new password"
                value={passwordData.repassword}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="form-group">
              <button className="save-button" type="submit" disabled={submitting}>
                {submitting ? 'Saving...' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;