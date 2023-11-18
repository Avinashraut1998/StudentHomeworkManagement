import { useState } from "react";

const HomeworkForm = ({ homeworkData, setHomeworkData }) => {
  
  const [title, setTitle] = useState("")
  const [discription, setDiscription] = useState("")
  



 
  const handleSubmit = (event) => {
    event.preventDefault();
   
    let newArr = [...homeworkData,{title,discription,status:'pending',id:homeworkData.length+1,}];
    setHomeworkData(newArr);
    
     setTitle("")
     setDiscription("")
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", backgroundColor: "#fff", color: "black" }}>
      <h2 style={{ textAlign: "center" }}>Submit Assignment</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="title" style={{ marginBottom: "8px" }}>
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
          style={{ marginBottom: "16px", padding: "8px" }}
        />

        <label htmlFor="description" style={{ marginBottom: "8px" }}>
          Description:
        </label>
        <textarea
          id="discription"
          name="discription"
          value={discription}
          onChange={(e)=>setDiscription(e.target.value)}
          required
          style={{ marginBottom: "16px", padding: "8px" }}
        ></textarea>

        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomeworkForm;
