import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} className="tech-icons-text" style={{ textAlign: "left" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "15px" }}>
            <strong className="purple">AI & Machine Learning:</strong> LLMs · AI Agents · Agentic Workflows · Multi-Agent Systems · LangChain · LangGraph · RAG Pipelines · Prompt Engineering · Function Calling · AI Automation · OpenAI APIs · Anthropic APIs · Claude Code · OpenAI Codex · MCP Servers · Vector Databases · Embeddings · Fine-Tuning · Local LLMs · AI Orchestration · Context Engineering · AI Tool Calling · AI SDKs · Inference Optimization · AI Evaluation Pipelines · Structured Outputs · Semantic Search · AI Workflow Automation · AI-Powered Developer Tools · AI Infrastructure · LLMOps · AI System Design · Autonomous Agents · Conversational AI · Generative AI · Transformer Models · Prompt Chaining · Computer Vision · OpenCV · YOLO · Object Detection
          </li>
          <li style={{ marginBottom: "15px" }}>
            <strong className="purple">Backend Engineering:</strong> Python · FastAPI · Node.js · REST APIs · API Integrations · Webhooks · Async Programming · Authentication Systems
          </li>
          <li style={{ marginBottom: "15px" }}>
            <strong className="purple">Frontend Engineering:</strong> React · Next.js · Tailwind CSS · TypeScript · Responsive UI Development
          </li>
          <li style={{ marginBottom: "15px" }}>
            <strong className="purple">Cloud & DevOps:</strong> AWS EC2 · Linux · Ubuntu · Docker · GitHub Actions · Deployment Pipelines · Cloud Infrastructure · Server Management
          </li>
          <li style={{ marginBottom: "15px" }}>
            <strong className="purple">AI Developer Ecosystem:</strong> Cursor · VS Code AI Tooling · GitHub Copilot · Claude · OpenRouter · Ollama · Local AI Setups · WSL · AI Coding Workflows
          </li>
          <li style={{ marginBottom: "15px" }}>
            <strong className="purple">Areas of Focus:</strong> Autonomous Agentic Systems · LLM Infrastructure · AI Automation Pipelines · Multi-Agent Architectures · AI Developer Tooling · Production AI Systems
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default Techstack;
