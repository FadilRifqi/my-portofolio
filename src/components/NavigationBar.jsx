import React, { useEffect, useState } from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { AiFillHome, AiFillTrophy } from "react-icons/ai";
import { MdContactPage } from "react-icons/md";
import { BsFillFileEarmarkCodeFill, BsFillBookFill } from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(null);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className={`navbar-top ${!show && "hidden"} trans`}
    >
      <Container className={`${!show && "hidden"} trans`}>
        <Navbar.Brand className={`navbar-text logo`}>
          <img src="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="mx-10"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`${!show && "hidden"} trans`}
        >
          <Nav
            className={`navbar-center d-flex justify-content-center me-auto  `}
          >
            <Nav.Link
              href="#home"
              onClick={() => {
                setIsActive(2);
              }}
              className={`navbar-text ${isActive === 2 && "active"}`}
            >
              <div className="d-flex gap-1">
                <div className="mt-0">
                  <AiFillHome />
                </div>
                HOME
              </div>
            </Nav.Link>
            <Nav.Link
              href="#About"
              onClick={() => {
                setIsActive(3);
              }}
              className={`navbar-text ${isActive === 3 && "active"}`}
            >
              <div className="d-flex gap-1">
                <div className="mt-0">
                  <MdContactPage />{" "}
                </div>
                ABOUT
              </div>
            </Nav.Link>

            <Nav.Link
              href="#Project"
              onClick={() => {
                setIsActive(4);
              }}
              className={`navbar-text ${isActive === 4 && "active"}`}
            >
              <div className="d-flex gap-1">
                <div className="mt-0">
                  <BsFillFileEarmarkCodeFill />
                </div>
                PROJECTS
              </div>
            </Nav.Link>
            <Nav.Link
              href="#Achievement"
              onClick={() => {
                setIsActive(5);
              }}
              className={`navbar-text ${isActive === 5 && "active"}`}
            >
              <div className="d-flex gap-1">
                <div className="mt-0">
                  <AiFillTrophy />
                </div>
                ACHIEVEMENT
              </div>
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              onClick={() => {
                setIsActive(6);
              }}
              className={`navbar-text ${isActive === 6 && "active"}`}
            >
              <RiContactsBook2Fill /> CONTACT
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setIsActive(7);
              }}
              className={`navbar-text ${isActive === 7 && "active"}`}
            >
              <BsFillBookFill /> BLOG
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
