import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Switch from "./Switch";

const Etudiants = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/students')
      .then(response => {
        console.log(response.data)
        setStudentData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <div className={`w-[80%] mx-auto mt-14`}>
            <Switch/>

        <h3 className='text-center text-gray-600 uppercase text-xl leading-normal m-10 font-bold'>Liste des Etudiants</h3>
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-purple-500 border-b-4 border-gray-200 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-center text-white">Nom</th>
            <th className="py-3 px-6 text-center text-white">Prenom</th>
            <th className="py-3 px-6 text-center text-white">Email</th>
            <th className="py-3 px-6 text-center text-white">Num Appoge</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
        {studentData.map((student, index) => (
            <tr className="border-b border-gray-200 hover:bg-gray-100" onClick={() => handleRowClick(student)}>
            <th className="py-3 px-6 text-center whitespace-nowrap">{student.name}</th>
            <th className="py-3 px-6 text-center">{student.prenom}</th>
            <td className="py-3 px-6 text-center">{student.email}</td>
            <td className="py-3 px-6 text-center">{student.apogee}</td>
            </tr>
            ))}
          
        </tbody>
      </table>
    </div>
</div>
  )
}

export default Etudiants