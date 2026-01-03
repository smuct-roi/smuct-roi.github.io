import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { projects } from '../data/projects';
import PostCard from '../components/PostCard';
import ProjectCard from '../components/ProjectCard';
import './Home.css';
import "./styles/global.css";


const Home = () => {
  const [search, setSearch] = useState('');

  const filteredPosts = useMemo(() => {
    return posts
      .filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || 
                   p.content.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, [search]);

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
            <span className="status-tag">Initializing Community v2.0...</span>
            <h1 className="hero-title">
              Engineering <span className="gradient-text">The Future</span> of Connectivity.
            </h1>
            <p className="hero-description">
              The SMUCT Robotics & IoT Committee is a hub for student innovation, building smart systems and autonomous solutions for real-world challenges.
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
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search posts..." 
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="posts-grid">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
            {filteredPosts.length === 0 && (
              <div className="no-results">No posts found matching your search.</div>
            )}
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
            {projects.slice(0, 3).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;