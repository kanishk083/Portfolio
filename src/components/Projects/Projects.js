import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const filterTabs = ["All", "Full-Stack AI", "Computer Vision", "Machine Learning", "AI Agent"];

const projectData = [
  {
    id: 1,
    category: "Full-Stack AI",
    statusBadge: "🤝 Collab",
    title: "Lumiqe — AI Color Analysis & Personal Styling Platform",
    oneLiner: "CV-powered platform that analyzes skin tone and builds a personalized color palette, wardrobe guide, and outfit recommendations.",
    description: "Production-grade AI styling platform with a 9-step computer vision pipeline (BiSeNet, MediaPipe, Delta-E CIE2000) for lighting-invariant skin tone classification across 12 color seasons. Features real-time in-store clothing scanner with Buy/Pass verdict, AI Stylist chat powered by Llama 3.3 70B, Stripe billing, wardrobe management, price alerts, and referral system — wrapped in a secure full-stack architecture with server-side JWT proxying.",
    impactStat: "9-step CV pipeline · 12 color seasons · < 2s analysis",
    techPills: ["Next.js", "FastAPI", "PyTorch", "OpenCV", "Groq LLM"],
    ghLink: "https://github.com/DineshDhanoki/lumiqe",
    collabNote: "Built in collaboration with Dinesh Dhanoki",
    featured: true,
  },
  {
    id: 2,
    category: "Computer Vision",
    statusBadge: "✅ Shipped",
    title: "Real-Time Drone Detection System",
    oneLiner: "Live drone detection using deep learning and real-time image processing.",
    description: "Real-time computer vision system for drone detection using YOLO-based object detection and AI-powered image processing pipelines optimized for live inference at 30fps.",
    impactStat: "Real-time detection · 30fps live inference",
    techPills: ["Python", "OpenCV", "YOLO", "Deep Learning", "Real-Time AI"],
    ghLink: "https://github.com/kanishk083/DRONE-DETECTION",
    featured: false,
  },
  {
    id: 3,
    category: "Machine Learning",
    statusBadge: "✅ Shipped",
    title: "ML Practical Tracking Platform",
    oneLiner: "End-to-end ML pipeline for intelligent tracking and predictive analytics.",
    description: "Built machine learning pipelines for intelligent tracking, predictive modeling, and data-driven decision systems with structured model evaluation and analytics workflows.",
    impactStat: "End-to-end ML pipeline · Predictive analytics",
    techPills: ["Python", "Machine Learning", "Analytics", "Predictive Modeling", "Data Pipelines"],
    ghLink: "https://github.com/kanishk083/TrackML-",
    featured: false,
  },
  {
    id: 4,
    category: "AI Agent",
    statusBadge: "✅ Shipped",
    title: "AI Competitor Intelligence Agent",
    oneLiner: "Autonomous agent that researches competitors and generates strategic intelligence reports.",
    description: "Autonomous AI agent that analyzes competitor businesses, extracts strategic insights, and produces structured intelligence reports using LLM workflows and multi-step automation pipelines.",
    impactStat: "Autonomous research · Multi-step LLM workflows",
    techPills: ["Python", "LangChain", "OpenAI API", "AI Agents", "Automation"],
    ghLink: "https://github.com/kanishk083/competitor_analyzer_agent",
    featured: false,
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projectData.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter;
  });

  const featuredProject = projectData.find((p) => p.featured);
  const gridProjects = filtered.filter((p) => !p.featured);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          AI Systems, agents, and automation pipelines I've built.
        </p>

        <div className="filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${activeFilter === tab ? "filter-tab-active" : ""}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {featuredProject && (activeFilter === "All" || activeFilter === featuredProject.category) && (
          <div className="featured-project-wrapper">
            <ProjectCard
              key={featuredProject.id}
              featured
              category={featuredProject.category}
              statusBadge={featuredProject.statusBadge}
              title={featuredProject.title}
              oneLiner={featuredProject.oneLiner}
              description={featuredProject.description}
              impactStat={featuredProject.impactStat}
              techPills={featuredProject.techPills}
              ghLink={featuredProject.ghLink}
              collabNote={featuredProject.collabNote}
            />
          </div>
        )}

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {gridProjects.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                category={project.category}
                statusBadge={project.statusBadge}
                title={project.title}
                oneLiner={project.oneLiner}
                description={project.description}
                impactStat={project.impactStat}
                techPills={project.techPills}
                ghLink={project.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
