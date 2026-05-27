import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kanishk </span>
            from <span className="purple"> India.</span>
            <br />
            I'm an <span className="purple">AI Engineer</span> building intelligent systems, AI agents, and automation workflows that solve real problems.
            <br />
            My work spans the full AI stack — from LLM orchestration and agentic architectures to cloud infrastructure and deployment pipelines.
            <br />
            <br />
            Beyond engineering, here's what drives me:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> <strong>Systems Thinking</strong> — Architecting AI systems that are reliable, observable, and production-ready.
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Agentic Design</strong> — Building autonomous agents that reason, plan, and execute multi-step workflows.
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Infrastructure First</strong> — Optimizing inference, serving models locally, and owning the deployment pipeline.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best way to predict the future is to build it."{" "}
          </p>
          <footer className="blockquote-footer">Alan Kay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
