import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Project from "../api/Project";

const MyProject = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section id="Project">
      <Container className="h-100">
        <Row className="text-center">
          <h1 className="tb-3">
            <span className="color-3">My</span> Project
          </h1>
          <div className=" h-auto"></div>

          <Col className="carousel-box d-block">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {Project.map((project, i) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/image/pp.jpg"
                      alt="First slide"
                      style={{ width: "100%" }}
                    />
                    <Carousel.Caption>
                      <div className="d-block">
                        <h3>{project.name}</h3>
                      </div>
                      <p>{project.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyProject;
