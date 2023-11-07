import React from "react";
import "./Footer.css";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import {
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { SiGumroad } from "react-icons/si";

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
                <a
                  href="https://www.instagram.com/yahyavision/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={15} />
                </a>
                <a
                  href="https://twitter.com/yahyavision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="twitter"
                >
                  <FaXTwitter size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yahyavision-a37a12273/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={15} />
                </a>
                <a
                  href="https://www.behance.net/yahyavison"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaBehance size={15} />
                </a>
                <a
                  href="https://gumroad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGumroad size={15} />
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
