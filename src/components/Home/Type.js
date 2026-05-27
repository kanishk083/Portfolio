import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Agent Architect",
          "Agentic Workflow Engineer",
          "LLM Systems Builder",
          "Multi-Agent AI Developer",
          "Automation Pipeline Engineer",
          "AI Infrastructure Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
