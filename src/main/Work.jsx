import React, { useEffect } from "react";
import "./Work.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { RiEyeFill } from "react-icons/ri";
import { WorkData } from "./WorkData";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

function Work() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div id="work">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <Container fluid>
            <Row className="work-row">
              {WorkData.map((imageUrl, index) => (
                <Col
                  key={index}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={2}
                  className="px-2 py-2"
                >
                  {index === 0 ? (
                    <div className="container">
                      <Image
                        src={imageUrl}
                        alt={`Image ${index}`}
                        fluid
                        className="work-image-clicked"
                      />
                      <div
                        className="overlay"
                        style={{ backgroundColor: "#141414" }}
                      >
                        <div className="inside">
                          <Link
                            to="/inferenced"
                            className="link"
                            style={{
                              backgroundColor: "white",
                              color: "#141414",
                            }}
                          >
                            <RiEyeFill /> View
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : index === 1 ? (
                    <div className="container">
                      <Image
                        src={imageUrl}
                        alt={`Image ${index}`}
                        fluid
                        className="work-image-clicked"
                      />
                      <div
                        className="overlay"
                        style={{ backgroundColor: "#f2d557" }}
                      >
                        <div className="inside">
                          <Link
                            to="/sando"
                            className="link"
                            style={{
                              backgroundColor: "black",
                              color: "#f2d557",
                            }}
                          >
                            <RiEyeFill /> View
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : index === 2 ? (
                    <div className="container">
                      <Image
                        src={imageUrl}
                        alt={`Image ${index}`}
                        fluid
                        className="work-image-clicked"
                      />
                      <div
                        className="overlay"
                        style={{ backgroundColor: "#CCC5B9" }}
                      >
                        <div className="inside">
                          <Link
                            to="/zero"
                            className="link"
                            style={{
                              backgroundColor: "black",
                              color: "#CCC5B9",
                            }}
                          >
                            <RiEyeFill /> View
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={imageUrl}
                      alt={`Image ${index}`}
                      fluid
                      className="work-image"
                    />
                  )}
                </Col>
              ))}
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

export default Work;
