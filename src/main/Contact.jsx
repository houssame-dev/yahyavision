import React, { useState } from "react";
import "./Contact.css";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import logo from "./assets/yahyavision-black.png";
import {
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { SiGumroad } from "react-icons/si";
import { BsArrowUpLeft } from "react-icons/bs";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function Contact() {
  const currentYear = new Date().getFullYear();
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const authorName = "Yahyavision";
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await emailjs.send(
        "service_yk8g4sq",
        "template_ukdosqa",
        formData,
        "vYsUdrWvFVz2rdXXc"
      );

      console.log("Message sent successfully:", response);
      Swal.fire({
        position: "center",
        icon: "success",
        color: "#000000",
        title: "Message sent successfully!",
        showConfirmButton: false,
        timer: 3000,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Message sending failed:", error);
      Swal.fire("Error", "Message sending failed!", "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div id="contact">
        <Card className="contact-card">
          <Row className="top-row">
            <Col className="top">
              <Col className="top-left">
                <div>Logo and Brand Designer</div>
                <div>Portfolio {currentYear}</div>
              </Col>
              <Col className="top-mid">
                <div>
                  <img src={logo} alt="logo" className="logo" />
                </div>
              </Col>
              <Col className="top-right">
                <div>
                  <div>Available for Work</div>
                  <div>
                    {month} {currentYear}
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
          <Row className="mid-row">
            <Col className="mid">
              <div>LET'S WORK TOGETHER.</div>
              <Form onSubmit={handleSubmit} className="form">
                <div className="name-email">
                  <Form.Control
                    className="form-field"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control
                    className="form-field"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Form.Control
                  className="form-field"
                  as="textarea"
                  name="message"
                  placeholder="Your message ..."
                  value={message}
                  onChange={handleInputChange}
                  style={{ height: "130px" }}
                  required
                />
                <Button
                  variant="light"
                  type="submit"
                  className="send-btn"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </Button>
              </Form>
            </Col>
          </Row>
          <Row className="bot-row">
            <Col className="bot">
              <Col className="bot-left">
                <div>Designed by: Yahyavision</div>
                <div>
                  Developed by:{" "}
                  <a
                    href="http://houssame.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Houssame
                  </a>
                </div>
              </Col>
              <Col className="bot-mid">
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
              </Col>
              <Col className="bot-right">
                <div>
                  <div className="return">
                    <Link to="/" className="return-btn">
                      <BsArrowUpLeft className="return-icon" size={15} /> HOME
                    </Link>
                  </div>
                  <div>
                    <span>
                      &copy; {currentYear} {authorName}.
                    </span>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default Contact;
