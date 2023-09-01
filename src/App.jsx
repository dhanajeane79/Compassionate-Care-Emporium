/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./index.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AllProducts from "./Components/AllProducts";
import RegistrationForm from "./Components/RegistrationForm";
import Login from "./Components/Login";




function App() {
  const BASE_URL = 'https://fakestoreapi.com';
  const storedToken = localStorage.getItem("authToken"); // Check if there is a token in localStorage
  const [token, setToken] = useState(storedToken || ""); // Set initial value to storedToken

  // State to store the authentication token
  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken"); // Check if there's a token in sessionStorage
   if (authToken) {
   setToken(authToken); // Set the token in state
    }
  }, []);

  // Function to handle successful login and set token
  const handleLoginSuccess = (newToken) => {
    localStorage.setItem("authToken", newToken); // Store the token in localStorage
    setToken(newToken); // Set the token in state
  };

  // Function to handle logout and clear token
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove the token from localStorage
    setToken("");  // Clear the token from state
  };


  return (
    <Router>
      <div className="app">

      <NavBar /> 
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts BASE_URL={BASE_URL} token={token} />} />
          <Route path="/register" element={<RegistrationForm BASE_URL={BASE_URL} />} /> 
          <Route path="/login" element={<Login BASE_URL={BASE_URL} handleLoginSuccess={handleLoginSuccess} />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;