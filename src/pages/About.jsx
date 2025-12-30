import React from 'react';
import './About.css';

const About = () => {
  const coreValues = [
    { title: 'Open Innovation', desc: 'Every idea counts. We operate on the principle of open-source knowledge sharing.' },
    { title: 'Collaboration', desc: 'Robotics is multidisciplinary. We unite CSE, EEE, and Mechanical students.' },
    { title: 'Impact', desc: 'We build for the real world. Every project must aim to solve a tangible problem.' }
  ];

  return (
    <div className="wrapper">
      <div className="container">
        
        {/* Top Section */}
        <div className="hero-grid">
          <div className="content">
            <h1 className="title">Mission & Vision</h1>
            <p className="description">
              The Robotics & IoT Committee was established to bridge the gap between theoretical engineering and practical innovation. We provide students with the resources, mentorship, and environment needed to build the hardware and software of tomorrow.
            </p>
            <p className="description">
              Our mission is to foster a culture of problem-solving where student-led teams develop IoT nodes, autonomous vehicles, and industrial automation prototypes that solve local challenges.
            </p>
            
            <div className="features">
              
             
            </div>
          </div>

          {/* Visual Element */}
          <div className="visual">
            <div className="image-box">
              <img 
                src="https://picsum.photos/seed/lab/800/800" 
                alt="Innovation Hub" 
                className="image"
              />
              <div className="overlay">
                <div className="pulse"></div>
                <div className="badge">SMUCT</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="values-section">
          <h2 className="section-heading">Our Core Values</h2>
          <div className="values-grid">
            {coreValues.map((val, i) => (
              <div key={i} className="value-item">
                <div className="number">0{i + 1}</div>
                <h4 className="value-title">{val.title}</h4>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;