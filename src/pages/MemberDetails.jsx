import React, { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { advisors, supervisors, developers } from '../data/members';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './MemberDetails.css';

const normalizeUrl = (u) => {
  if (!u) return null;
  if (u === '#') return null;
  const s = String(u).trim();
  if (s.startsWith('http://') || s.startsWith('https://')) return s;
  return `https://${s}`;
};

const MemberDetails = () => {
  const { id } = useParams();

  const member = useMemo(() => {
    return [...advisors, ...supervisors, ...developers].find(m => m.id === id);
  }, [id]);

  const connectedTeam = useMemo(() => {
    if (advisors.some(m => m.id === id)) return 'Faculty Advisor';
    if (supervisors.some(m => m.id === id)) return 'Lab Supervisor';
    if (developers.some(m => m.id === id)) return 'Core Developer';
    return 'Member';
  }, [id]);

  const memberProjects = useMemo(() => {
    if (!member) return [];
    const target = String(member.name).toLowerCase().trim();
    return (projects || []).filter(p => Array.isArray(p.team) && p.team.some(t => String(t).toLowerCase().trim() === target));
  }, [member]);

  const [visibleCount, setVisibleCount] = useState(2);
  const displayedProjects = memberProjects.slice(0, visibleCount);
  const remaining = Math.max(0, memberProjects.length - visibleCount);
  const canShowMore = visibleCount < memberProjects.length;
  const showMoreCount = Math.min(2, remaining);
  
  const handleShowMore = () => setVisibleCount(c => Math.min(memberProjects.length, c + 2));
  const handleShowAll = () => setVisibleCount(memberProjects.length);
  const handleShowLess = () => setVisibleCount(2);

  // Aggregate unique technology tags from this member's projects
  const tags = useMemo(() => {
    const set = new Set();
    (memberProjects || []).forEach(p => {
      (p.technologies || []).forEach(t => set.add(String(t)));
    });
    return Array.from(set);
  }, [memberProjects]);

  const [showTags, setShowTags] = useState(false);
  const toggleTags = () => setShowTags(s => !s);

  if (!member) {
    return <Navigate to="/members" replace />;
  }

  return (
    <div className="page">
      <div className="banner">
        <div className="pattern"></div>
        <div className="glow"></div>
      </div>

      <div className="container">
        <div className="layout">
          
          <div className="sidebar">
            <div className="profile">
              <div className="avatar">
                <img src={member.image} alt={member.name} className="photo" />
              </div>
              
              <h1 className="name">{member.name}</h1>
              <div className="role">{member.role}</div>

              <div className="meta">
                <div className="row">
                  <div className="label">Internal ID</div>
                  <div className="value">#{String(member.id).toUpperCase()}</div>
                </div>
                <div className="row">
                  <div className="label">Department Unit</div>
                  <div className="value">{member.department}</div>
                </div>
                <div className="row">
                  <div className="label">Connected Team</div>
                  <div className="value">{connectedTeam}</div>
                </div>

                <div className="row">
                  <div className="label">Technology Tags</div>
                  <div className="value">
                    <button className="tags-toggle" onClick={toggleTags} aria-expanded={showTags}>
                      View tags ({tags.length})
                    </button>
                  </div>
                </div>

                {showTags && (
                  <div className="row">
                    <div className="tags-grid">
                      {tags.map((t,i) => <span key={i} className="tag-chip">{t}</span>)}
                    </div>
                  </div>
                )}
              </div>

              <div className="socials">
                {normalizeUrl(member.socials?.linkedin) && (
                  <a href={normalizeUrl(member.socials?.linkedin)} className="link" target="_blank" rel="noopener noreferrer">
                    <svg className="icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                )}
                {normalizeUrl(member.socials?.github) && (
                  <a href={normalizeUrl(member.socials?.github)} className="link" target="_blank" rel="noopener noreferrer">
                    <svg className="icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                )}

            
              </div>

              <Link to="/members" className="back">← Back </Link>
            </div>
          </div>

          <div className="content">
            <section className="bio">
              <h2 className="heading">Expertise & Narrative</h2>
              <div className="card">
                <p className="text">{member.bio || "No biography provided. This member is currently contributing to the technical frontiers of the SMUCT Robotics & IoT lab units."}</p>
              </div>
            </section>

            <section className="work">
              <div className="header">
                <h2 className="heading">Project Contributions</h2>
                <div className="badge">{memberProjects.length} COMMIT(S)</div>
              </div>

              {memberProjects.length > 0 ? (
                <>
                  <div className="projects">
                    {displayedProjects.map(project => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>

                  {memberProjects.length > 2 && (
                    <div className="actions">
                      {canShowMore ? (
                        <>
                          <button className="more" onClick={handleShowMore}>
                            Show more ({showMoreCount})
                          </button>
                          <button className="all" onClick={handleShowAll}>
                            Show all {memberProjects.length} projects
                          </button>
                        </>
                      ) : (
                        <button className="all" onClick={handleShowLess}>Show less</button>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="empty">
                  <div className="illustration">
                    <svg className="icon-large" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                  </div>
                  <h3 className="title">No active projects linked</h3>
                  <p className="desc">This member may be in a research or supervisory phase.</p>
                </div>
              )}
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MemberDetails;