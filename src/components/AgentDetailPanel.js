import React from 'react';
import './AgentDetailPanel.css';

const AgentDetailPanel = ({ agent }) => {
  const getConfidenceColor = (score) => {
    switch (score) {
      case 'High':
        return '#22c55e';
      case 'Medium':
        return '#eab308';
      case 'Low':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getStatusBadge = (status) => {
    const colors = {
      success: { bg: '#dcfce7', text: '#166534' },
      retry: { bg: '#fef9c3', text: '#854d0e' },
      warning: { bg: '#fef3c7', text: '#92400e' },
      failure: { bg: '#fee2e2', text: '#991b1b' }
    };
    const color = colors[status] || colors.success;
    return (
      <span className="status-badge" style={{ backgroundColor: color.bg, color: color.text }}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="agent-detail-panel">
      <div className="panel-header">
        <h3>{agent.name}</h3>
        {getStatusBadge(agent.status)}
      </div>

      <div className="panel-section">
        <div className="section-label">Role</div>
        <div className="section-value">{agent.role}</div>
      </div>

      <div className="panel-section">
        <div className="section-label">Latency</div>
        <div className="section-value highlight">{agent.latency}s</div>
      </div>

      {agent.retries > 0 && (
        <div className="panel-section warning">
          <div className="section-label">Retries</div>
          <div className="section-value">{agent.retries}</div>
          <div className="section-note">
            Response required retries due to missing context
          </div>
        </div>
      )}

      <div className="panel-section">
        <div className="section-label">Confidence Score</div>
        <div className="section-value">
          <span
            className="confidence-badge"
            style={{ color: getConfidenceColor(agent.confidenceScore) }}
          >
            {agent.confidenceScore}
          </span>
          {agent.confidenceScore === 'Low' && (
            <span className="flagged-indicator"> (flagged)</span>
          )}
        </div>
      </div>

      <div className="panel-section">
        <div className="section-label">Inputs</div>
        <div className="section-value">
          <ul className="value-list">
            {agent.inputs.map((input, idx) => (
              <li key={idx}>{input}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="panel-section">
        <div className="section-label">Outputs</div>
        <div className="section-value">
          <ul className="value-list">
            {agent.outputs.map((output, idx) => (
              <li key={idx}>{output}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="panel-section">
        <div className="section-label">Logs</div>
        <div className="logs-container">
          {agent.logs.map((log, idx) => (
            <div key={idx} className="log-entry">
              <code>{log}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentDetailPanel;
