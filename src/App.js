import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import DemoIntro from './components/DemoIntro';
import WorkflowOverview from './components/WorkflowOverview';
import AgentDetailPanel from './components/AgentDetailPanel';
import BottleneckDetection from './components/BottleneckDetection';
import TraceView from './components/TraceView';
import OutcomeSummary from './components/OutcomeSummary';
import { agents, workflowData } from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'intro', 'demo'
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline' or 'trace'
  const [showSummary, setShowSummary] = useState(false);

  const handleAgentClick = (agentId) => {
    const agent = agents.find(a => a.id === agentId);
    setSelectedAgent(agent);
  };

  const handleViewToggle = (mode) => {
    setViewMode(mode);
  };

  if (currentView === 'landing') {
    return <LandingPage onStartDemo={() => setCurrentView('intro')} />;
  }

  if (currentView === 'intro') {
    return <DemoIntro onEnterDemo={() => setCurrentView('demo')} onBack={() => setCurrentView('landing')} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="logo">Arzule</h1>
          <p className="tagline">Observability for multi-agent systems</p>
        </div>
      </header>

      <main className="app-main">
        <div className="workflow-container">
          <div className="workflow-header">
            <h2>{workflowData.title}</h2>
            <div className="view-toggle">
              <button
                className={viewMode === 'timeline' ? 'active' : ''}
                onClick={() => handleViewToggle('timeline')}
              >
                Timeline
              </button>
              <button
                className={viewMode === 'trace' ? 'active' : ''}
                onClick={() => handleViewToggle('trace')}
              >
                Trace
              </button>
            </div>
          </div>

          <BottleneckDetection agents={agents} />

          <div className="workflow-content">
            <div className="workflow-left">
              {viewMode === 'timeline' ? (
                <WorkflowOverview
                  agents={agents}
                  selectedAgent={selectedAgent?.id}
                  onAgentClick={handleAgentClick}
                />
              ) : (
                <TraceView />
              )}
            </div>

            <div className="workflow-right">
              {selectedAgent ? (
                <AgentDetailPanel agent={selectedAgent} />
              ) : (
                <div className="empty-panel">
                  <p>Select an agent to view details</p>
                </div>
              )}
            </div>
          </div>

          {showSummary && (
            <OutcomeSummary
              workflowData={workflowData}
              onClose={() => setShowSummary(false)}
            />
          )}

          {!showSummary && (
            <div className="summary-trigger">
              <button onClick={() => setShowSummary(true)}>
                View Workflow Summary
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
