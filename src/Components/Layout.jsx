/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import TestNav from './NavBar'; // Replace with the path to your Navbar component
import '../CSS-Components/StyleLayout.css'; // Import the CSS file for the layout styles

function Layout({ children }) {
  return (
    <div className="layout-container">
      <TestNav />
   
      <main className="page-content">
        {children}
      </main>
      {/* Add the new section below the header */}
     
    </div>
  );
}

export default Layout;