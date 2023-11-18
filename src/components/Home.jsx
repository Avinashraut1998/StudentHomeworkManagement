import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '200vh',
    padding:'10vh',
    font: 'Papyrus'
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    font: 'Papyrus'
  };

  const itemStyle = {
    display:'flex',
    margin: '10px',
    gap: '50px',
    marginTop:'180px',
    font: 'Papyrus'
  };

  const linkStyle = {
    textDecoration: 'none', 
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>Student HomeWork Management</div>
      <div style={itemStyle}>
        <Link to="/Student" style={linkStyle}>
          <button style={buttonStyle}>Student</button>
        </Link>
      
      
        <Link to="/AdminDashboard" style={linkStyle}>
          <button style={buttonStyle}>Admin</button>
        </Link>
     
        <Link to="/TeacherDashboard" style={linkStyle}>
          <button style={buttonStyle}>Teacher</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
