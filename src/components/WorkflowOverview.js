import React from 'react';
import './WorkflowOverview.css';
import { handoffs } from '../data/mockData';

const WorkflowOverview = ({ agents, selectedAgent, onAgentClick }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return '#22c55e';
      case 'retry':
        return '#eab308';
      case 'warning':
        return '#f59e0b';
      case 'failure':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getHandoffPath = (from, to) => {
    const fromAgent = agents.find(a => a.id === from);
    const toAgent = agents.find(a => a.id === to);
    if (!fromAgent || !toAgent) return null;

    const startX = fromAgent.position.x + 80;
    const startY = fromAgent.position.y + 40;
    const endX = toAgent.position.x;
    const endY = toAgent.position.y + 40;

    return `M ${startX} ${startY} L ${endX} ${endY}`;
  };

  return (
    <div className="workflow-overview">
      <div className="timeline-container">
        <svg width="100%" height="300" viewBox="0 0 900 300" preserveAspectRatio="xMidYMid meet" className="timeline-svg">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#52525b" />
            </marker>
          </defs>

          {/* Draw handoff arrows */}
          {handoffs.map((handoff, idx) => {
            const path = getHandoffPath(handoff.from, handoff.to);
            if (!path) return null;
            return (
              <path
                key={idx}
                d={path}
                stroke="#52525b"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                opacity="0.6"
              />
            );
          })}

          {/* Draw agent nodes */}
          {agents.map((agent) => (
            <g key={agent.id}>
              <circle
                cx={agent.position.x + 40}
                cy={agent.position.y + 40}
                r="35"
                fill={getStatusColor(agent.status)}
                stroke={selectedAgent === agent.id ? '#fafafa' : 'rgba(255,255,255,0.15)'}
                strokeWidth={selectedAgent === agent.id ? '3' : '2'}
                className="agent-node"
                onClick={() => onAgentClick(agent.id)}
                style={{ cursor: 'pointer' }}
                opacity={agent.status === 'retry' ? '0.85' : '1'}
              />
              <text
                x={agent.position.x + 40}
                y={agent.position.y + 45}
                textAnchor="middle"
                fill="#ffffff"
                fontSize="11"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
                pointerEvents="none"
              >
                {agent.name.split(' ')[0]}
              </text>
            </g>
          ))}
        </svg>

        {/* Agent labels and timing */}
        <div className="agent-labels">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className={`agent-label ${selectedAgent === agent.id ? 'selected' : ''}`}
              style={{ left: `${agent.position.x}px` }}
              onClick={() => onAgentClick(agent.id)}
            >
              <div className="agent-label-name">{agent.name}</div>
              <div className="agent-label-time">{agent.latency}s</div>
              {agent.retries > 0 && (
                <div className="agent-label-retries">{agent.retries} retries</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="timeline-legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#22c55e' }}></div>
          <span>Success</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#eab308' }}></div>
          <span>Retry / Delay</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#f59e0b' }}></div>
          <span>Warning</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#ef4444' }}></div>
          <span>Failure</span>
        </div>
      </div>
    </div>
  );
};

export default WorkflowOverview;
