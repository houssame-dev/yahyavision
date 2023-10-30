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
                  Hello from the heart of vibrant Morocco! I'm a graphic
                  designer who goes by the name YahyaVision, a moniker that
                  perfectly encapsulates my unique ability to craft compelling
                  brand identities and memorable logos. With a keen eye for
                  detail and an unwavering commitment to my vision, I have the
                  power to transform brands, ensuring they leave a lasting
                  impact on their audience. My passion for design runs deep,
                  fueling my creativity as I work on a wide array of
                  projects—from creating distinctive logos and developing
                  comprehensive branding strategies, to offering visionary
                  creative direction and mastering the fine art of graphic
                  design. I invite you to explore my curated gallery, where each
                  piece whispers its own story and showcases the depth of my
                  artistic prowess. Welcome to YahyaVision, where your brand's
                  potential is realized and exceptional design meets lasting
                  impact.
                </Card>
              </CardGroup>
            </Col>

            <Col lg={12}>
              <CardGroup className="card-group3">
                <Card className="card-5">MY SERVICES</Card>

                <Card className="card-6">
                  <div className="services">
                    <Card className="service-card">
                      <span>Logo</span>
                      <span>
                        Turning your vision into stunning logos that capture the
                        heart of your brand. We create memorable designs that
                        speak volumes and connect instantly with your audience.
                      </span>
                    </Card>
                    <Card className="service-card">
                      <span>Brand Identity</span>
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
                      <span>Poster</span>
                      <span>
                        Creating eye-catching posters to grab attention and
                        share your message loud and clear. Whether for
                        promotions or events, our designs are all about making
                        an impact with style.
                      </span>
                    </Card>
                    <Card className="service-card">
                      <span>Social Media</span>
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
