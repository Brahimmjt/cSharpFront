import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link,useNavigate } from 'react-router-dom';

const AddStudent = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    name: 'oooooo',
    prenom: 'àààààà',
    email: 'àààààààà',
    apogee: 'àààààààà',
  });
  const navigat = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      const xmlData = `
        <student>
          <name>${formData.name}</name>
          <prenom>${formData.prenom}</prenom>
          <apogee>${formData.apogee}</apogee>
          <email>${formData.email}</email>
        </student>
      `;

      const response = await axios.post('http://localhost:5104/inscrit', xmlData, {
        headers: {
          'Content-Type': 'application/xml',
        },
      });

      console.log('Data sent successfully:', response.data);
      navigat("/etudiants")
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border p-2 rounded-md"
              type="text"
              name='name'
              placeholder="Enter student's name"
              // value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prenom">
              Prenom
            </label>
            <input
              className="w-full border p-2 rounded-md"
              type="text"
              name='prenom'
              placeholder="Enter student's prenom"
              // value={formData.prenom}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border p-2 rounded-md"
              type="email"
              name='email'
              placeholder="Enter student's email"
              // value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apogee">
              Num Appoge
            </label>
            <input
              className="w-full border p-2 rounded-md"
              type="text"
              name='apogee'
              placeholder="Enter student's Num Appoge"
              // value={formData.apogee}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
