import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Switch = ({isSelected}) => {
  return (
    <div className="bg-white shadow-md rounded w-[20%] absolute bottom-0 left-[40%] p-4 transform translate-x-[-40%]">
        <ul className="flex flex-row space-x-20 mx-auto w-fit text-gray-600">
          <li className="border-b-4 border-green-500 p-3 font-semibold">
            <Link to="/etudiants">Etudiants</Link>
          </li>
          <li className="border-b-4 border-green-500 p-3 font-semibold">
            <Link to="/Releviers">Releviers</Link>
          </li>
          <li className="border-b-4 border-green-500 p-3 font-semibold">
            <Link to="/addStudent">ajouter etudiants</Link>
          </li>
        </ul>
      </div>
  )
}

export default Switch