import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AttendanceManagementSystem from './components/AttendanceManagementSystem';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>University Attendance Management System</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/admin-login">Admin Login</Link>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<AttendanceManagementSystem />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;