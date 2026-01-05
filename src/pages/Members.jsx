import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { advisors, supervisors, developers } from '../data/members';
import './Members.css';


const normalizeUrl = (u) => {
  if (!u) return null;
  if (u === '#') return null;
  const s = String(u).trim();
  if (s.startsWith('http://') || s.startsWith('https://')) return s;
  return `https://${s}`;
};

const MemberCard = ({ member }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    
    if (e.target.closest('a')) return;
    navigate(`/members/${member.id}`);
  };

  return (
    <div
      className="member-card"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => { if (e.key === 'Enter') handleClick(e); }}
    >
      <div className="member-avatar-wrapper">
        <img 
          src={member.image} 
          alt={member.name} 
          className="member-avatar"
        />
        {/* Safety check for department string */}
        
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        {member.bio && <p className="member-bio">{member.bio}</p>}
        
        <div className="member-socials">
          {normalizeUrl(member.socials?.linkedin) && (
            <a href={normalizeUrl(member.socials?.linkedin)} target="_blank" rel="noopener noreferrer" className="member-link">
              <svg className="member-svg-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          )}
          {normalizeUrl(member.socials?.github) && (
            <a href={normalizeUrl(member.socials?.github)} target="_blank" rel="noopener noreferrer" className="member-link">
              <svg className="member-svg-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Members = () => {
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState({
    advisors: false,
    supervisors: false,
    developers: false,
  });

  const filterByQuery = (list) => {
    if (!query.trim()) return list;
    const q = query.trim().toLowerCase();
    return list.filter(m => (m.name || '').toLowerCase().includes(q));
  };

  const advisorsFiltered = filterByQuery(advisors);
  const supervisorsFiltered = filterByQuery(supervisors);
  const developersFiltered = filterByQuery(developers);

  const visibleFor = (list, key) => {
    if (query.trim()) return list;
    return showAll[key] ? list : list.slice(0, 3);
  };

  return (
    <div className="members-wrapper">
      <div className="members-container">
        <header className="members-header">
          <h1 className="members-title">The Community Members</h1>
          <p className="members-subtitle">Meet the brilliant minds guiding our robotics and IoT initiatives forward.</p>
        </header>

        <div className="members-controls">
          <input
            className="members-search"
            type="search"
            placeholder="Find member by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Find member by name"
          />
          {query && (
            <button className="clear-btn" onClick={() => setQuery('')} aria-label="Clear search">Clear</button>
          )}
        </div>

        <section className="members-section">
          <h2 className="members-section-title">Faculty Advisors</h2>
          <div className="members-grid members-grid-3">
            {visibleFor(advisorsFiltered, 'advisors')?.map(m => <MemberCard key={m.id} member={m} />)}
          </div>
          {advisorsFiltered.length === 0 && <p className="no-results">No members found.</p>}
          {advisorsFiltered.length > 3 && !query && (
            <div className="section-actions">
              <button className="show-all-button" onClick={() => setShowAll(prev => ({ ...prev, advisors: !prev.advisors }))}>
                {showAll.advisors ? 'Show less' : 'Show all'}
              </button>
            </div>
          )}
        </section>

        <section className="members-section">
          <h2 className="members-section-title">Members</h2>
          <div className="members-grid members-grid-3">
            {visibleFor(supervisorsFiltered, 'supervisors')?.map(m => <MemberCard key={m.id} member={m} />)}
          </div>
          {supervisorsFiltered.length === 0 && <p className="no-results">No members found.</p>}
          {supervisorsFiltered.length > 3 && !query && (
            <div className="section-actions">
              <button className="show-all-button" onClick={() => setShowAll(prev => ({ ...prev, supervisors: !prev.supervisors }))}>
                {showAll.supervisors ? 'Show less' : 'Show all'}
              </button>
            </div>
          )}
        </section>

        <section className="members-section">
          <h2 className="members-section-title">Developers</h2>
          <div className="members-grid members-grid-4">
            {visibleFor(developersFiltered, 'developers')?.map(m => <MemberCard key={m.id} member={m} />)}
          </div>
          {developersFiltered.length === 0 && <p className="no-results">No members found.</p>}
          {developersFiltered.length > 3 && !query && (
            <div className="section-actions">
              <button className="show-all-button" onClick={() => setShowAll(prev => ({ ...prev, developers: !prev.developers }))}>
                {showAll.developers ? 'Show less' : 'Show all'}
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Members;