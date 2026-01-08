import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiLinux,
  SiGooglecolab,
  SiJupyter,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
        <div className="tech-icons-text">Google Colab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
