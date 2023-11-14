import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard2 from "../components/Projects/ProjectCard2";

import project from "../assets/projects/project.jpeg";
import oasis from "../assets/projects/oasis.png";
import pizza from "../assets/projects/pizza.png";
import worldwise from "../assets/projects/worldwise.png";
import omnifood from "../assets/projects/omnifood.png";
import popcorn from "../assets/projects/popcorn.png";
import moviepedia from "../assets/projects/moviepedia.png";
import reactquiz from "../assets/projects/reactquiz.png";
import eatandsplit from "../assets/projects/eatandsplit.png";
import faraway from "../assets/projects/faraway.png";
import groco from "../assets/projects/groco.png";
import portfolio from "../assets/projects/portfolio.png";

import { CgEnter } from "react-icons/cg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          All of my Creative <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are all my projects I've worked on
        </p>
        <Row style={{ justifyContent: CgEnter, padding: "50px" }}>
          <Col md={4} className="project-card sm">
            <ProjectCard2
              imgPath={oasis}
              title="The Wild Pursuit "
              description="Created a cabin management platform that utilizes React and Styled Components for the frontend, and Supabase for the backend."
              ghLink="https://github.com/kalpitsahu22/the_wild_pursuit"
              dmLink="https://the-wild-pursuit.vercel.app/"
            />
          </Col>

          <Col md={{ span: 4, offset: 4 }} className="project-card">
            <ProjectCard2
              imgPath={pizza}
              title="The Pizza Kitchen"
              description="Developed a pizza booking application with React Router for seamless navigation and Tailwind CSS for user interface."
              dmLink="https://reactpizzacompany.netlify.app/"
              ghLink="https://github.com/kalpitsahu22/pizza-kitchen"
            />
          </Col>

          <Col md={4} className="project-card sm">
            <ProjectCard2
              imgPath={worldwise}
              title="WorldWise"
              description="A comprehensive city and place navigation project offering real-time information for destinations around the globe."
              dmLink="https://world-wise-final.vercel.app/"
              ghLink="https://github.com/kalpitsahu22/world_wise"
            />
          </Col>

          <Col md={{ span: 4, offset: 4 }} className="project-card sm">
            <ProjectCard2
              imgPath={portfolio}
              title="Portfolio"
              description="Develop a personal portfolio website to showcase all my projects and skills in React and some of the packages."
              dmLink=""
              ghLink="https://github.com/kalpitsahu22/portfolio"
            />
          </Col>

          <Col md={4} className="project-card sm">
            <ProjectCard2
              imgPath={popcorn}
              title="PopCorn Time"
              description="Develop a React application that retrieves movie data from an API and allows users to rate the movies they've seen."
              dmLink="https://github.com/kalpitsahu22/usepopcorn"
              ghLink="https://splendid-beignet-2a54a9.netlify.app/"
            />
          </Col>

          <Col md={{ span: 4, offset: 4 }} className="project-card">
            <ProjectCard2
              imgPath={moviepedia}
              title="MoviePedia"
              description="Created a React application that functions as a replica of IMDb, featuring reviews and in-depth information of all movies."
              dmLink="https://moviepediaaa.netlify.app/"
              ghLink="https://github.com/kalpitsahu22/moviepedia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={reactquiz}
              title="React Quiz"
              description="Create an interactive React quiz application using useReducer hooks for dynamic state management and enhancing user engagement."
              dmLink="https://reactquizzzzapp.netlify.app/"
              ghLink="https://github.com/kalpitsahu22/reactquiz"
            />
          </Col>

          <Col md={{ span: 4, offset: 4 }} className="project-card">
            <ProjectCard2
              imgPath={omnifood}
              title="Omnifood"
              description="Utilized advanced CSS features like CSS grids and flexbox with a sticky navigation element for improved user navigation and experience."
              dmLink="https://omnifood-food-ordering.netlify.app/"
              ghLink="https://github.com/kalpitsahu22/Omnifood--Food-Ordering-Webiste/tree/main/Omnifood-Final"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={eatandsplit}
              title="Eat and Split"
              description="A dynamic React app for splitting bills based on custom scenarios, simplifying the process of sharing expenses among friends or groups."
              dmLink="https://splitwize.netlify.app//"
              ghLink="https://github.com/kalpitsahu22/eat_n_split"
            />
          </Col>

          <Col md={{ span: 4, offset: 4 }} className="project-card sm">
            <ProjectCard2
              imgPath={faraway}
              title="Far Away"
              description=" A memorable React quiz designed to ensure you never forget essential items for a picnic or outing, enhancing your outdoor experience."
              ghLink="https:https://github.com/kalpitsahu22/far-away"
              dmLink="https://faraway-checklist.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
