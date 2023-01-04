import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MyProject = () => {
  return (
    <section id="Project">
      <Container className="h-100">
        <Row className="">
          <div className=" h-auto">
            <h1 className="tb-3 mt-5">My Project</h1>
          </div>

          <Col className=" mt-5 d-flex justify-content-center">
            <div className=""></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyProject;
