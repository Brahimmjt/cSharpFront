import Etudiants from "./Etudiants";
import Releviers from "./Releviers"
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentPage from "./StudentPage";
import StudentNotes from "./StudentNotes";
function App() {
  return (
    <Router>
    <div className="w-full">
      
        <Routes>
          <Route path="/StudentPage" element={<StudentNotes />}/>
          <Route path="/Releviers" element={<Releviers />}/>
          <Route path="/etudiants" element={<Etudiants />}/>
          <Route path="/" element={<Login />}/>
        </Routes>
      
    </div>
    </Router>
  )
}

export default App
