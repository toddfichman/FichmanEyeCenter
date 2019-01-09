import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      // <footer className="footer">
      //   <Row className="footer-top">
      //     <Col xs={12} md={6} lg={3}>
      //       Home
      //     </Col>
      //     <Col xs={12} md={6} lg={3}>
      //       About
      //     </Col>
      //     <Col xs={12} md={6} lg={3}>
      //       Patient Information
      //     </Col>
      //     <Col xs={12} md={6} lg={3}>
      //       Contact
      //     </Col>

      //   </Row>

      //   <Row className="footer-bottom">
      //     <p>
      //     Copyright ©2018. Fichman Eye Center. All Rights Reserved.
      //     </p>
      //   </Row>
      // </footer>

      <footer class="footer-basic-centered">

			<p class="footer-company-motto">Fichman Eye Center</p>

			<p class="footer-links">
        <Row className="footer-top">
           <Col xs={12}  md={3}>
             Home
           </Col>
           <Col xs={12}  md={3}>
             About
           </Col>
           <Col xs={12}  md={3}>
             Patient Information
           </Col>
           <Col xs={12}  md={3}>
             Contact
           </Col>
        </Row>
			</p>

			<p class="footer-company-name">Copyright ©2018. Fichman Eye Center. All Rights Reserved.</p>

		</footer>
    )
  }
}
