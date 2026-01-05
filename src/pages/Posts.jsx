import React, { useState } from 'react';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';
import './Posts.css';

const Posts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [dateFilter, setDateFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const postList = posts || [];

  const filteredPosts = postList
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === 'All' || post.category === category;
      const matchesDate = !dateFilter || new Date(post.date) >= new Date(dateFilter);
      return matchesSearch && matchesCategory && matchesDate;
    })
    .sort((a, b) => {
      // Both pinned: order by pinnedSerial (ascending)
      if (a.isPinned && b.isPinned) {
        const sa = typeof a.pinnedSerial === 'number' ? a.pinnedSerial : Number.MAX_SAFE_INTEGER;
        const sb = typeof b.pinnedSerial === 'number' ? b.pinnedSerial : Number.MAX_SAFE_INTEGER;
        return sa - sb;
      }
      // One pinned, one not: pinned comes first
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      // Neither pinned: order by date
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="posts-wrapper">
      <div className="posts-container">

        <header className="posts-header">
          <h1 className="main-title">Innovation & News</h1>

          <div className="filter-panel">
            <div className="filter-grid">
              <div className="filter-item">
                <label>Search</label>
                <input
                  type="text"
                  placeholder="Keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="filter-item">
                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="All">All</option>
                  <option value="Community">Community</option>
                  <option value="IoT">IoT & Robotics</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="filter-item">
                <label>From Date</label>
                <input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </div>

              <div className="filter-item">
                <label>Sort</label>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>

            {(searchQuery || category !== 'All' || dateFilter) && (
              <button className="reset-btn" onClick={() => {
                setSearchQuery(''); setCategory('All'); setDateFilter('');
              }}>
                Reset All Filters
              </button>
            )}
          </div>
        </header>

        <div className="posts-grid">
          {filteredPosts.map(post => (
            <div key={post.id} className={post.isPinned ? "pinned-wrapper" : ""}>
              {post.isPinned && <span className="pinned-badge">📌</span>}
              <br></br>
              <br></br>
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="no-results">
            <p>No matches found for your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;