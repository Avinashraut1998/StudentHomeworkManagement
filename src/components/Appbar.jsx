import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Appbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Link style={{ textDecoration:"none"}} to="/">Home</Link>
          </Nav>
          <div style={{ textDecoration:"none", display:"flex", gap:10 }}>
            <Link style={{ textDecoration:"none"}} to="/Student">StudentDashBoard</Link>
            <Link style={{ textDecoration:"none"}} to="/AdminDashboard">  AdminDashBoard</Link>
            <Link style={{ textDecoration:"none"}} to="/TeacherDashboard">  TeacherDashBoard</Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Appbar;
