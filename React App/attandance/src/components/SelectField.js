import React from 'react';
import './SelectField.css';

const SelectField = ({ label, options, value, onChange, disabled }) => (
  <div className="select-field">
    <label>{label}</label>
    <select 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;