/*
  main.jsx — Application entry point
  - Renders the top-level <App /> into #root and bootstraps React
  - Sections: imports, root creation, render
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    
    <React.StrictMode>
      <App />
    </React.StrictMode>
    
  );
}