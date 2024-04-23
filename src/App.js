import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Home from './Home';
import NavBar from "./component/common/NavBar.js";
import StudentsView from './component/student/StudentsView';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view-students" element={<StudentsView />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
