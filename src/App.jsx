/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./index.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
// import AllProducts from "./Components/AllProducts";
// import RegistrationForm from "./Components/RegistrationForm";
// import Login from "./Components/Login";




function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;