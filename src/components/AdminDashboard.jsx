import React from "react";

const AdminDashboard = () => {
  const divstyle  = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    padding: '30px'
  }
  return (
    <div style={divstyle}>
      <h1> Admin user roles and responsibilities</h1>

      <br />
      <ol>
        <li>
          View status on homework submitted by the students and checked by
          teacher
        </li>
        <br />
        <li>
          View dashboards and reports for all homework filled by the student and
          points
        </li>
        <br />
        <li>Interact with Student and teacher in messaging channels</li>
        <br />
        <li>Approve the homework checked by teacher</li>
      </ol>
    </div>
  );
};

export default AdminDashboard;
