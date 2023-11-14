import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../assets/about.png";
import { AiOutlineDownload } from "react-icons/ai";

import About from "../components/Home/About";
import Type from "../components/Home/Type";

const Home = () => {
  // const handleDownloadClick = () => {
  //   const downloadLink =
  //     "https://drive.google.com/file/d/1Ngzjh-JSI_X2rygmCYfI0F5PxkV1Of1C/view?usp=sharing";
  //   console.log("Hi There");
  //   window.open(downloadLink, "_blank");
  // };
  function handleClickDownload() {
    console.log("Hi");
  }

  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle />  */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Kalpit Sahu</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

          <Row
            style={{
              justifyContent: "left",
              position: "relative",
              marginLeft: "45px",
            }}
          >
            {/* <button
              style={{
                maxWidth: "250px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              variant="primary"
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </button> */}
            {/* <button onClick={() => handleClickDownload()}>Test</button> */}
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
};

export default Home;
