import React, { Component } from "react";
import Link from "next/link";

import { Row, Col } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-basic-centered">
        <h3 className="footer-company-motto">Fichman Eye Center</h3>

        <div className="footer-links">
          <Row className="footer-top">
            <Col xs={12} md={3}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </Col>
            <Col xs={12} md={3}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </Col>
            <Col xs={12} md={3}>
              <Link href="/resources/patient-education">
                <a>Resources</a>
              </Link>
            </Col>
            <Col xs={12} md={3}>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </Col>
          </Row>
        </div>

        <p className="footer-company-name">
          Copyright ©2018. Fichman Eye Center. All Rights Reserved.
        </p>
      </footer>
    );
  }
}
