/*
  Projects.jsx — Projects listing page with filters
  - Allows filtering by status and lists project cards with pinned ordering
  - Sections: filters, projects grid, empty state
*/

import React, { useState } from 'react';
// Ensure this path matches your file exactly (check if it's .js or .jsx)
import { projects, ProjectStatus } from '../data/projects'; 
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

// --- Page Component: Projects
// State and handlers for filtering and rendering project cards
const Projects = () => {
  const [filter, setFilter] = useState('All');

  // Safety check: if projects is undefined, the app won't crash
  const projectList = projects || [];

  // Filter by status then sort pinned first then date descending
  const filteredProjects = projectList
    .filter(p => {
      if (filter === 'All') return true;
      return p.status === filter;
    })
    .sort((a, b) => {
      // Both pinned: order by pinnedSerial
      if (a.isPinned && b.isPinned) {
        const sa = typeof a.pinnedSerial === 'number' ? a.pinnedSerial : Number.MAX_SAFE_INTEGER;
        const sb = typeof b.pinnedSerial === 'number' ? b.pinnedSerial : Number.MAX_SAFE_INTEGER;
        return sa - sb;
      }
      // One pinned, one not: pinned comes first
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      // Neither pinned: order by date (newest first)
      const dateA = new Date(a.completionDate || a.expectedCompletionDate || 0);
      const dateB = new Date(b.completionDate || b.expectedCompletionDate || 0);
      return dateB - dateA;
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