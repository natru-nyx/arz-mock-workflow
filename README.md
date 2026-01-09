# Arzule Mock Workflow

A lightweight, developer-focused mock workflow demonstration for Arzule, an observability tool for multi-agent systems.

## Overview

This mock demonstrates how Arzule helps teams:
- Understand how multiple AI agents collaborate on a task
- Visualize agent-to-agent handoffs and dependencies
- Identify bottlenecks, failures, retries, and inefficiencies
- Improve multi-agent workflows through observability

**Note:** This is a read-only observability layer, not an agent builder or execution engine.

## Features

- **Workflow Overview**: Visual timeline/graph showing agent interactions
- **Agent Details**: Click any agent to see detailed information, logs, and metrics
- **Bottleneck Detection**: Automatic identification of performance issues
- **Trace View**: Sequential view of workflow events
- **Outcome Summary**: Complete workflow statistics and CTAs

## Getting Started

### Prerequisites

- Node.js 14+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
arzule-mock/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AgentDetailPanel.js      # Agent detail view
│   │   ├── BottleneckDetection.js   # Bottleneck alerts
│   │   ├── OutcomeSummary.js        # Workflow summary modal
│   │   ├── TraceView.js             # Sequential trace view
│   │   └── WorkflowOverview.js      # Main timeline/graph
│   ├── data/
│   │   └── mockData.js              # Mock agent and workflow data
│   ├── App.js                       # Main application component
│   ├── App.css                      # Application styles
│   ├── index.js                     # Entry point
│   └── index.css                    # Global styles
├── package.json
└── README.md
```

## Mock Scenario

The demo shows a **Multi-Agent Research Assistant** workflow with 5 agents:

1. **Planner Agent** - Breaks down complex queries into sub-tasks
2. **Research Agent** - Retrieves relevant documents (bottleneck detected)
3. **Retrieval Agent** - Fetches detailed content from sources
4. **Synthesis Agent** - Combines information into coherent response
5. **Validator Agent** - Validates response quality and accuracy

## Usage

1. **View Timeline**: See the agent workflow with color-coded status indicators
2. **Select Agent**: Click any agent node or label to view detailed information
3. **Switch Views**: Toggle between Timeline and Trace views
4. **View Summary**: Click "View Workflow Summary" to see complete statistics

## Design Principles

- **Minimal UI**: Clean, developer-first interface
- **Neutral Colors**: Grays with subtle status accents
- **Observability Focus**: Read-only data visualization
- **No Orchestration**: This tool observes, it doesn't control

## Technologies

- React 18
- CSS3 (no external UI libraries)
- SVG for workflow visualization

## License

This is a mock/demo project for demonstration purposes.
