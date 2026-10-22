import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersView from './UsersView';
import UserInfoView from './UserInfoView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersView />} />
        <Route path="/user/:id" element={<UserInfoView />} />
      </Routes>
    </Router>
  );
}

export default App;
