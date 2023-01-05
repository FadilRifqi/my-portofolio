import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await emailjs
        .send(
          "service_cg0qs9w",
          "template_r4a0rz1",
          {
            name: name,
            text: text,
            email: email,
          },
          "DHkREwm8J3CaK_79y"
        )
        .then(() => {
          setIsSuccess(true);
        });
      setName("");
      setEmail("");
      setText("");
      setLoading(false);
      setInterval(() => {
        setIsSuccess(null);
      }, 3000);
    } catch (error) {
      if (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };
  return (
    <section id="Contact" className="">
      <Container className="">
        <Row className="d-flex justify-content-center mb-5">
          <Col md={6}>
            <Form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="text-center">
                <Form.Label className="text-center">
                  <Form.Text className="tb-1">Contact Me</Form.Text>
                </Form.Label>
              </div>

              {isSuccess !== null && (
                <div className="text-center">
                  <br />
                  <Form.Label
                    className={`text-center width-100 border ${
                      isSuccess ? "text-success" : "text-danger"
                    }`}
                  >
                    <Form.Text>
                      {isSuccess ? "Pesan Terkirim" : "Something Went Wrong"}
                    </Form.Text>
                  </Form.Label>
                </div>
              )}
              <br />
              <Form.Label>
                <Form.Text className="">Full Name</Form.Text>
              </Form.Label>
              <Form.Control
                value={name}
                type="text"
                placeholder="John Doe"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <br />
              <Form.Label>
                <Form.Text className="">Email</Form.Text>
              </Form.Label>
              <Form.Control
                value={email}
                type="email"
                placeholder="you@exampe.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text muted>
                We'll never share your email with anyone else.
              </Form.Text>
              <br />
              <br />
              <Form.Label>
                <Form.Text className="">Message</Form.Text>
              </Form.Label>
              <Form.Control
                value={text}
                as={"textarea"}
                rows={3}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <div className="mt-3">
                <Button
                  variant="dark"
                  className="width-100 btn-dark"
                  type="submit"
                >
                  {loading ? "Loading" : "Send"}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col
            xs={6}
            className=" py-3 d-flex justify-content-center flex-row gap-4 mb-3"
          >
            <div className="tb-2 d-flex flex-row gap-1">
              <a
                href="http://github.com/FadilRifqi"
                className="text-none d-flex flex-row gap-1"
              >
                <div className="mt-0">
                  <AiFillGithub />
                </div>{" "}
              </a>
            </div>
            <div className="tb-2 d-flex flex-row gap-1">
              <a
                href="https://www.instagram.com/fadil.a.r_/"
                className="text-none d-flex flex-row gap-1"
              >
                <div className="mt-0">
                  <AiFillInstagram />
                </div>{" "}
              </a>
            </div>
            <div className="tb-2 d-flex flex-row gap-1">
              <a
                href="https://web.facebook.com/profile.php?id=100089362654515"
                className="text-none d-flex flex-row gap-1"
              >
                <div className="mt-0">
                  <AiFillFacebook />
                </div>{" "}
              </a>
            </div>
            <div className="tb-2 d-flex flex-row gap-1">
              <a
                href="http://github.com/FadilRifqi"
                className="text-none d-flex flex-row gap-1"
              >
                <div className="mt-0">
                  <AiOutlineTwitter />
                </div>{" "}
              </a>
            </div>
            <div className="tb-2 d-flex flex-row gap-1">
              <a
                href="https://www.linkedin.com/in/fadilataullah-rifqi-3274a6212/"
                className="text-none d-flex flex-row gap-1"
              >
                <div className="mt-0">
                  <AiFillLinkedin />
                </div>{" "}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
