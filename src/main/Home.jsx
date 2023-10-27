import React, { useEffect } from "react";
import "./Home.css";
import InfiniteLooper from "./InfiniteLooper";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import yahya_img from "./assets/yahya-img.png";
import { Link, useLocation } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { Footer } from "./Footer";

function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div id="home">
        <InfiniteLooper speed="25" direction="left">
          <div className="contentBlock contentBlock--one">
            HI, IT'S YAHYAVISION
          </div>
          <div className="contentBlock contentBlock--one">
            HI, IT'S YAHYAVISION
          </div>
        </InfiniteLooper>
        <Container fluid>
          <Row>
            <Col lg={12}>
              <CardGroup className="card-group1">
                <Card className="card-1">
                  <span>
                    Hello! I'm Yahyavision. I collaborate with clients globally
                    to craft distinctive logos and unique brand identities.
                    Let's shape your vision together!
                  </span>
                  <span>
                    <Link to="/work" className="foot">
                      Dig into my work <BsArrowUpRight />
                    </Link>
                  </span>
                </Card>

                <Card className="card-2">
                  <Card.Img variant="top" src={yahya_img} className="img" />
                </Card>
              </CardGroup>
            </Col>
            <hr className="hr" />
            <Col lg={12}>
              <CardGroup className="card-group2">
                <Card className="card-3">ABOUT ME</Card>

                <Card className="card-4">
                  Greetings from the vibrant heart of Morocco! Passion for
                  design flows through my veins – from crafting unique logos to
                  comprehensive branding, visionary creative direction, and the
                  intricate artistry of every piece I create. Dive deep into my
                  curated Gallery and let my work whisper stories to you. If any
                  piece resonates or you're inspired with a fresh concept, don't
                  hesitate to Contact me. Let's start this creative adventure
                  together!
                </Card>
              </CardGroup>
            </Col>
            <hr className="hr" />
            <Col lg={12}>
              <CardGroup className="card-group3">
                <Card className="card-5">MY SERVICES</Card>

                <Card className="card-6">
                  <div className="services">
                    <Card className="service-card">1</Card>
                    <Card className="service-card">2</Card>
                  </div>
                  <div className="services">
                    <Card className="service-card">3</Card>
                    <Card className="service-card">4</Card>
                  </div>
                </Card>
              </CardGroup>
            </Col>
            <hr className="hr" />
            <Footer />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
