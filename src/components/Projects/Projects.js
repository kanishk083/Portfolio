import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import chanakya from "../../Assets/Projects/chanakya.png";
import drone from "../../Assets/Projects/drone.png";
import track from "../../Assets/Projects/track.png";
import competitor from "../../Assets/Projects/competitor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drone}
              isBlog={false}
              title="Drone Detection"
              description="A system designed to detect and track drones in restricted airspace, ensuring security and safety. It utilizes advanced algorithms to identify drone signatures and trajectory."
              ghLink="https://github.com/kanishk083/DRONE-DETECTION.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chanakya}
              isBlog={false}
              title="Chanakya Systems"
              description="An orchestration of autonomous agents designed to handle the complex, messy operations of MSMEs. It uses a Swarm intelligence approach—no central bottleneck, just agents collaborating to solve real-world business friction."
              ghLink="https://chanakya.systems/"
              demoLink="https://chanakya.systems/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={track}
              isBlog={false}
              title="TrackML"
              description="A comprehensive project focused on tracking machine learning experiments and model performance. It provides insights into model behavior and helps optimization."
              ghLink="https://github.com/kanishk083/TrackML-.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="The Deep Research Agent"
              description="A recursive, autonomous researcher that digs through the noise to find the core truth. It doesn't just summarize; it interrogates web data and synthesizes reports with a depth that would make a PhD student sweat."
              ghLink="https://github.com/kanishk083/DEEP-RESEARCH-AGENT.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={competitor}
              isBlog={false}
              title="The Competitor Analyzer"
              description="An autonomous agent that scrapes, maps, and analyzes competitors in real-time. It identifies market gaps and strategy shifts by connecting the dots across the web—turning messy competitive landscapes into a clean, actionable map."
              ghLink="https://github.com/kanishk083/competitor_analyzer_agent.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
