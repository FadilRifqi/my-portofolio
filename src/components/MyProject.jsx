import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MyProject = () => {
  return (
    <section id="Project">
      <Container className="h-100">
        <Row className="text-center">
          <h1 className="tb-3">
            <span className="color-3">My</span> Project
          </h1>
          <div className=" h-auto"></div>

          <Col className=" d-flex justify-content-center">
            <div className=""></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyProject;
