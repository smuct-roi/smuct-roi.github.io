import React, { useState } from 'react';
import './Apply.css';

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    department: '',
    skills: '',
    motivation: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success-wrapper">
        <div className="success-icon">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="success-title">Application Received!</h2>
        <p className="success-text">
          Thank you for applying, {formData.name}. Your application has been sent for approval by the Supervisor and Committee President. We will contact you via email soon.
        </p>
        <button onClick={() => setSubmitted(false)} className="reset-btn">
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <div className="apply-page">
      <div className="form-card">
        <header className="form-header">
          <h1 className="form-title">Join the Innovation Hub</h1>
          <p className="form-subtitle">Become a part of the next generation of Robotics and IoT engineers.</p>
        </header>

        <form onSubmit={handleSubmit} className="apply-form">
          <div className="form-row">
            <div className="form-group">
              <label className="label">Full Name</label>
              <input 
                required
                type="text" 
                className="input"
                placeholder="John Doe"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label className="label">Email Address</label>
              <input 
                required
                type="email" 
                className="input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="label">Student ID</label>
              <input 
                required
                type="text" 
                className="input"
                placeholder="S12345678"
                value={formData.studentId}
                onChange={e => setFormData({...formData, studentId: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label className="label">Department</label>
              <select 
                className="input"
                value={formData.department}
                onChange={e => setFormData({...formData, department: e.target.value})}
              >
                <option value="">Select Department</option>
                <option value="CSE">Computer Science</option>
                <option value="EEE">Electrical Engineering</option>
                <option value="ME">Mechanical Engineering</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="label">Skills & Interests (Comma separated)</label>
            <input 
              type="text" 
              className="input"
              placeholder="Python, Arduino, 3D Modeling..."
              value={formData.skills}
              onChange={e => setFormData({...formData, skills: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label className="label">Motivation</label>
            <textarea 
              required
              rows={4}
              className="input"
              placeholder="Why do you want to join the committee?"
              value={formData.motivation}
              onChange={e => setFormData({...formData, motivation: e.target.value})}
            ></textarea>
          </div>

          <div className="submit-container">
            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;