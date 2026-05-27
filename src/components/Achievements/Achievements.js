import React, { useEffect, useState, useCallback, useRef } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import hackvisionImg from "../../Assets/HACHVISION.jpeg";
import gdgImg from "../../Assets/GDG MUM.jpeg";

const achievements = [
  {
    id: 2,
    badge: "Thematic Challenge Winner — Google Developer Group (GDG) Mumbai",
    badgeColor: "#c770f0",
    event: "Google Developer Group (GDG) Mumbai Hackathon",
    headline: "Won the Thematic Challenge at Google Developer Group (GDG) Mumbai Hackathon",
    description: "Won the Thematic Challenge at Google Developer Group (GDG) Mumbai Hackathon by collaborating with a high-performance team to design and ship an intelligent AI-powered system — recognized by judges for technical innovation, system architecture quality, and real-world impact potential within the challenge theme.",
    highlights: [
      { icon: "🏆", text: "Thematic Challenge Winner" },
      { icon: "🏙️", text: "Google Developer Group Mumbai" },
      { icon: "🤝", text: "Team Collaboration" },
      { icon: "🔧", text: "AI Systems" },
    ],
    tags: ["AI Systems", "Thematic Challenge", "Innovation", "Full-Stack AI", "Google Developer Group"],
    image: gdgImg,
    linkedin: "https://www.linkedin.com/posts/kanishk-wagh-937156365_hackathonwinner-ai-agenticai-ugcPost-7422597462202388481-bcTp/",
  },
  {
    id: 1,
    badge: "3rd Place — HackVision",
    badgeColor: "#cd7f32",
    event: "HackVision Hackathon",
    headline: "Secured 3rd Place at HackVision with an Agentic AI System",
    description: "Competed in HackVision Hackathon and secured 3rd place by engineering an agentic AI system from scratch — combining LLM workflows, automation pipelines, and intelligent decision-making. Delivered a fully working prototype under extreme time pressure, recognized for technical depth and real-world applicability.",
    highlights: [
      { icon: "🤖", text: "Agentic AI System" },
      { icon: "⚡", text: "Built Under Time Pressure" },
      { icon: "🥉", text: "3rd Place Finish" },
      { icon: "🧠", text: "LLM Workflows" },
    ],
    tags: ["AI Engineering", "Agentic AI", "Automation", "LLM Systems", "Rapid Prototyping"],
    image: hackvisionImg,
    linkedin: "https://www.linkedin.com/posts/kanishk-wagh-937156365_hackathonwinner-ai-agenticai-ugcPost-7422597462202388481-bcTp/",
  },
];

function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isHovering) return;
    const total = achievements.length;
    let cycle = 0;
    const slide = () => {
      for (let s = 0; s < total; s++) {
        const target = (cycle * total + s) % total;
        setTimeout(() => {
          setCurrentIndex(target);
        }, s * 5000);
      }
      cycle++;
    };
    slide();
    intervalRef.current = setInterval(slide, total * 5000);
    return () => clearInterval(intervalRef.current);
  }, [isVisible, isHovering]);

  const goTo = useCallback((index) => {
    const total = achievements.length;
    setCurrentIndex(((index % total) + total) % total);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <Container fluid className="achievements-section" ref={sectionRef}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Achievements</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "40px" }}>
          Hackathon wins and competitive achievements
        </p>
        <div className="achievements-carousel-frame"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="achievements-carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {achievements.map((ach) => (
              <div key={ach.id} className="achievement-card">
                <div className="achievement-card-image">
                  <img src={ach.image} alt={ach.event} />
                </div>
                <div className="achievement-card-body">
                  <div
                    className="achievement-badge"
                    style={{ color: ach.badgeColor, borderColor: ach.badgeColor }}
                  >
                    {ach.badge}
                  </div>
                  <div className="achievement-event">{ach.event}</div>
                  <div className="achievement-headline">{ach.headline}</div>
                  <div className="achievement-description">{ach.description}</div>
                  <div className="achievement-highlights">
                    {ach.highlights.map((h, i) => (
                      <span key={i} className="achievement-highlight-pill">
                        {h.icon} {h.text}
                      </span>
                    ))}
                  </div>
                  <div className="achievement-tags">
                    {ach.tags.map((tag, i) => (
                      <span key={i} className="achievement-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={ach.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="achievement-cta"
                  >
                    View LinkedIn Post →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev}>
            ‹
          </button>
          <button className="carousel-arrow carousel-arrow-right" onClick={handleNext}>
            ›
          </button>
          <div className="carousel-dots">
            {achievements.map((_, i) => (
              <span
                key={i}
                className={`carousel-dot ${i === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Achievements;
