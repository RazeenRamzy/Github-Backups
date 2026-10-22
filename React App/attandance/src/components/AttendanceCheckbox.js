import React from 'react';
import './AttendanceCheckbox.css';

const AttendanceCheckbox = ({ checked, onChange }) => (
  <div className="attendance-checkbox">
    <label>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
      />
      Present
    </label>
  </div>
);

export default AttendanceCheckbox;