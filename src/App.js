import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Home from './Home';
import NavBar from "./component/common/NavBar.js";
import AddStudents from "./component/student/AddStudents.js";
import EditStudent from "./component/student/EditStudent.js";
import StudentPofile from "./component/student/StudentProfile.js";
import StudentsView from './component/student/StudentsView';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view-students" element={<StudentsView />} />
          <Route exact path="/add-students" element={<AddStudents />} />
          <Route exact path="/edit-student/:id" element={<EditStudent />} />
          <Route exact path="/student-profile/:id" element={<StudentPofile />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
