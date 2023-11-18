import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./components/Appbar";
import { Route, Routes } from "react-router-dom";
import Student from "./components/studentcomponent/Student";
import AdminDashboard from "./components/AdminDashboard";
import TeacherDashboard from "./components/TeacherDashboard";
import Home from "./components/Home";

function App() {
  const linearGradientStyle = {
    background: "linear-gradient(to top, #ebe6e6 50%,  #049081 0%)", 
    color: "#fff", 
    height: "100vh",
  };
  return (
    <>
      <Appbar />
      <div className="" style={linearGradientStyle}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Student" element={<Student />} />

          <Route path="/AdminDashboard" element={<AdminDashboard />} />

          <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
