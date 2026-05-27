import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  if (props.featured) {
    return (
      <div className="featured-project-card">
        <div className="featured-project-left">
          {props.category && <span className="project-category-tag">{props.category}</span>}
          {props.statusBadge && <span className="project-status-badge">{props.statusBadge}</span>}
          <h2 className="featured-project-title">{props.title}</h2>
          <p className="featured-project-one-liner">{props.oneLiner}</p>
          <p className="featured-project-desc">{props.description}</p>
          {props.collabNote && <p className="featured-collab-note">{props.collabNote}</p>}
          {props.impactStat && <p className="card-impact-stat">{props.impactStat}</p>}
          <div className="featured-tech-pills">
            {props.techPills.map((pill, i) => (
              <span key={i} className="tech-pill">{pill}</span>
            ))}
          </div>
          <div className="featured-actions">
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> GitHub
            </Button>
          </div>
        </div>
        <div className="featured-project-right">
          <div className="featured-highlights">
            <div className="featured-highlight-item">
              <span className="highlight-icon">🧠</span>
              <span>Lighting-invariant skin tone detection</span>
            </div>
            <div className="featured-highlight-item">
              <span className="highlight-icon">👗</span>
              <span>Real-time Buy/Pass clothing scanner</span>
            </div>
            <div className="featured-highlight-item">
              <span className="highlight-icon">🤖</span>
              <span>AI Stylist chat — Llama 3.3 70B</span>
            </div>
            <div className="featured-highlight-item">
              <span className="highlight-icon">🔐</span>
              <span>Server-side JWT proxy — tokens never exposed</span>
            </div>
            <div className="featured-highlight-item">
              <span className="highlight-icon">💳</span>
              <span>Stripe subscriptions + referral system</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card className="project-card-view">
      <div className="card-badges">
        {props.category && <span className="project-category-tag">{props.category}</span>}
        {props.statusBadge && <span className="project-status-badge">{props.statusBadge}</span>}
      </div>
      <Card.Body>
        <div className="card-front">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="card-one-liner">
            {props.oneLiner}
          </Card.Text>
          {props.impactStat && <p className="card-impact-stat">{props.impactStat}</p>}
          <div className="card-tech-pills">
            {props.techPills.map((pill, i) => (
              <span key={i} className="tech-pill">{pill}</span>
            ))}
          </div>
        </div>
        <div className="card-hover-content">
          <Card.Text className="card-description">
            {props.description}
          </Card.Text>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> GitHub
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
