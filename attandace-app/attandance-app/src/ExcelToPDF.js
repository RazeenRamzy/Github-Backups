import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ExcelTable = () => {
  const [selectedBatch, setSelectedBatch] = useState('batch1');
  const [lecturerName, setLecturerName] = useState('John Doe');
  const [studentData, setStudentData] = useState([]);
  const [newStudent, setNewStudent] = useState({ id: '', name: '', email: '', attendance: 'Present' });

  const AttendanceRenderer = (props) => {
    const student = props.data;

    const onChangeAttendance = (e) => {
      const updatedData = studentData.map((s) =>
        s.id === student.id ? { ...s, attendance: e.target.value } : s
      );
      setStudentData(updatedData);
    };

    return (
      <select value={student.attendance} onChange={onChangeAttendance}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>
    );
  };

  const columns = [
    { headerName: 'Student ID', field: 'id' },
    { headerName: 'Student Name', field: 'name' },
    { headerName: 'Email', field: 'email' },
    {
      headerName: 'Attendance',
      field: 'attendance',
      cellRendererFramework: AttendanceRenderer,
    },
  ];

  const addStudent = () => {
    if (newStudent.id && newStudent.name && newStudent.email) {
      setStudentData([...studentData, newStudent]);
      setNewStudent({ id: '', name: '', email: '', attendance: 'Present' });
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Student Attendance Report', 10, 10);
    doc.text('Lecturer: ' + lecturerName, 10, 20);
    const headers = columns.map((col) => col.headerName);
    const data = studentData.map((row) =>
      columns.map((col) => row[col.field])
    );

    doc.autoTable({ head: [headers], body: data, startY: 30 });
    doc.save('attendance_report.pdf');
  };

  return (
    <div>
      <div>
        <label>Select Batch: </label>
        <select
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
        >
          <option value="batch1">Batch 1</option>
          <option value="batch2">Batch 2</option>
        </select>
      </div>

      <div>
        <h2>Add New Student</h2>
        <div>
          <input
            type="text"
            placeholder="Student ID"
            value={newStudent.id}
            onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
          />
          <input
            type="text"
            placeholder="Student Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          />
          <button onClick={addStudent}>Add Student</button>
        </div>
      </div>

      <div>
        <h2>Lecturer Name</h2>
        <input
          type="text"
          placeholder="Enter Lecturer Name"
          value={lecturerName}
          onChange={(e) => setLecturerName(e.target.value)}
        />
      </div>

      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          columnDefs={columns}
          rowData={studentData}
        />
      </div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default ExcelTable;
