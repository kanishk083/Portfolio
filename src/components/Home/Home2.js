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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a researcher and builder <span className="purple">obsessed with Applied AI</span>.
              <br />
              While everyone else is busy "prompting," I’m diving into the core of ML and Deep Learning to understand the actual mechanics.
              <br />
              <br />I build
              <i>
                <b className="purple"> Agentic AI </b>
              </i>
              because I’m tired of tools that can’t think for themselves.
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="purple"> Python, PyTorch, and LangChain. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Deep Learning Models, Agentic Swarms </b> and
                also in areas related to{" "}
                <b className="purple">High-Energy Physics Research.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Modern Javascript Library</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
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
