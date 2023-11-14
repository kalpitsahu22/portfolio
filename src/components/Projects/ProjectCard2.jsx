import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = (props) => {
  return (
    <Card
      style={{ width: "25rem", maxHeight: "30rem" }}
      className="project-card-view"
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        style={{
          borderRadius: "10px",
          padding: "30px",
        }}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "30px" }}>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>

        <Button
          style={{ margin: "10px" }}
          variant="primary"
          icon={props.icon}
          href={props.ghLink}
          target="_blank"
        >
          Github
          <BsGithub style={{ color: "white", marginLeft: "5px" }} />
        </Button>

        <Button
          style={{ margin: "10px", color: "white" }}
          variant="primary"
          icon={props.icon}
          href={props.dmLink}
          target="_blank"
        >
          Demo
          <FiArrowUpRight
            style={{ color: "white", marginLeft: "5px" }}
          ></FiArrowUpRight>
        </Button>
      </Card.Body>
    </Card>
  );
};
export default ProjectCard;
