import React, { useEffect } from "react";
import "./Inferenced.css";
import { Link, useLocation } from "react-router-dom";
import img1 from "./images/inferenced.png";
import img2 from "./images/inferenced-id.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Footer } from "../Footer";
import TopBar from "../TopBar";

function Inferenced() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <TopBar />

      <div id="inferenced">
        <Container fluid>
          <Row className="inferenced-row">
            <Col lg={12}>
              <h1>Inferenced</h1>
            </Col>
            <Col lg={12}>
              <p>
                Looking for something alike? Feel free to hit the contact button
                below!
              </p>
            </Col>
            <Col lg={12}>
              <div className="info">
                <div className="i-1">
                  <li>Client</li>
                  <li>Contribution</li>
                  <li>Duration</li>
                  <li>Year</li>
                </div>
                <div className="i-2">
                  <li>Inferenced</li>
                  <li>Branding</li>
                  <li>1 month</li>
                  <li>2023</li>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <Link to="/contact" className="btn" type="button">
                Contact
              </Link>
            </Col>

            <Col lg={12}>
              <div className="img-div">
                <Card className="card">
                  <Card.Img src={img1} alt="img1" />
                </Card>
              </div>
              <div className="img-div">
                <Card className="card">
                  <Card.Img src={img2} alt="img2" />
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Inferenced;
