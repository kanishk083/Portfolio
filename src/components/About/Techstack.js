import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNextdotjs,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiPandas
} from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} className="tech-icons-text" style={{ textAlign: "left" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "15px" }}>
            <strong className="purple">Languages 🐍:</strong> Python
          </li>
          <li style={{ marginBottom: "15px" }}>
            <strong className="purple">Frameworks & Libraries ⚡:</strong> PyTorch, Keras, LangChain, LangGraph, Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn
          </li>
          <li style={{ marginBottom: "15px" }}>
            <strong className="purple">Tools & DevOps 🛠️:</strong> Git, GitHub, Docker, CrewAI, Google SDK, Model Context Protocol (MCP)
          </li>
          <li style={{ marginBottom: "15px" }}>
            <strong className="purple">Hard Skills 🧠:</strong> Computer Vision (CV), Graph Neural Networks (GNNs), LLMs
          </li>
          <li style={{ marginBottom: "15px" }}>
            <strong className="purple">Areas of Interest 🔬:</strong> Autonomous Agentic Systems, Transformer Architectures, Deep Learning
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default Techstack;
