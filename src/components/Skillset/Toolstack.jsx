import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiNetlify,
  SiWordpress,
  SiSupabase,
  SiVercel,
  SiSanity,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>VS Code</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase />
        <h4>Supabase</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSanity />
        <h4>Sanity</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h4>Vercel</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h4>Netlify</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
        <h4>Wordpress</h4>
      </Col>
    </Row>
  );
};

export default Toolstack;
