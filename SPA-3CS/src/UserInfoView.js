import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css'

const UserInfoView = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
  
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data))
      .catch((error) => console.error('Error fetching user information:', error));
  }, [id]);

  return (
    <div>
      <h1></h1>
      {user ? (
        <div className="userInfoContainer">
          <div className="profileCard">
            <img src={user.avatar} alt={`Avatar for ${user.first_name}`} />
          </div>
          <div className="infoCard">
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Email: {user.email}</p>
            <Link to="/">Back to Users</Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserInfoView;
