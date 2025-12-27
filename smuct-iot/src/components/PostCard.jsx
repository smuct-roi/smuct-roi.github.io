import React from 'react';
import './PostCard.css';

// Internal constants to replace external types
const PostCategory = {
  INNOVATION: 'Innovation',
  COMMUNITY: 'Community',
  NEWS: 'News'
};

const PostCard = ({ post }) => {
  const getCategoryClass = (cat) => {
    switch (cat) {
      case PostCategory.INNOVATION: return 'cat-innovation';
      case PostCategory.COMMUNITY: return 'cat-community';
      case PostCategory.NEWS: return 'cat-news';
      default: return 'cat-default';
    }
  };

  return (
    <div className="post-card group">
      <div className="post-image-container">
        <img 
          src={post.image} 
          alt={post.title} 
          className="post-image"
        />
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
        
        <button className="read-more-btn">
          Read More 
          <svg className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PostCard;