import React from "react";
import "./Footer.css";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import {
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const authorName = "Yahyavision";
  return (
    <div id="footer">
      <Row>
        <Col lg={12}>
          <CardGroup className="card-group4">
            <Card className="card-7">
              <div className="social-media">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="twitter"
                >
                  <FaXTwitter />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaBehance />
                </a>
              </div>
            </Card>

            <Card className="card-8">
              &copy; {currentYear} {authorName}.
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
}
