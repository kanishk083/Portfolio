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
            I am a researcher and builder obsessed with <span className="purple">Applied AI.</span>
            <br />
            I don't just import models; I interrogate them to understand the actual mechanics.
            <br />
            <br />
            Apart from coding, here are the "Seeker Specs" I live by:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> The Deep Dive: Understanding the math behind the layers.
            </li>
            <li className="about-activity">
              <ImPointRight /> The Hunger: Building agents that act, not just toys.
            </li>
            <li className="about-activity">
              <ImPointRight /> The Sarcasm: Efficiency is key.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
