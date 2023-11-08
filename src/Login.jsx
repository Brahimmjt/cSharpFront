import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigat = useNavigate();
  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    console.log('Username:', username);
    console.log('Password:', password);

    if(username == "admin" && password == "admin"){
          console.log("admin")
          navigat("/etudiants")
    }else{
      axios.get('http://localhost:8080/login/'+username+"/"+password)
      .then(response => {
        console.log("data:",response.data)});
        navigat("/StudentPage")
      } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full border p-2 rounded-md"
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border p-2 rounded-md"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md py-2 px-4 hover:bg-reed-600"
              onClick={() => handleRowClick()}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
