import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import avatarPlaceholder1 from '../../asset/images/avatarPlaceholder2.webp';
import avatarPlaceholder2 from '../../asset/images/avatarPlaceholder.jpeg';
import '../../asset/css/custom-styles.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [userType, setUserType] = useState('student');
  const [error, setError] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(1);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/register', {
        username,
        password,
        email,
        contact,
        address,
        userType,
      });

      if (response.data.success) {
        // Registration successful
        console.log(response.data.message);
        // Redirect the user to the login page
        navigate('/login');
      } else {
        // Registration failed
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with an error status code
        setError(`Request failed with status ${error.response.status}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response received from the server');
      } else {
        // Something else happened while setting up the request
        setError('An error occurred while making the request');
      }
    }

    // Reset form fields
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
    setContact('');
    setAddress('');
    setUserType('student');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1 className="register-heading">MLibrarian Registration</h1>
        <div className="avatar">
          <img src={selectedAvatar === 1 ? avatarPlaceholder1 : avatarPlaceholder2} alt="Avatar" />
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <label>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Contact:
            <input type="tel" value={contact} onChange={handleContactChange} />
          </label>
          <br />
          <label>
            Address:
            <input type="text" value={address} onChange={handleAddressChange} />
          </label>
          <br />
          <label>
            User Type:
            <select value={userType} onChange={handleUserTypeChange}>
              <option value="student">Student</option>
              <option value="staff">Staff</option>
            </select>
          </label>
          <br />
          <button type="submit">Register</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Click here to login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
