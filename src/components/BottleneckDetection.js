import React from 'react';
import './BottleneckDetection.css';

const BottleneckDetection = ({ agents }) => {
  const bottleneckAgent = agents.find(a => a.bottleneck);
  if (!bottleneckAgent) return null;

  const totalLatency = agents.reduce((sum, a) => sum + a.latency, 0);
  const maxLatency = Math.max(...agents.map(a => a.latency));

  return (
    <div className="bottleneck-detection">
      <div className="bottleneck-header">
        <span className="bottleneck-icon">⚠</span>
        <span className="bottleneck-message">
          Bottleneck detected: <strong>{bottleneckAgent.name}</strong> caused{' '}
          {bottleneckAgent.bottleneckPercentage}% of total workflow latency.
        </span>
      </div>

      <div className="bottleneck-comparison">
        <div className="comparison-label">Agent Latencies</div>
        <div className="comparison-bars">
          {agents.map((agent) => {
            const percentage = (agent.latency / maxLatency) * 100;
            const isBottleneck = agent.bottleneck;
            return (
              <div key={agent.id} className="comparison-item">
                <div className="comparison-agent-name">
                  {agent.name}
                  {isBottleneck && <span className="bottleneck-tag">Bottleneck</span>}
                </div>
                <div className="comparison-bar-container">
                  <div
                    className={`comparison-bar ${isBottleneck ? 'bottleneck-bar' : ''}`}
                    style={{ width: `${percentage}%` }}
                  >
                    <span className="bar-value">{agent.latency}s</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bottleneck-suggestion">
        <div className="suggestion-label">Common causes:</div>
        <div className="suggestion-text">
          insufficient context, prompt ambiguity, retrieval depth
        </div>
      </div>
    </div>
  );
};

export default BottleneckDetection;
