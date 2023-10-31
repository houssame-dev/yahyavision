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
                  </span>
                  <span>
                    <Link to="/work" className="foot">
                      MY WORK <BsArrowUpRight />
                    </Link>
                  </span>
                </Card>

                <Card className="card-2">
                  <Card.Img variant="top" src={yahya_img} className="img" />
                </Card>
              </CardGroup>
            </Col>

            <Col lg={12}>
              <CardGroup className="card-group2">
                <Card className="card-3">ABOUT ME</Card>

                <Card className="card-4">
                  Hello from the vibrant heart of Morocco! I’m YahyaVision, and
                  I’m here to bring your brand to life with stunning logos and
                  unforgettable brand identities. My passion for design is your
                  ticket to making a lasting impression on your audience. Let’s
                  embark on this creative journey together, and watch as your
                  brand’s unique story unfolds through exceptional design.
                  Welcome to YahyaVision, where your vision meets impactful
                  creativity.
                </Card>
              </CardGroup>
            </Col>

            <Col lg={12}>
              <CardGroup className="card-group3">
                <Card className="card-5">MY SERVICES</Card>

                <Card className="card-6">
                  <div className="services">
                    <Card className="service-card">
                      <span className="service-title">Logo</span>
                      <span>
                        Turning your vision into stunning logos that capture the
                        heart of your brand. We create memorable designs that
                        speak volumes and connect instantly with your audience.
                      </span>
                    </Card>
                    <Card className="service-card">
                      <span className="service-title">Brand Identity</span>
                      <span>
                        Bringing your brand to life with cohesive and charming
                        identities. Every element, from colors to visuals, is
                        carefully crafted to tell your unique story and make
                        your brand shine.
                      </span>
                    </Card>
                  </div>
                  <div className="services">
                    <Card className="service-card">
                      <span className="service-title">Poster</span>
                      <span>
                        Creating eye-catching posters to grab attention and
                        share your message loud and clear. Whether for
                        promotions or events, our designs are all about making
                        an impact with style.
                      </span>
                    </Card>
                    <Card className="service-card">
                      <span className="service-title">Social Media</span>
                      <span>
                        Designing vibrant social media content to boost your
                        brand’s online charisma. Our posts are not just pretty;
                        they’re strategic, ensuring you hit the mark with your
                        audience every time.
                      </span>
                    </Card>
                  </div>
                </Card>
              </CardGroup>
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

export default Home;
