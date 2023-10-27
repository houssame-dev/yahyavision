import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import yahyavision from "./assets/yahyavision.png";
import "./TopBar.css";
import { SlMenu } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";
import { IoArrowRedoSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function TopBar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="xxxl" id="navbar" expanded={expanded}>
        <Container fluid>
          <Link to="/">
            <img src={yahyavision} alt="logo" className="logo" />
          </Link>
          {expanded ? (
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="toggler"
              onClick={() => setExpanded(!expanded)}
            >
              <TfiClose />
            </Navbar.Toggle>
          ) : (
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="toggler"
              onClick={() => setExpanded(!expanded)}
            >
              <SlMenu />
            </Navbar.Toggle>
          )}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="topbar-items">
              <Link to="/" className="item" onClick={handleNavItemClick}>
                <span>
                  <IoArrowRedoSharp className="arrow" />
                  HOME
                </span>
                <span className="number">1</span>
              </Link>
              <Link to="/work" className="item" onClick={handleNavItemClick}>
                <span>
                  <IoArrowRedoSharp className="arrow" />
                  WORK
                </span>
                <span className="number">2</span>
              </Link>
              <Link to="/contact" className="item" onClick={handleNavItemClick}>
                <span>
                  <IoArrowRedoSharp className="arrow" />
                  CONTACT
                </span>
                <span className="number">3</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
