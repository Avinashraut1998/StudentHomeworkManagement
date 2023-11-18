import { useState } from "react";
import HomeworkForm from "./HomeworkForm";
import HomeworkStatus from "./HomeworkStatus";
import HomeworkTable from "./HomeworkTable";


const Student = () => {
   
  const studentstyle ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    padding: '30px'
  }
  
  const [homeworkData, setHomeworkData] = useState([
 
  
  ]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      
      <div style={{ studentstyle ,marginTop: "50px" }}>
        <HomeworkForm
          homeworkData={homeworkData}
          setHomeworkData={setHomeworkData}
        />
      
      </div>
      <br/>
      <div style={studentstyle}>
        {<HomeworkTable homeworkData={homeworkData}/>}
      </div>
    </div>
  );
};

export default Student;
