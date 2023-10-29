import React, { useEffect } from "react";
import "./Home.css";
import InfiniteLooper from "./InfiniteLooper";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import yahya_img from "./assets/yahya-img.png";
import { Link, useLocation } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div id="home">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
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
                      Hello! I'm Yahyavision. I collaborate with clients
                      globally to craft distinctive logos and unique brand
                      identities. Let's shape your vision together!
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
                    design. I invite you to explore my curated gallery, where
                    each piece whispers its own story and showcases the depth of
                    my artistic prowess. Welcome to YahyaVision, where your
                    brand's potential is realized and exceptional design meets
                    lasting impact.
                  </Card>
                </CardGroup>
              </Col>

              <Col lg={12}>
                <CardGroup className="card-group3">
                  <Card className="card-5">MY SERVICES</Card>

                  <Card className="card-6">
                    <div className="services">
                      <Card className="service-card">Logo Design</Card>
                      <Card className="service-card">Brand Identity</Card>
                    </div>
                    <div className="services">
                      <Card className="service-card">Banner</Card>
                      <Card className="service-card">Social Media Post</Card>
                    </div>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
            <Row>
              <Footer />
            </Row>
          </Container>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
