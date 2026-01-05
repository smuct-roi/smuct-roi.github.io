/*
  Apply.jsx — Application page
  - Presents instructions and a link to the external application form
  - Sections: constants, hero content, action link
*/

import React from 'react';
import './Apply.css';

const Apply = () => {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

  return (
    <div className="apply-section">
      <div className="apply-card">
        <div className="icon-badge">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>

        <h1 className="apply-title">Join the Hub</h1>
        <p className="apply-subtitle">
          Submit your application via Google Forms to join our engineering teams.
        </p>

        <div className="info-box">
          <span className="info-heading">Requirements</span>
          <ul className="info-list">
            <li>Active Student ID</li>
            <li>Passion for Tech</li>
          </ul>
        </div>

        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="apply-btn">
          Open Form
        </a>
      </div>
    </div>
  );
};

export default Apply;