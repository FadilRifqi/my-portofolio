import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Achievement from "../api/Achievement";

const MyAchievement = () => {
  return (
    <section id="Achievement" className="bg-2">
      <Container className="h-100 bg-2">
        <h1 className="tb-3">
          My <span className="color-3">Achievement</span>
        </h1>
        <Row className="bg-2 ">
          {Achievement.map((achievement, i) => {
            return (
              <Col md={4} className="mb-2 d-flex justify-content-center">
                <Card style={{ width: "18rem" }} text={"dark"}>
                  <Card.Img
                    variant="top"
                    src="/image/pp.jpg"
                    style={{
                      height: "14em",
                      width: "100%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default MyAchievement;
