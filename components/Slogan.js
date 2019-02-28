import React from "react";

import { Col } from 'react-bootstrap';

export default function Slogan() {
  return (
    <React.Fragment>
      <Col lg={12}>
        <h1 className="text-section-header">Fichman Eye Center</h1>
      </Col>
      <Col lg={12}>
        <div className="text-section-subtext">
          You can clearly see the difference
        </div>
      </Col>
    </React.Fragment>
  );
}
