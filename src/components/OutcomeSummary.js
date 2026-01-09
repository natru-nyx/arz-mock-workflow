import React from 'react';
import './OutcomeSummary.css';

const OutcomeSummary = ({ workflowData, onClose }) => {
  const getConfidenceColor = (risk) => {
    switch (risk) {
      case 'High':
        return '#ef4444';
      case 'Medium':
        return '#eab308';
      case 'Low':
        return '#22c55e';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="outcome-summary-overlay" onClick={onClose}>
      <div className="outcome-summary" onClick={(e) => e.stopPropagation()}>
        <div className="summary-header">
          <h2>Workflow Summary</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="summary-stats">
          <div className="stat-item">
            <div className="stat-label">Total Agents</div>
            <div className="stat-value">{workflowData.totalAgents}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Total Time</div>
            <div className="stat-value">{workflowData.totalTime}s</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Bottlenecks Detected</div>
            <div className="stat-value">{workflowData.bottlenecks}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Failed Handoffs</div>
            <div className="stat-value">{workflowData.failedHandoffs}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Confidence Risk</div>
            <div
              className="stat-value"
              style={{ color: getConfidenceColor(workflowData.confidenceRisk) }}
            >
              {workflowData.confidenceRisk}
            </div>
          </div>
        </div>

        <div className="summary-ctas">
          <a
            href="#integrate"
            className="cta-primary"
            onClick={(e) => {
              e.preventDefault();
              alert('Integration guide would open here');
            }}
          >
            See how this works with your agents
          </a>
          <a
            href="#schedule"
            className="cta-secondary"
            onClick={(e) => {
              e.preventDefault();
              alert('Schedule call dialog would open here');
            }}
          >
            Schedule a call
          </a>
        </div>

        <div className="summary-footer">
          <p>
            Arzule provides observability for multi-agent systems built with LangGraph, CrewAI, AutoGen, and other frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutcomeSummary;
