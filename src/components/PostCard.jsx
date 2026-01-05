/*
  PostCard.jsx — List item representing a single post
  - Renders cover image, meta, excerpt and read more action
  - Sections: category helpers, click navigation, markup
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostCard.css';

// --- Category constants for post badges
const PostCategory = {
  INNOVATION: 'Innovation',
  COMMUNITY: 'Community',
  NEWS: 'News'
};

// --- PostCard component: presentational; handles display and click navigation
const PostCard = ({ post }) => {
  const getCategoryClass = (cat) => {
    switch (cat) {
      case PostCategory.INNOVATION: return 'cat-innovation';
      case PostCategory.COMMUNITY: return 'cat-community';
      case PostCategory.NEWS: return 'cat-news';
      default: return 'cat-default';
    }
  };

  const mainImage = (post.images && post.images.length > 0) ? post.images[0] : (post.image || '/postimages/default.png');

  // Clicking the card navigates to the internal post details page; the external source (if any) is available as a small link
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (e.target.closest('a') || e.target.closest('button')) return;
    navigate(`/posts/${post.id}`);
  };

  return (
    <div className="post-card-link" role="button" tabIndex={0} onClick={handleClick} onKeyDown={(e) => { if (e.key === 'Enter') handleClick(e); }}>
      <div className="post-card group">
        <div className="post-image-container">
          <img 
            src={mainImage} 
            alt={post.title} 
            className="post-image"
          />
          {post.images && post.images.length > 1 && (
            <div className="image-count">+{post.images.length - 1}</div>
          )}
          <div className="post-badge-pos">
            <span className={`post-badge ${getCategoryClass(post.category)}`}>
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="post-content">
          <div className="post-meta">
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            
            <span>By {post.author}</span>
          </div>
          
          <h3 className="post-title">
            {post.title}
          </h3>
          
          <p className="post-excerpt">
            {post.content}
          </p>
          
          {post.source && (
            <div className="post-source">
              Source: <span className="source-italic">{post.source}</span>
            </div>
          )}
          
          <div className="read-more-btn">
            Read More 
            <svg className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;