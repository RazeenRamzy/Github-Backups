import React from 'react';
import './StudentAttendance.css';

const StudentAttendance = ({ students, attendance, setAttendance }) => {
  const handleAttendanceChange = (student, isPresent) => {
    setAttendance(prev => ({ ...prev, [student]: isPresent }));
  };

  return (
    <div className="student-attendance">
      <h3>Student Attendance</h3>
      {students.map(student => (
        <div key={student} className="student-row">
          <span>{student}</span>
          <label>
            <input
              type="checkbox"
              checked={attendance[student] || false}
              onChange={(e) => handleAttendanceChange(student, e.target.checked)}
            />
            Present
          </label>
        </div>
      ))}
    </div>
  );
};

export default StudentAttendance;