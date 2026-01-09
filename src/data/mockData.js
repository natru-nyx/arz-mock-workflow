// Mock data for Arzule observability workflow

export const workflowData = {
  title: "Multi-Agent Workflow: Research Task",
  totalTime: 9.6,
  totalAgents: 5,
  bottlenecks: 1,
  failedHandoffs: 0,
  confidenceRisk: "Medium",
  userQuery: "What are the latest developments in quantum computing and their potential applications in cryptography?"
};

export const agents = [
  {
    id: "planner",
    name: "Planner Agent",
    role: "Breaks down complex queries into sub-tasks",
    latency: 1.2,
    status: "success",
    retries: 0,
    confidenceScore: "High",
    inputs: ["User query"],
    outputs: ["3 sub-tasks"],
    position: { x: 20, y: 200 },
    logs: [
      "2024-01-15 10:23:45 | Received query: quantum computing developments",
      "2024-01-15 10:23:45 | Analyzing query complexity...",
      "2024-01-15 10:23:46 | Generated 3 sub-tasks: [quantum advances, crypto applications, recent papers]",
      "2024-01-15 10:23:46 | Handing off to Research Agent"
    ]
  },
  {
    id: "research",
    name: "Research Agent",
    role: "Retrieves relevant documents",
    latency: 4.8,
    status: "retry",
    retries: 2,
    confidenceScore: "Low",
    inputs: ["Query from Planner Agent"],
    outputs: ["12 documents"],
    position: { x: 180, y: 200 },
    logs: [
      "2024-01-15 10:23:46 | Received task: research quantum computing developments",
      "2024-01-15 10:23:47 | Querying knowledge base...",
      "2024-01-15 10:23:48 | Initial retrieval returned 5 documents (insufficient)",
      "2024-01-15 10:23:49 | Retry #1: Expanded search parameters",
      "2024-01-15 10:23:50 | Retry #2: Added context from recent papers",
      "2024-01-15 10:23:51 | Retrieved 12 documents (sufficient coverage)",
      "2024-01-15 10:23:51 | Response required retries due to missing context"
    ],
    bottleneck: true,
    bottleneckPercentage: 63
  },
  {
    id: "retrieval",
    name: "Retrieval Agent",
    role: "Fetches detailed content from sources",
    latency: 1.8,
    status: "success",
    retries: 0,
    confidenceScore: "High",
    inputs: ["Document IDs from Research Agent"],
    outputs: ["Full text content"],
    position: { x: 340, y: 200 },
    logs: [
      "2024-01-15 10:23:51 | Received 12 document IDs",
      "2024-01-15 10:23:52 | Fetching content from sources...",
      "2024-01-15 10:23:53 | Retrieved full text for all documents",
      "2024-01-15 10:23:53 | Handing off to Synthesis Agent"
    ]
  },
  {
    id: "synthesis",
    name: "Synthesis Agent",
    role: "Combines information into coherent response",
    latency: 1.5,
    status: "success",
    retries: 0,
    confidenceScore: "Medium",
    inputs: ["Content from Retrieval Agent"],
    outputs: ["Synthesized response"],
    position: { x: 500, y: 200 },
    logs: [
      "2024-01-15 10:23:53 | Waiting for content...",
      "2024-01-15 10:23:53 | Received content from Retrieval Agent",
      "2024-01-15 10:23:54 | Synthesizing information...",
      "2024-01-15 10:23:55 | Generated coherent response",
      "2024-01-15 10:23:55 | Handing off to Validator Agent"
    ]
  },
  {
    id: "validator",
    name: "Critic / Validator Agent",
    role: "Validates response quality and accuracy",
    latency: 0.3,
    status: "warning",
    retries: 0,
    confidenceScore: "Medium",
    inputs: ["Response from Synthesis Agent"],
    outputs: ["Validated response"],
    position: { x: 660, y: 200 },
    logs: [
      "2024-01-15 10:23:55 | Received synthesized response",
      "2024-01-15 10:23:55 | Validating accuracy and completeness...",
      "2024-01-15 10:23:55 | Flagged low confidence: some claims need verification",
      "2024-01-15 10:23:55 | Response approved with medium confidence"
    ]
  }
];

export const handoffs = [
  { from: "planner", to: "research", time: 0.1 },
  { from: "research", to: "retrieval", time: 0.1 },
  { from: "retrieval", to: "synthesis", time: 0.1 },
  { from: "synthesis", to: "validator", time: 0.1 }
];

export const traceEvents = [
  { time: 0.0, agent: "User", event: "Query submitted", details: workflowData.userQuery },
  { time: 0.1, agent: "Planner Agent", event: "Task breakdown", details: "Generated 3 sub-tasks" },
  { time: 1.3, agent: "Research Agent", event: "Initial retrieval", details: "5 documents found" },
  { time: 2.5, agent: "Research Agent", event: "Retry #1", details: "Expanded search parameters" },
  { time: 3.7, agent: "Research Agent", event: "Retry #2", details: "Added context, 12 documents retrieved" },
  { time: 6.1, agent: "Retrieval Agent", event: "Content fetched", details: "Full text retrieved" },
  { time: 7.9, agent: "Synthesis Agent", event: "Response synthesized", details: "Coherent response generated" },
  { time: 9.4, agent: "Validator Agent", event: "Validation complete", details: "Medium confidence, approved" },
  { time: 9.6, agent: "System", event: "Workflow complete", details: "Response delivered to user" }
];
