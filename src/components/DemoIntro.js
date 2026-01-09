import React from 'react';
import './DemoIntro.css';

const DemoIntro = ({ onEnterDemo, onBack }) => {
  return (
    <div className="demo-intro">
      <div className="demo-intro-grid-bg"></div>
      
      <header className="demo-intro-header">
        <button className="back-button" onClick={onBack}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </header>

      <main className="demo-intro-main">
        <div className="demo-intro-content">
          <div className="intro-badge">Interactive Demo</div>
          
          <h1 className="intro-title">See Arzule in Action</h1>
          
          <p className="intro-description">
            You're about to explore a real workflow trace from a multi-agent research assistant. 
            This demo shows how Arzule helps you understand agent collaboration and identify issues.
          </p>

          <div className="intro-scenario">
            <h3 className="scenario-label">Demo Scenario</h3>
            <div className="scenario-card">
              <div className="scenario-header">
                <span className="scenario-icon">🔬</span>
                <span className="scenario-title">Multi-Agent Research Task</span>
              </div>
              <p className="scenario-description">
                A user asked: "What are the latest developments in quantum computing?" — 
                Watch how 5 agents collaborate to research, retrieve, synthesize, and validate the response.
              </p>
            </div>
          </div>

          <div className="intro-features">
            <h3 className="features-label">What you'll see</h3>
            <div className="features-grid">
              <div className="feature-card">
                <span className="feature-icon">📊</span>
                <span className="feature-text">Agent timeline & dependencies</span>
              </div>
              <div className="feature-card">
                <span className="feature-icon">⚠️</span>
                <span className="feature-text">Bottleneck detection</span>
              </div>
              <div className="feature-card">
                <span className="feature-icon">🔍</span>
                <span className="feature-text">Detailed agent logs</span>
              </div>
              <div className="feature-card">
                <span className="feature-icon">🔄</span>
                <span className="feature-text">Retry & failure tracking</span>
              </div>
            </div>
          </div>

          <div className="intro-cta">
            <button className="enter-demo-button" onClick={onEnterDemo}>
              Enter Demo
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="intro-note">
            💡 Tip: Click on any agent node or card to view detailed information
          </p>
        </div>
      </main>
    </div>
  );
};

export default DemoIntro;
