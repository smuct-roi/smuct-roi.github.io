/*
  MemberCard.jsx — Reusable UI component to display a member
  - Shows avatar, name, role and quick social links. Click navigates to details.
  - Sections: imports, click handling, avatar, socials, export
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { normalizeUrl } from '../utils/helpers';
import './MemberCard.css';

// MemberCard — reusable member display used across pages
// props:
//  - member: object { id, name, role, image, socials }
//  - size: 'default' | 'small' (affects padding/typography)
const MemberCard = ({ member = {}, size = 'default' }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (e.target.closest('a')) return; // allow links inside the card
    if (!member.id) return; // fallback external contributors are not navigable
    navigate(`/members/${member.id}`);
  };

  const linkedin = normalizeUrl(member.socials?.linkedin);
  const github = normalizeUrl(member.socials?.github);

  const initials = (member.name || '').split(' ').map(s => s[0]).slice(0,2).join('');

  return (
    <div
      className={`member-card ${size === 'small' ? 'member-card--small' : ''} ${!member.id ? 'member-card--fallback' : ''}`}
      role={member.id ? 'button' : 'group'}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => { if (e.key === 'Enter') handleClick(e); }}
    >
      <div className="member-avatar-wrapper">
        {member.image ? (
          <img src={member.image} alt={member.name} className="member-avatar" />
        ) : (
          <div className="member-avatar-placeholder">{initials}</div>
        )}
      </div>

      <div className="member-info">
        <div className="member-name">{member.name || 'Unknown'}</div>
        {member.role && <div className="member-role">{member.role}</div>}
      </div>

      <div className="member-socials">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="member-link">in</a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="member-link">gh</a>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
