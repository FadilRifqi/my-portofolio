import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MyProfile = () => {
  return (
    <section id="home">
      <Container className="h-100">
        <Row className="mt-3">
          <Col md={8} className="h-auto d-flex justify-content-center ">
            <div className="text-box">
              <p>
                HELLO <br />
                <br />
                <h1 className="color-2 text-bold">
                  I'm <span className="color-3">Muhammad</span> Fadil{" "}
                  <span className="color-3">Ataullah</span> Rifqi
                </h1>
                <p>
                  First semester Informatic Engineering college student of ITERA
                  that have interest in Website Development
                </p>
              </p>
            </div>
          </Col>
          <Col md={4} className=" h-80 box-img"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyProfile;
