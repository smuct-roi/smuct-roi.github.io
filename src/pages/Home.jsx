/*
  Home.jsx — Landing page with featured posts, projects and stats
  - Includes hero, latest posts feed and featured projects sections
  - Sections: helpers, featured lists, search/filter, UI sections
*/

import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { posts } from '../data/posts';
import { projects } from '../data/projects';
import PostCard from '../components/PostCard';
import ProjectCard from '../components/ProjectCard';
import './Home.css';
import "./styles/global.css";

const Home = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // --- Helpers: content sorting utility
  // Prioritizes pinned items then sorts remaining items by date
  const sortContent = (data) => {
    const getDateValue = (item) => item.date || item.completionDate || item.expectedCompletionDate || 0;
    return [...data].sort((a, b) => {
      // If both pinned: order by pinnedSerial (ascending)
      if (a.isPinned && b.isPinned) {
        const sa = typeof a.pinnedSerial === 'number' ? a.pinnedSerial : Number.MAX_SAFE_INTEGER;
        const sb = typeof b.pinnedSerial === 'number' ? b.pinnedSerial : Number.MAX_SAFE_INTEGER;
        return sa - sb;
      }
      // One pinned, one not: pinned first
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      // Neither pinned: sort by relevant date (newest first)
      return new Date(getDateValue(b)).getTime() - new Date(getDateValue(a)).getTime();
    });
  };

  // --- Derived Data: filteredPosts (search-limited) and featuredProjects
  const filteredPosts = useMemo(() => {
    const sorted = sortContent(posts);
    return sorted
      .filter(p => 
        p.title.toLowerCase().includes(search.toLowerCase()) || 
        p.content.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 3); // Show only top 3
  }, [search]);

  const featuredProjects = useMemo(() => {
    const sorted = sortContent(projects);
    return sorted.slice(0, 3); // Show only top 3
  }, []);

  const stats = [
    { label: 'Completed Projects', value: '25+' },
    { label: 'Active Members', value: '20+' },
    { label: 'Innovation Awards', value: '1' },
    { label: 'Years of Growth', value: '02' }
  ];

  return (
    <div className="home-wrapper">
     {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="radial-overlay"></div>
          <div className="texture-overlay"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <span className="status-tag">Assalamu-Walaikum</span>
            <h1 className="hero-title">
              Engineering <span className="gradient-text">The Future</span> of Connectivity.
            </h1>
            <p className="hero-description">
              The SMUCT Robotics & IoT Community is a hub for student innovation, building smart systems and autonomous solutions for real-world challenges.
            </p>
            <div className="hero-actions">
            
            </div>
          </div>
        </div>
        
        <div className="tech-pattern">
           <svg width="400" height="400" viewBox="0 0 100 100" className="rotating-svg">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#00ff66" strokeWidth="0.5" strokeDasharray="5,5" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#00ff66" strokeWidth="0.2" />
              <rect x="25" y="25" width="50" height="50" fill="none" stroke="#00ff66" strokeWidth="0.5" />
           </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Feed Section */}
      <section className="feed-section">
        <div className="feed-container">
          <div className="feed-header">
            <div className="header-info">
              <h2 className="section-title">Community Feed</h2>
              <p className="section-subtitle">Stay updated with our latest activities.</p>
            </div>
            
            <div className="feed-actions" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <div className="search-box">
                <input 
                  type="text" 
                  placeholder="Search posts..." 
                  className="search-input"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              {/* Redirect to posts.jsx route */}
              <button onClick={() => navigate('/posts')} className="view-all-btn">
                View All Posts
              </button>
            </div>
          </div>

          <div className="posts-grid">
            {filteredPosts.map(post => (
              <div key={post.id} className={post.isPinned ? "pinned-wrapper" : ""}>
                {post.isPinned && <span className="pinned-badge">📌 </span>}
                <br></br>
                <br></br>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            <Link to="/projects" className="view-all">
              See all projects
              <svg className="small-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="projects-grid">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;