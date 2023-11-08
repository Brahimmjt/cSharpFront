import React, { useEffect, useState } from 'react';
import axios from 'axios';
const StudentPage = ({isSelected}) => {
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
  return (
    <div className={`w-[80%] mx-auto mt-14`}>
        <h3 className='text-center text-gray-600 uppercase text-xl leading-normal m-10 font-bold'>HELLO, {selectStudent.name} {selectStudent.prenom}</h3>
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-max w-full table-auto">
      <thead>
          <tr className="bg-gray-200 border-b-4 border-gray-200 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-center">Module</th>
            <th className="py-3 px-6 text-center">Ordinair</th>
            <th className="py-3 px-6 text-center">Ratrapage</th>
            <th className="py-3 px-6 text-center">Valider</th>
            <th className="py-3 px-6 text-center">no valider</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">JEE</td>
            <td className="py-3 px-6 text-center">{selectStudent.m1}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr1}</td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">machine learning</td>
            <td className="py-3 px-6 text-center">{selectStudent.m2}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr2}</td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">crypto graphy</td>
            <td className="py-3 px-6 text-center">{selectStudent.m3}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr3}</td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">English</td>
            <td className="py-3 px-6 text-center">{selectStudent.m4}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr4}</td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">Oracle</td>
            <td className="py-3 px-6 text-center">{selectStudent.m5}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr5}</td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">IoT</td>
            <td className="py-3 px-6 text-center">{selectStudent.m6}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr6}</td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
  )
}

export default StudentPage