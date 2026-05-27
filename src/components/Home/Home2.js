import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              I'm an AI Engineer focused on building intelligent systems, AI agents, and scalable automation workflows. My work combines <span className="purple">LLM engineering, backend systems, AI infrastructure, and full-stack development</span> to create practical AI-powered applications.
              <br />
              <br />
              I actively work with <i><b className="purple">agentic workflows, retrieval systems, AI coding tools, local model infrastructure, and automation pipelines</b></i> to build efficient and scalable AI systems.
              <br />
              <br />
              My expertise spans <i><b className="purple">multi-agent architectures, LLMOps, RAG pipelines, prompt engineering, function calling, and AI orchestration</b></i> — designing systems that don't just respond, but reason and act.
              <br />
              <br />
              From deploying <i><b className="purple">LLM inference pipelines</b></i> to architecting <i><b className="purple">autonomous agent networks</b></i>, I build the infrastructure that powers modern AI applications.
              <br />
              <br />
              I also build full-stack AI products with <i><b className="purple">React, Next.js, FastAPI, TypeScript, and Tailwind CSS</b></i> — bridging the gap between AI capabilities and real-world user interfaces.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
