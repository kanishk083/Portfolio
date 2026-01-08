import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <p style={{ fontSize: "1.2em", paddingBottom: "20px" }}>
        <strong className="purple">398</strong> contributions in the last year
      </p>
      <GitHubCalendar
        username="kanishk083"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
