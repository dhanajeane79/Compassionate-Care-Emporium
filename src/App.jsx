/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import "./index.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AllProducts from "./Components/AllProducts";
import RegistrationForm from "./Components/RegistrationForm";
import Login from "./Components/Login";

export default function App() {
 
  return (
    <Router>
      <div className="app">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login  />} />
        </Routes>
      </div>
    </Router>
  );
}