import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import SelectField from './SelectField';
import StudentAttendance from './StudentAttendance';
import { schools } from '../data/schoolsData';
import './AttendanceManagementSystem.css';

const AttendanceManagementSystem = () => {
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedLecturer, setSelectedLecturer] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [studentAttendance, setStudentAttendance] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const attendanceData = {
      school: selectedSchool,
      program: selectedProgram,
      batch: selectedBatch,
      lecturer: selectedLecturer,
      subject: selectedSubject,
      attendance: studentAttendance,
    };
    console.log('Attendance Data:', attendanceData);
    downloadAttendanceExcel(attendanceData);
    sendEmailToAdmin(attendanceData);
  };

  const downloadAttendanceExcel = (data) => {
    // Create workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([]);

    // Add header information
    XLSX.utils.sheet_add_aoa(worksheet, [
      ['Attendance Report'],
      [],
      [`School: ${data.school}`],
      [`Program: ${data.program}`],
      [`Batch: ${data.batch}`],
      [`Lecturer: ${data.lecturer}`],
      [`Subject: ${data.subject}`],
      [`Date: ${new Date().toLocaleDateString()}`],
      [],
      ['Student Name', 'Status'],
    ], { origin: 'A1' });

    // Add student attendance data
    const attendanceData = Object.keys(data.attendance).map(student => [
      student,
      data.attendance[student] ? 'Present' : 'Absent'
    ]);

    XLSX.utils.sheet_add_aoa(worksheet, attendanceData, { origin: 'A11' });

    // Set column widths
    const columnWidths = [{ wch: 20 }, { wch: 10 }];
    worksheet['!cols'] = columnWidths;

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance");

    // Generate Excel file
    XLSX.writeFile(workbook, `attendance_${data.school}_${data.subject}_${new Date().toLocaleDateString().replace(/\//g, '-')}.xlsx`);
  };

  const sendEmailToAdmin = (data) => {
    // Simulating email sending
    console.log('Sending email to razeen@bcas.lk with attendance data:', data);
    alert('Attendance data has been sent to razeen@bcas.lk');
  };

  const selectedSchoolData = schools.find((school) => school.name === selectedSchool);
  const selectedProgramData = selectedSchoolData?.programs.find((program) => program.name === selectedProgram);
  const selectedBatchData = selectedProgramData?.batches.find((batch) => batch.name === selectedBatch);
  const selectedLecturerData = selectedBatchData?.lecturers.find((lecturer) => lecturer.name === selectedLecturer);

  return (
    <form className="attendance-form" onSubmit={handleSubmit}>
      <SelectField
        label="School"
        options={schools.map((school) => school.name)}
        value={selectedSchool}
        onChange={setSelectedSchool}
      />
      <SelectField
        label="Program"
        options={selectedSchoolData?.programs.map((program) => program.name) || []}
        value={selectedProgram}
        onChange={setSelectedProgram}
        disabled={!selectedSchool}
      />
      <SelectField
        label="Batch"
        options={selectedProgramData?.batches.map((batch) => batch.name) || []}
        value={selectedBatch}
        onChange={setSelectedBatch}
        disabled={!selectedProgram}
      />
      <SelectField
        label="Lecturer"
        options={selectedBatchData?.lecturers.map((lecturer) => lecturer.name) || []}
        value={selectedLecturer}
        onChange={setSelectedLecturer}
        disabled={!selectedBatch}
      />
      <SelectField
        label="Subject"
        options={selectedLecturerData?.subjects || []}
        value={selectedSubject}
        onChange={setSelectedSubject}
        disabled={!selectedLecturer}
      />
      {selectedBatchData && (
        <StudentAttendance
          students={selectedBatchData.students}
          attendance={studentAttendance}
          setAttendance={setStudentAttendance}
        />
      )}
      <button className="submit-button" type="submit">Submit Attendance</button>
    </form>
  );
};

export default AttendanceManagementSystem;