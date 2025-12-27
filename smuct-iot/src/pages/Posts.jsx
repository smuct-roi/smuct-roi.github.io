import React, { useState } from 'react';
// FIX: Change .jsx to .js (Vite prefers no extension or .js for data)
import { posts } from '../data/posts'; 
import PostCard from '../components/PostCard';
import './Posts.css';

const Posts = () => {
  const [activeTab, setActiveTab] = useState('Feed');
  const [topic, setTopic] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Safety check to ensure posts is an array
  const postList = posts || [];

  const getAiIdea = async () => {
    if (!topic) return;
    setIsLoading(true);
    
    try {
      // Simulate AI Generation logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      setAiResponse(`PROPOSAL: ${topic.toUpperCase()} SYSTEM\n\nConcept: An autonomous solution utilizing IoT sensors to monitor real-time data flow.\n\nHardware: ESP32, Ultrasonic Sensors, Servo Motors.\n\nImpact: Reduces manual intervention by 40%.`);
    } catch (error) {
      setAiResponse("Failed to generate idea. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="posts-wrapper">
      <div className="posts-container">
        
        <header className="posts-header">
          <h1 className="main-title">Innovation & News</h1>
          <div className="tab-container">
            <div className="tab-box">
              <button 
                onClick={() => setActiveTab('Feed')}
                className={`tab-btn ${activeTab === 'Feed' ? 'active' : ''}`}
              >
                Recent Feed
              </button>
              <button 
                onClick={() => setActiveTab('AI')}
                className={`tab-btn ${activeTab === 'AI' ? 'active' : ''}`}
              >
                Innovation Assistant
              </button>
            </div>
          </div>
        </header>

        {activeTab === 'Feed' ? (
          <div className="posts-grid">
            {/* Added postList safety check */}
            {postList.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="ai-panel">
            <div className="ai-content">
              <h2 className="ai-title">
                <span className="dot"></span>
                Brainstorm IoT & Robotics Ideas
              </h2>
              <p className="ai-note">
                Tell our AI assistant what you're interested in and it will generate a project proposal for you.
              </p>
              <div className="input-row">
                <input 
                  type="text" 
                  className="ai-input"
                  placeholder="Enter a topic (e.g. Smart Agriculture)..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <button 
                  onClick={getAiIdea}
                  disabled={isLoading}
                  className="gen-btn"
                >
                  {isLoading ? 'Thinking...' : 'Generate'}
                </button>
              </div>
            </div>

            {aiResponse && (
              <div className="ai-result">
                <div className="response-box">
                  {/* Preserves formatting of the generated text */}
                  <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                    {aiResponse}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;