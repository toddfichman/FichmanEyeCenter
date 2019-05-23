import React from "react";

import { Col } from "react-bootstrap";

export default function VideoPLayer(props) {
  return (
    <React.Fragment>
      <h3 className="video-title">{props.location}</h3>
      <Col className="iframe-container" xs={12}>
        <iframe allowFullScreen frameBorder="0" height="400" src={props.src}>
          <div
            target="_blank"
            rel="noopener noreferrer"
            className="visible-link"
          >
            {props.src}
          </div>
        </iframe>
      </Col>
    </React.Fragment>
  );
}
