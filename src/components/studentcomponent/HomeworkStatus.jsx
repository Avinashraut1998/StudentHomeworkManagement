import React from "react";

const HomeworkStatus = ({ homeworkData }) => {
  

  return (
    <div style={{color:"black"}}>
      <h2>Homework Status</h2>
      <ul>
        {homeworkData.map((assignment) => (
          <li key={assignment.id}>
            <strong>{assignment.title}</strong> - Status: {assignment.status}{" "}
            {assignment.status === "Pending" ? (
              <span style={{ color: "orange" }}>⚠️</span>
            ) : (
              <span style={{ color: "green" }}>✔️</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeworkStatus;
