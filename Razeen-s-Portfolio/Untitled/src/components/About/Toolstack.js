import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLaravel } from 'react-icons/si';
import { FaAws  } from 'react-icons/fa';
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiFirebase,
  SiVercel,

  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Toolstack;
