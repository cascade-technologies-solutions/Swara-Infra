

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser, registerUser } from '../services/api'; // Import API functions
import '../styles/Auth.css';

// Login Component
export const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/Projects';
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  
  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await loginUser(formData);
      if (response.success) {
        handleLogin(); // Trigger login state change
        navigate(redirectTo); // Redirect after login
      } else {
        setError(response.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="unique-auth-container">
      <h1 className="unique-auth-heading">Login</h1>
      <form className="unique-auth-form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <label className="unique-auth-label">Email:</label>
        <input
          className="unique-auth-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
        <label className="unique-auth-label">Password:</label>
        <input
          className="unique-auth-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
        />
        <button className="unique-auth-button" type="submit">
          Login
        </button>
      </form>
      <p className="unique-auth-footer">
        Don't have an account? <span onClick={() => navigate('/register')}>Register here</span>
      </p>
    </div>
  );
};

// Register Component
export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile_number: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await registerUser(formData);
      if (response.success) {
        setSuccess('Registration successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(response.error || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="unique-auth-container">
      <h1 className="unique-auth-heading">Register</h1>
      <form className="unique-auth-form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <label className="unique-auth-label">Name:</label>
        <input
          className="unique-auth-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />
        <label className="unique-auth-label">Mobile Number:</label>
        <input
          className="unique-auth-input"
          type="tel"
          name="mobile_number"
          value={formData.mobile_number}
          onChange={handleChange}
          required
          placeholder="Enter your mobile number"
        />
        <label className="unique-auth-label">Email:</label>
        <input
          className="unique-auth-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
        <label className="unique-auth-label">Password:</label>
        <input
          className="unique-auth-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
        />
        <button className="unique-auth-button" type="submit">
          Register
        </button>
      </form>
      <p className="unique-auth-footer">
        Already have an account? <span onClick={() => navigate('/login')}>Login here</span>
      </p>
    </div>
  );
};
