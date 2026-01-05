/*
  ProjectDetails.jsx — Detailed view of a single project
  - Renders gallery, project metadata, member list and description
  - Sections: data lookup, carousel, team members, navigation
*/

import React, { useMemo, useState } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { advisors, supervisors, developers } from '../data/members';
import './Projects.css';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // --- Data lookup: find the project data for the requested :id
  const project = useMemo(() => (projects || []).find(p => p.id === id), [id]);

  // --- Carousel state: current slide index and navigation helpers
  const [index, setIndex] = useState(0);
  if (!project) return <Navigate to="/projects" replace />;

  const images = project.images && project.images.length ? project.images : [];
  const current = images[index] || null;

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);
  const goTo = (i) => setIndex(i);

  // --- Helpers: resolve team member names to known member objects when possible
  const findMember = (name) => {
    const target = String(name || '').toLowerCase().trim();
    return [...advisors, ...supervisors, ...developers].find(m => String(m.name).toLowerCase().trim() === target);
  };

  const teamMembers = project.team.map((name) => ({ name, member: findMember(name) }));

  return (
    <div className="projects-page">
      <div className="content-container">
        <header className="page-header">
          <h1 className="page-title">{project.title}</h1>
          <p className="page-lead">{project.teamName} — {project.status}</p>
        </header>

        <div className="project-detail-grid">

          <div className="project-visual">
            {/* Carousel / big image area */}
            {current ? (
              <div className="carousel">
                <button aria-label="Previous image" className="carousel-btn left" onClick={prev}>‹</button>
                <img src={current} alt={`${project.title} - ${index + 1}`} className="carousel-img" />
                <button aria-label="Next image" className="carousel-btn right" onClick={next}>›</button>
              </div>
            ) : (
              <div className="carousel placeholder">No images available</div>
            )}

            {images.length > 1 && (
              <div className="carousel-thumbs">
                {images.map((src, i) => (
                  <button key={i} className={`thumb-btn ${i === index ? 'active' : ''}`} onClick={() => goTo(i)}>
                    <img src={src} alt={`thumb-${i}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="project-detail-body">
            <div className="project-meta">
              <div><strong>Status:</strong> {project.status}</div>
              {project.completionDate && <div><strong>Completed:</strong> {project.completionDate}</div>}
              {project.expectedCompletionDate && <div><strong>Expected:</strong> {project.expectedCompletionDate}</div>}
              <div><strong>Technologies:</strong> {project.technologies.join(', ')}</div>
            </div>

            <div className="project-description full">
              <h3 className="section-title">Description</h3>
              <p>{project.description}</p>
            </div>

            <div className="section">
              <h3 className="section-title">Members</h3>
              <div className="member-list">
                {teamMembers.map((t, i) => (
                  t.member ? (
                    <div key={i} className="member-card" role="button" tabIndex={0} onClick={() => navigate(`/members/${t.member.id}`)} onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/members/${t.member.id}`); }}>

                      <div className="member-info">
                        <img
                          src={t.member.image}
                          alt={t.member.name}
                          className="member-img"
                        />

                        <div className="member-name">{t.member.name}</div>
                        <div className="member-role">{t.member.role}</div>
                      </div>

                    </div>
                  ) : (
                    <div key={i} className="member-card fallback">
                      <div className="member-avatar placeholder">{t.name.split(' ').map(n => n[0]).join('')}</div>

                      <div className="member-info">
                        <div className="member-name">{t.name}</div>
                        <div className="member-role">External Contributor</div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <Link to="/projects" className="back">← Back to Projects</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
