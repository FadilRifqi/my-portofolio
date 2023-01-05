import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutMe = () => {
  return (
    <section id="About" className="bg-2 pb-5">
      <Container className="h-100 bg-2">
        <Row className="bg-2 text-center">
          <Col md={4} className=" bg-2  d-flex justify-content-center py-3">
            <Container>
              <div className="border-img  mb-10">
                <img src="/image/logo.png" class="img-fluid" alt="logo" />
              </div>
            </Container>
          </Col>
          <Col md={8} className=" bg-2 ">
            <Container>
              <h1 className="tb-3-white mt-5">
                About <span className="color-3">Me</span>
              </h1>
              <div className="text-center  mt-10">
                Hanya Seorang Manusia Biasa Yang Sedang Belajar Dunia
                Perkodingan
              </div>
            </Container>
          </Col>
        </Row>
        <Row className="bg-2 text-center">
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
