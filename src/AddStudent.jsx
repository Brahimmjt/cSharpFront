import React, { useState } from 'react';

const AddStudent = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    prenom: '',
    email: '',
    apogee: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onAddStudent(formData);

    setFormData({
      name: '',
      prenom: '',
      email: '',
      apogee: '',
    });
  };

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
              id="name"
              placeholder="Enter student's name"
              value={formData.name}
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
              id="prenom"
              placeholder="Enter student's prenom"
              value={formData.prenom}
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
              id="email"
              placeholder="Enter student's email"
              value={formData.email}
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
              id="apogee"
              placeholder="Enter student's Num Appoge"
              value={formData.apogee}
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
