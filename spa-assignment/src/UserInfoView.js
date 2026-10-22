import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserInfoView = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user information from the API based on the user ID
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data))
      .catch((error) => console.error('Error fetching user information:', error));
  }, [id]);

  return (
    <div>
      <h1>User Information View</h1>
      {user ? (
        <div>
          <img src={user.avatar} alt={`Avatar for ${user.first_name}`} />
          <p>{`${user.first_name} ${user.last_name}`}</p>
          <p>Email: {user.email}</p>
          <Link to="/">Back to Users</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserInfoView;
