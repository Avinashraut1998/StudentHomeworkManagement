import React from "react";

const TeacherDashboard = () => {
  const teacherstyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    padding: '30px'
  }
  return (
    <div style={teacherstyle}>
      <h1>Teacher user roles and responsibilities</h1>
      <br />
      <ol>
        <li>Check and update the status of the student homework</li>
        <br />
        <li> Homework check approvals from the admin</li>
        <br />
        <li>Interact with Student and admin in messaging channel</li>
      </ol>
    </div>
  );
};

export default TeacherDashboard;
