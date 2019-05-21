import React from "react";

import { Col } from "react-bootstrap";

export default function VideoPLayer(props) {
  return (
    <React.Fragment>
      <h3 className="video-title">{props.location}</h3>
      <Col className="iframe-container" xs={12}>
        <iframe
          allowFullScreen
          frameBorder="0"
          // width="1425"
          height="400"
          src={props.src}
        >
          <a
            href={props.src}
            target="_blank"
            rel="noopener noreferrer"
            className="visible-link"
          >
            {props.src}
          </a>
        </iframe>
      </Col>
    </React.Fragment>
  );
}
