import React from 'react';
import './ProjectCard.css';

// Local definition of ProjectStatus since we removed the external types file
const ProjectStatus = {
  RUNNING: 'Running',
  COMPLETED: 'Completed'
};

const ProjectCard = ({ project }) => {
  const isRunning = project.status === ProjectStatus.RUNNING;

  return (
    <div className="card-container">
      {/* Header Image Section */}
      <div className="card-header">
        <img src={project.images[0]} alt={project.title} className="card-img" />
        <div className="card-overlay"></div>
        <div className="card-header-content">
          <h3 className="card-title">{project.title}</h3>
          <span className={`status-badge ${isRunning ? 'status-running' : 'status-completed'}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="card-body">
        <p className="card-description">{project.description}</p>
        
        <div className="tech-section">
          <div className="section-label">Technologies</div>
          <div className="tech-list">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="tech-more">+{project.technologies.length - 4} more</span>
            )}
          </div>
        </div>

        {/* Footer Section */}
        <div className="card-footer">
          <div className="team-avatars">
            {project.team.slice(0, 3).map((name, i) => (
              <div key={i} className="avatar-circle">
                 {name.split(' ').map(n => n[0]).join('')}
              </div>
            ))}
            {project.team.length > 3 && (
               <div className="avatar-more">
                 +{project.team.length - 3}
               </div>
            )}
          </div>
          <button className="details-btn">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;