import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css"; // Import styles
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Ngoding</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam esse suscipit autem expedita deleniti nulla!
            </p>
            <div className="no mb-2">
              <span className="hov">
                <Link className="text-decoration-none text-dark">
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <span className="span"> +62 123 456 789</span>
                </Link>
              </span>
            </div>
            <div className="email">
              <span className="hov">
                <Link className="text-decoration-none text-dark">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="span"> example@gmail.com</span>
                </Link>
              </span>
            </div>
          </Col>
          <Col className="menu col-lg-2 col mt-5 mt-lg-0">
            <h5 className="fw-bold">menu</h5>
            <div className="d-flex flex-column  ">
              <Link to="">home</Link>
              <Link to="kelas">kelas</Link>
              <Link to="testimonial">testimonial</Link>
              <Link to="faq">Faq</Link>
              <Link to="syaratketen">syarat & ketentuan</Link>
            </div>
          </Col>
          <Col lg="4" className="mt-5 mt-lg-0">
            <h5 className="fw-bold mb-3">subscribe untuk info menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="subscribe" />
              <button className="btn btn-danger rounded-sm">
                subscribe
              </button>
            </div>
            <div className="social mt-3">
              <i>
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </i>
              <i>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </i>
              <i>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </i>
              <i>
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </i>
            </div>
          </Col>
        </Row>
        <Row className="copy">
          <Col>
          <p className="text-center px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Sandi nofri</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
