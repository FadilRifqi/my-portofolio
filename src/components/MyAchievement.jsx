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
              <Col xs={4} className="mb-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
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
