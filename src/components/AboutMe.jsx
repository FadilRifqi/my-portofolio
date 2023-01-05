import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutMe = () => {
  return (
    <section id="About" className="bg-2 pb-5">
      <Container className="h-100 bg-2">
        <Row className="bg-2 text-center">
          <div className="bg-2 h-auto">
            <h1 className="tb-3-white mt-5">
              About <span className="color-3">Me</span>
            </h1>
          </div>
          <Col md={6} className=" pt-5 bg-2  ">
            <div className="text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                mollitia saepe. Saepe aperiam sapiente vel iusto, odio quae
                maxime veniam libero laborum, sint necessitatibus molestias, at
                blanditiis corrupti. Commodi, maiores.
              </p>
            </div>
          </Col>
          <Col md={6} className=" pt-5 bg-2 ">
            <div className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              consequatur neque accusamus quis, dolores, quos quae delectus
              corrupti eum mollitia iusto numquam ipsum accusantium optio
              deserunt facere nihil tenetur aperiam!
            </div>
          </Col>
        </Row>
        <Row className="bg-2 text-center">
          <Col>
            <div className="border-img">
              <img src="/image/logo.png" class="img-fluid" alt="logo" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
