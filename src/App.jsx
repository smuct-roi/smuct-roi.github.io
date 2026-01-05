/*
  App.jsx — Root application component and route definitions
  - Defines application routes and provides global layout (Navbar/Footer)
  - Sections: helpers (ScrollToTop), route configuration, layout
*/

import React, { useEffect, Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Members from './pages/Members';
import Posts from './pages/Posts';
import PostDetails from './pages/PostDetails';
import About from './pages/About';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import MemberDetails from './pages/MemberDetails';

import './App.css'; 

/**
 * ScrollToTop ensures the window resets to (0,0) whenever
 * the user changes the URL path.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      
      {/* app-wrapper: Uses min-height: 100vh and display: flex 
          to keep the footer at the bottom. 
      */}
      <div className="app-wrapper">
        
        {/* Navbar: Set to position: sticky in CSS */}
        <Navbar />
        
        <main className="main-content">
          <Suspense fallback={<div className="loading-state">Initializing Systems...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/members" element={<Members />} />
              <Route path="/members/:id" element={<MemberDetails />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<PostDetails />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply" element={<Apply />} />
              
              {/* Fallback for undefined routes */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;