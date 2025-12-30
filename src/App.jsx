import React, { useEffect, Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Members from './pages/Members';
import Posts from './pages/Posts';
import About from './pages/About';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Apply from './pages/Apply';

import './App.css'; 

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Reset scroll to top on every route change
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="app-wrapper">
        {/* Navbar usually has navbar-root class inside its own file */}
        <Navbar />
        
        <main className="main-content">
          <Suspense fallback={<div className="loading-state">Initializing Systems...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/members" element={<Members />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contact" element={<Contact />} />
             
              {/* Catch-all route */}
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