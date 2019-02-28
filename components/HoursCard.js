import React from 'react';

import { Col, Panel } from 'react-bootstrap'

export default function HoursCard(props) {
  return (
    <Col xs={12} md={6}>
          <Panel>
            <Panel.Heading>
              <Panel.Title className="card-header">
                {props.office} Office
              </Panel.Title>
              <Panel.Title className="card-header-secondary">
                Phone: {props.phone}
              </Panel.Title>
            </Panel.Heading>
            <div className="contact-hours-wrapper">
              <Panel.Body >
                <div className="contact-hours-header">Hours</div>
                
                <div className="contact-hours-info">
                  <span className="contact-hours-date">Monday</span>
                  <span className="contact-hours-time">{props.monday}</span>
                </div>
                <div className="contact-hours-info">
                  <span className="contact-hours-date">Tuesday</span>
                  <span className="contact-hours-time">{props.tuesday}</span>
                </div>
                <div className="contact-hours-info">
                  <span className="contact-hours-date">Wednesday</span>
                  <span className="contact-hours-time">{props.wednesday}</span>
                </div>
                <div className="contact-hours-info">
                  <span className="contact-hours-date">Thursday</span>
                  <span className="contact-hours-time">{props.thursday}</span>
                </div>
                <div className="contact-hours-info">
                  <span className="contact-hours-date">Friday</span>
                  <span className="contact-hours-time">{props.friday}</span>
                </div>
                <div className="contact-hours-info">
                  <span className="contact-hours-date">Saturday</span>
                  <span className="contact-hours-time">Closed</span>
                </div>
                <div className="contact-hours-info">
                  <span className="contact-hours-date">Sunday</span>
                  <span className="contact-hours-time">Closed</span>
                </div>
              </Panel.Body>
            </div>
          </Panel>
        </Col>
  )
}
