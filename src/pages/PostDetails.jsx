import React, { useMemo, useState } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { advisors, supervisors, developers } from '../data/members';
import './Posts.css';
import './PostDetails.css';

const findMemberByName = (name) => {
  const target = String(name || '').toLowerCase().trim();
  return [...advisors, ...supervisors, ...developers].find(m => String(m.name).toLowerCase().trim() === target);
};

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = useMemo(() => (posts || []).find(p => p.id === id), [id]);

  if (!post) return <Navigate to="/posts" replace />;

  // Carousel state for images
  const images = post.images && post.images.length ? post.images : [];
  const [index, setIndex] = useState(0);
  const current = images[index] || null;
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);
  const goTo = (i) => setIndex(i);

  // Parse content for @Name mentions, return array of nodes
  const renderContent = (text) => {
    if (!text) return <p>No extended content available.</p>;
    const parts = [];
    const mentionRegex = /@([A-Za-z]+(?:\s+[A-Za-z]+){0,3})/g;
    let lastIndex = 0;
    let match;
    while ((match = mentionRegex.exec(text)) !== null) {
      const idx = match.index;
      if (idx > lastIndex) parts.push(text.slice(lastIndex, idx));
      const name = match[1].trim();
      const member = findMemberByName(name);
      if (member) {
        parts.push(
          <button key={idx} className="mention" onClick={() => navigate(`/members/${member.id}`)}>
            @{name}
          </button>
        );
      } else {
        parts.push(`@${name}`);
      }
      lastIndex = idx + match[0].length;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return <p>{parts}</p>;
  };

  // Collect unique mentioned members for a small member-list
  const mentioned = [];
  (post.content || '').replace(/@([A-Za-z]+(?:\s+[A-Za-z]+){0,3})/g, (_, name) => {
    const m = findMemberByName(name.trim());
    if (m && !mentioned.find(x => x.id === m.id)) mentioned.push(m);
    return '';
  });

  return (
    <div className="posts-wrapper">
      <div className="posts-container">
        <header className="posts-header">
          <h1 className="main-title">{post.title}</h1>
          <div className="post-meta">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>By {post.author}</span>
          </div>
        </header>

        <div className="post-detail-grid">
          <div className="post-detail-image">
            {current ? (
              <div className="carousel">
                <button aria-label="Previous image" className="carousel-btn left" onClick={prev}>‹</button>
                <img src={current} alt={`${post.title} - ${index + 1}`} className="carousel-img" />
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

          <div className="post-detail-body">
            <div className="post-content-full">
              {renderContent(post.content)}
            </div>

            {mentioned.length > 0 && (
              <div className="mentioned-members">
                <h4>Mentioned Members</h4>
                <div className="member-list inline">
                  {mentioned.map(m => (
                    <div key={m.id} className="member-card small" role="button" tabIndex={0} onClick={() => navigate(`/members/${m.id}`)} onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/members/${m.id}`); }}>
                      <img src={m.image} alt={m.name} className="member-avatar" />
                      <div className="member-info">
                        <div className="member-name">{m.name}</div>
                        <div className="member-role">{m.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {post.source && (
              <div className="post-source">
                External source: <a href={`https://${post.source}`} target="_blank" rel="noopener noreferrer">{post.source}</a>
              </div>
            )}

            <div style={{ marginTop: 24 }}>
              <Link to="/posts" className="back">← Back to Posts</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
