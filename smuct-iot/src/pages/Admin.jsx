import React from 'react';
import './Admin.css';

const Admin = () => {
  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        
        <header className="admin-header">
          <h1 className="admin-title">Admin Portal (Phase 1)</h1>
          <div className="admin-alert">
            <span className="bold">Note:</span> This is a static portal. Content is currently managed via data files in the source code. Phase 2 will introduce Firebase Authentication.
          </div>
        </header>

        <section className="admin-content">
          {/* Instructions Card */}
          <div className="admin-card">
            <h2 className="card-title accent">Developer Instructions</h2>
            <div className="instruction-list">
              <div className="item">
                <h3 className="item-heading">1. Adding Projects</h3>
                <p className="item-text">Edit <code className="code-block">src/data/projects.js</code> and add a new entry to the <span className="pink">projects</span> array.</p>
              </div>
              <div className="item">
                <h3 className="item-heading">2. Publishing News</h3>
                <p className="item-text">Edit <code className="code-block">src/data/posts.js</code>. Ensure the date format is YYYY-MM-DD for correct sorting.</p>
              </div>
              <div className="item">
                <h3 className="item-heading">3. Member Management</h3>
                <p className="item-text">Update specific roles in <code className="code-block">src/data/members.js</code>. Images should be square aspect ratio for best display.</p>
              </div>
            </div>
          </div>

          {/* Status Card */}
          <div className="admin-card">
            <h2 className="card-title">Workflow Status</h2>
            <div className="status-list">
              <div className="status-row">
                <span className="label">GitHub Pages Deployment</span>
                <span className="badge green">Active</span>
              </div>
              <div className="status-row">
                <span className="label">Member Approval API</span>
                <span className="badge yellow">Pending Phase 2</span>
              </div>
              <div className="status-row">
                <span className="label">Google Sheets Integration</span>
                <span className="badge blue">Manual Sync Only</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Admin;