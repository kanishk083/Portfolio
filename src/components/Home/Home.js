import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import profilePhoto from "../../Assets/KANISHK.jpeg";
import pdf from "../../Assets/Kanishk_Wagh_Resume_Final.pdf";
import { QRCodeCanvas } from "qrcode.react";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontFamily: "'Inter', sans-serif", fontWeight: 400 }} className="heading">
                Hey There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "2.8em", marginBottom: "20px" }} className="heading-name">
                I'M
                <strong className="main-name"> KANISHK</strong>
              </h1>
              <h1 style={{ fontSize: "1.2em", paddingTop: 10, marginTop: "20px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }} className="heading-name">
                <strong className="purple">AI Engineer Building Intelligent AI Systems & Automation Workflows</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", marginTop: "16px" }}>
                <Type />
              </div>
              <div style={{ paddingLeft: 50, paddingTop: 20 }}>
                <QRCodeCanvas value={window.location.origin + pdf} size={150} fgColor="#cd5ff8" bgColor="#ffffff" />
                <p style={{ paddingTop: 10, color: "white", fontSize: "0.8em" }}>Scan to Download Resume</p>
                <div style={{ paddingTop: 20, display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                  <a href="https://github.com/kanishk083" target="_blank" rel="noreferrer">
                    <Button variant="primary" style={{ padding: "10px 20px", whiteSpace: "nowrap" }}>View Projects</Button>
                  </a>
                  <a href={pdf} target="_blank" rel="noreferrer">
                    <Button variant="primary" style={{ padding: "10px 20px", whiteSpace: "nowrap" }}>Download Resume</Button>
                  </a>
                  <a href="mailto:kanishkwagh69@gmail.com" target="_blank" rel="noreferrer">
                    <Button variant="primary" style={{ padding: "10px 20px", whiteSpace: "nowrap" }}>Contact Me</Button>
                  </a>
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #cd5ff8",
                boxShadow: "0 0 30px rgba(205, 95, 248, 0.4)",
              }}>
                <img
                  src={profilePhoto}
                  alt="Kanishk"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Connect</h1>
            <p>
              Interested in AI engineering, automation systems, or collaboration? Let's <span className="purple">connect</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kanishk083"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/kanishk9Ai"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kanishk-wagh-937156365/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kanishkwagh69@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
