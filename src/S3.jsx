import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Switch from "./Switch";


const S3 = ({isSelected}) => {
    const [selectStudent,setSelectStudent] = useState({
    });
    const [selectStudent2,setSelectStudent2] = useState({
    });
    const isButtonVisible = selectStudent; 
    useEffect(() => {
        console.log("apogee",localStorage.getItem("apogee"));
        axios.get('http://localhost:8080/student/3/'+localStorage.getItem("apogee"))
      .then(response => {
        console.log("data:",response.data)
        setSelectStudent(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

      axios.get('http://localhost:8080/getstudent/'+localStorage.getItem("name")+'/'+localStorage.getItem("apogee"))
          .then(response => {
            console.log("data:",response.data);
            setSelectStudent2(response.data);
          });

      }, []);
      const handleSubmit = async (e) => {
       
          
          const xmlData = `
            <student>
              <name>${selectStudent2.name}</name>
              <prenom>${selectStudent2.prenom}</prenom>
              <apogee>${selectStudent2.apogee}</apogee>
              <email>${selectStudent2.email}</email>
            </student>
          `;
          
          
          const response = await axios.post('http://localhost:5104/inscrit/3', xmlData, {
            headers: {
              'Content-Type': 'application/xml',
            },
          });
    
          console.log('Data sent successfully:', response.data);
          window.location.reload(); 
       

      };
  return (
    <div className={`${isSelected === "S3" ? "block": "hidden"} w-[90%] flex mx-auto flex-row gap-2`}>
        
    <div className='flex-1'>
    <h3 className='text-center text-gray-600 uppercase text-xl leading-normal m-10 font-bold'>Semester 3</h3>
    <div className="bg-white shadow-md rounded my-6">
    <div className="text-center border-b">
    {!isButtonVisible && (
        <button
          type="submit"
          className="bg-red-500 text-white rounded-md py-2 px-20 hover:bg-green-600"
          onClick={() => handleSubmit()}
        >
          Register
        </button>
      )}
          </div>
    <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-yellow-500 border-b-4 border-gray-200 uppercase text-sm leading-normal">
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
   
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">IoT</td>
            <td className="py-3 px-6 text-center">{selectStudent.m6}</td>
            <td className="py-3 px-6 text-center">{selectStudent.mr6}</td>

          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <th className="py-3 px-6 text-center">Note Finale</th>
            <td className="py-3 px-6 text-center">{(selectStudent.m6+selectStudent.m5+selectStudent.m4+selectStudent.m3+selectStudent.m2+selectStudent.m1)/6}</td>
            <td className="py-3 px-6 text-center">{(selectStudent.mr6+selectStudent.mr5+selectStudent.mr4+selectStudent.mr3+selectStudent.mr2+selectStudent.mr1)/6}</td>
       
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</div>
  )
}

export default S3