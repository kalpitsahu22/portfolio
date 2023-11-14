import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiCss3 } from "react-icons/di";
import {
  // SiMaterialui,

  SiRedux,
  SiHtml5,
  SiCplusplus,
  SiReactquery,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h4>HTML</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h4>CSS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>Javascript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h4>Redux</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReactquery />
        <h4>React Query</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <h4>C++</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h4>Tailwind</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <h4>Bootstrap</h4>
      </Col>
    </Row>
  );
};

export default Techstack;
