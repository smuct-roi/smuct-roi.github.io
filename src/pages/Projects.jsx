import React, { useState } from 'react';
// Ensure this path matches your file exactly (check if it's .js or .jsx)
import { projects, ProjectStatus } from '../data/projects'; 
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  // Safety check: if projects is undefined, the app won't crash
  const projectList = projects || [];

  const filteredProjects = projectList.filter(p => {
    if (filter === 'All') return true;
    return p.status === filter;
  });

  return (
    <div className="projects-page">
      <div className="content-container">
        
        <header className="page-header">
          <h1 className="page-title">Innovation Showcase</h1>
          <p className="page-lead">
            Explore our collection of hardware and software projects, ranging from industrial IoT solutions to autonomous robotic systems.
          </p>
        </header>

        <div className="filter-bar">
          {['All', ProjectStatus.RUNNING, ProjectStatus.COMPLETED].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-pill ${filter === f ? 'active' : 'inactive'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="empty-state">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;