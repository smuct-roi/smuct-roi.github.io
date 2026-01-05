/*
  MainLayout.jsx — Minimal layout wrapper used by pages
  - Renders global Navbar and places children in the main region
  - Sections: layout wrapper, navbar, children insertion
*/

import React from 'react';
import Navbar from '../components/Navbar';
import "./styles/global.css";

const MainLayout = ({ children, onNavigate }) => {
  return (
    <div className="layout-container">
      <Navbar onNavigate={onNavigate} />
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;