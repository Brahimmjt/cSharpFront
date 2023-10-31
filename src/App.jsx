import Etudiants from "./Etudiants";
import Releviers from "./Releviers"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="w-full">
      <div className="bg-white shadow-md rounded w-[20%] absolute bottom-0 left-[50%] p-4 transform translate-x-[-50%]">
        <ul className="flex flex-row space-x-20 mx-auto w-fit text-gray-600">
          <li className="border-b-4 border-green-500 p-3 font-semibold">
            <Link to="/">Etudiants</Link>
          </li>
          <li className="border-b-4 border-green-500 p-3 font-semibold">
            <Link to="/Releviers">Releviers</Link>
          </li>
        </ul>
      </div>
      
        <Routes>
          <Route path="/Releviers" element={<Releviers />}/>
          <Route path="/" element={<Etudiants />}/>
        </Routes>
      
    </div>
    </Router>
  )
}

export default App
