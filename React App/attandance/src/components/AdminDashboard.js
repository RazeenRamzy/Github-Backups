import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Select, MenuItem, FormControl, InputLabel, Box, Typography } from '@mui/material';
import './AdminDashboard.css';

// Mock data - replace with actual data fetching in a real application
const mockAttendanceData = [
  { date: '2023-08-01', attendanceRate: 0.8 },
  { date: '2023-08-02', attendanceRate: 0.85 },
  { date: '2023-08-03', attendanceRate: 0.9 },
  { date: '2023-08-04', attendanceRate: 0.75 },
  { date: '2023-08-05', attendanceRate: 0.95 },
];

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [viewType, setViewType] = useState('student');
  const [data, setData] = useState([]);

  useEffect(() => {
    // In a real application, fetch data based on timeRange and viewType
    const fetchData = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setData(mockAttendanceData);
    };

    fetchData();
  }, [timeRange, viewType]);

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  const handleViewTypeChange = (event) => {
    setViewType(event.target.value);
  };

  return (
    <Box className="admin-dashboard" sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Box className="controls" sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel id="time-range-label">Time Range</InputLabel>
          <Select
            labelId="time-range-label"
            value={timeRange}
            onChange={handleTimeRangeChange}
            label="Time Range"
          >
            <MenuItem value="day">Day</MenuItem>
            <MenuItem value="week">Week</MenuItem>
            <MenuItem value="month">Month</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel id="view-type-label">View Type</InputLabel>
          <Select
            labelId="view-type-label"
            value={viewType}
            onChange={handleViewTypeChange}
            label="View Type"
          >
            <MenuItem value="student">Student-wise</MenuItem>
            <MenuItem value="module">Module-wise</MenuItem>
            <MenuItem value="program">Program-wise</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="attendanceRate" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default AdminDashboard;