import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setFeedback('');
      setName('');
    }, 5000);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        
        {/* Info Section */}
        <div className="info-column">
          <h1 className="main-title">Get in Touch</h1>
          <p className="lead-text">
            Whether you're a student of SMUCT looking to join, a faculty member with an idea, or an industry partner, we want to hear from you.
          </p>

            <div className="detail-item">
              <div className="icon-box">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-box">
                <h4 className="detail-label">Email Us</h4>
                <p className="detail-value">smuctroboticsandiotcommunity@gmail.com</p>
              </div>
            </div>

          <div className="contact-details">
            <div className="detail-item">
              <div className="icon-box">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className="text-box">
                <h4 className="detail-label">Our Location</h4>
                <p className="detail-value">5th floor room-1506,Shanto-Mariam University of Creative Technology
Permanent Campus Plot# 06, Avenue# 06, Sector# 17/H-1,Uttara, Dhaka-1230, Dhaka 1230</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="form-column">
          <h3 className="form-title">Leave Feedback-Currently disabled-</h3>
          <p className="form-note">Share your thoughts on our projects, website, or community activities.</p>
          
          <form onSubmit={handleFeedbackSubmit} className="feedback-form">
            <div className="group">
              <label className="label">Name</label>
              <input 
                required
                type="text" 
                className="field"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="group">
              <label className="label">Your Message</label>
              <textarea 
                required
                rows={5}
                className="field area"
                placeholder="What's on your mind?"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="send-btn">
              Send Feedback
            </button>
          </form>

          {success && (
            <div className="overlay-success">
               <div className="check-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
               </div>
               <h4 className="success-heading">Feedback Sent!</h4>
               <p className="success-sub">Thank you for helping us improve our community.</p>
            </div>
          )}
        </div>

        {/* Map Section */}
        <div className="map-section">
          <iframe 
            title="SMUCT Location"
            /* Official Embed Link for SMUCT Uttara Sector 17 */
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4552467727145!2d90.36440597509857!3d23.87346297858686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c306dd65bdb7%3A0x3ee4d56c0682b45f!2sShanto-Mariam%20University%20of%20Creative%20Technology!5e0!3m2!1sen!2sbd!4v1715600000000!5m2!1sen!2sbd"
            width="100%" 
            height="350" 
            style={{ border: 0, borderRadius: '1.5rem' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;