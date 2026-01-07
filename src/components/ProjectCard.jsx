/*
  ProjectCard.jsx — Compact project card used in lists/grids
  - Shows image, title, badges, technologies and team avatars
  - Sections: status helpers, click navigation, UI structure
*/

import React from 'react';
import './ProjectCard.css';

// --- Helper enum: ProjectStatus
const ProjectStatus = {
  RUNNING: '↺',
  COMPLETED: '✅'
};

// --- Navigation helper: used to open project detail on click
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  // determine boolean from project's textual status (e.g., 'Running' / 'Completed')
  const isRunning = String(project.status || '').toLowerCase().startsWith('run');
  const statusSymbol = isRunning ? ProjectStatus.RUNNING : ProjectStatus.COMPLETED;
  const navigate = useNavigate();

  const handleClick = (e) => {
    // Prevent navigation if user clicked a link or button inside the card
    if (e.target.closest('a') || e.target.closest('button')) return;
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="card-container" role="button" tabIndex={0} onClick={handleClick} onKeyDown={(e) => { if (e.key === 'Enter') handleClick(e); }}>
      <div className="card-header">
        <img src={project.images && project.images.length ? project.images[0] : ''} alt={project.title} className="card-img" />
        {project.images && project.images.length > 1 && (
          <div className="image-count">+{project.images.length - 1}</div>
        )}
        <div className="card-overlay"></div>
        <div className="card-header-content">
          <h3 className="card-title">{project.title}</h3>
          <div className="card-header-right">
            {project.isPinned && <span className="pinned-badge">📌</span>}

            <span className={`status-badge ${isRunning ? 'status-running' : 'status-completed'}`} aria-label={`Status: ${project.status}`}>
              <span className="status-symbol" aria-hidden>{statusSymbol}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="card-body">
        <p className="card-description">{project.description}</p>
        
        {/* Technologies */}
        <div className="tech-section">
          <div className="section-label">Technologies</div>
          <div className="tech-list">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        {/* Team and Members Section */}
        <div className="team-info-section">
          <div className="section-label">Team: {project.teamName}</div>
          <div className="member-names-list">
            {project.team.join(', ')}
          </div>
        </div>

        <div className="card-footer">
          <div className="team-avatars">
            {project.team.slice(0, 3).map((name, i) => (
              <div key={i} className="avatar-circle" title={name}>
                 {name.split(' ').map(n => n[0]).join('')}
              </div>
            ))}
            {project.team.length > 3 && (
               <div className="avatar-more">+{project.team.length - 3}</div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;