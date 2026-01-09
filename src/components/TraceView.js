import React from 'react';
import './TraceView.css';
import { traceEvents } from '../data/mockData';

const TraceView = () => {
  return (
    <div className="trace-view">
      <div className="trace-header">
        <h3>End-to-End Trace</h3>
        <p className="trace-description">
          Sequential view of workflow events and agent interactions
        </p>
      </div>

      <div className="trace-timeline">
        {traceEvents.map((event, idx) => (
          <div key={idx} className="trace-event">
            <div className="trace-time">{event.time.toFixed(1)}s</div>
            <div className="trace-content">
              <div className="trace-agent">{event.agent}</div>
              <div className="trace-event-name">{event.event}</div>
              <div className="trace-details">{event.details}</div>
            </div>
            {idx < traceEvents.length - 1 && <div className="trace-connector"></div>}
          </div>
        ))}
      </div>

      <div className="trace-footer">
        <div className="trace-note">
          <strong>Note:</strong> This is observability data. Arzule does not control agent execution.
        </div>
      </div>
    </div>
  );
};

export default TraceView;
