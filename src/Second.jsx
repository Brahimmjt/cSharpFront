import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Switch from "./Switch";

const Second = ({isSelected}) => {
  const [studentData, setStudentData] = useState([]);
  const [selectStudent,setSelectStudent] = useState({
    "name": "JJJ",
    "apogee": 222,
    "prenom": "foo",
    "noteN": 900.0,
    "noteR": 9060.0,
    "email": "hiii.doe@example.com",
    "m3": 0.0,
    "m4": 0.0,
    "mr5": 0.0,
    "m1": 0.0,
    "m2": 0.0,
    "mr4": 0.0,
    "mr6": 0.0,
    "mr3": 0.0,
    "mr2": 0.0,
    "m6": 0.0,
    "m5": 0.0,
    "mr1": 0.0
});
 
  const handleRowClick = (student) => {
    // Place your code here to do something with the selected student.
    
    setSelectStudent(student);
    console.log('Selected student:',selectStudent);
  };
  useEffect(() => {
    axios.get('http://localhost:8080/students/2')
      .then(response => {
        console.log("hello abdoo")
        setStudentData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  console.log();
  return (
    <div className={`${isSelected === "second" ? "block": "hidden"} w-[90%] mx-auto flex mx-auto flex-row gap-2`}>
           <Switch/>

      <div className='flex-1'>
        <h3 className='text-center text-gray-600 uppercase text-xl leading-normal m-10 font-bold'>Semestre 3</h3>
    <div className="bg-white shadow-md rounded my-6">
    <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-blue-400 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-center text-white">name</th>
            <th className="py-3 px-6 text-center text-white">prenom</th>
            <th className="py-3 px-6 text-center text-white">apogee</th>
            <th className="py-3 px-6 text-center text-white">email</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
        {studentData.map((student, index) => (
            <tr className="border-b border-gray-200 hover:bg-gray-100" onClick={() => handleRowClick(student)}>
            <th className="py-3 px-6 text-center whitespace-nowrap">{student.name}</th>
            <th className="py-3 px-6 text-center">{student.prenom}</th>
            <td className="py-3 px-6 text-center">{student.apogee}</td>
            <td className="py-3 px-6 text-center">{student.email}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
    </div>
    <div className='flex-1'>
    <h3 className='text-center text-bleu-600 uppercase text-xl leading-normal m-10 font-bold'>Liste des Etudiants</h3>
    <div className="bg-white shadow-md rounded my-6">
    <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-black border-b-4 border-gray-200 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-center text-white">Module</th>
            <th className="py-3 px-6 text-center text-white">Ordinair</th>
            <th className="py-3 px-6 text-center text-white">Ratrapage</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">JEE</td>
            <td className="py-3 px-6 text-center">{selectStudent.m1}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr1}</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">machine learning</td>
            <td className="py-3 px-6 text-center">{selectStudent.m2}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr2}</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">crypto graphy</td>
            <td className="py-3 px-6 text-center">{selectStudent.m3}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr3}</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">English</td>
            <td className="py-3 px-6 text-center">{selectStudent.m4}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr4}</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">Oracle</td>
            <td className="py-3 px-6 text-center">{selectStudent.m5}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr5}</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">IoT</td>
            <td className="py-3 px-6 text-center">{selectStudent.m6}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr6}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</div>
  )
}

export default Second