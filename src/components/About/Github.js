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
      <div style={{ fontSize: "20px", color: "white", paddingBottom: "20px" }}>
        433 contributions in the last year
      </div>
      <GitHubCalendar
        username="kanishk083"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={20}
        showTotalCount={false}
      />
    </Row>
  );
}

export default Github;
