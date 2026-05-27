import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        paddingTop: "80px",
        marginTop: "80px",
        borderTop: "1px solid rgba(200, 137, 230, 0.2)",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        AI Systems <strong className="purple">Built</strong>
      </h1>
      <div style={{ fontSize: "20px", color: "white", paddingBottom: "5px" }}>
        AI Systems Built · Agentic Workflows Developed · AI Projects Shipped · Automation Pipelines Created
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
