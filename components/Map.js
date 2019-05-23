import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Col } from "react-bootstrap";

class GoogleMap extends Component {
  render() {
    return (
      <Col xs={12} md={6}>
        <div className="map-col">
          <a
            href={`http://maps.google.com/?q=${this.props.mapSearch}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Click on address for directions"
          >
            <div className="map-address">
              <strong>{this.props.name} Office</strong>

              <p className="map-address-subtext">
                <span className="map-address-top-line">
                  {this.props.street}
                </span>
                <br />
                {this.props.town}
                <br />
                <span className="map-address-bottom-line">
                  {this.props.phone}
                </span>
              </p>
            </div>
          </a>

          <Map
            google={window.google}
            initialCenter={{
              lat: this.props.lat,
              lng: this.props.lng
            }}
            zoom={15}
            className="map-item"
            onClick={() =>
              window.open(
                `http://maps.google.com/?q=${this.props.mapSearch}`,
                "_blank"
              )
            }
          >
            <Marker
              title={this.props.title}
              name={this.props.name}
              position={{ lat: this.props.lat, lng: this.props.lng }}
              onClick={() =>
                window.open(
                  `http://maps.google.com/?q=${this.props.mapSearch}`,
                  "_blank"
                )
              }
            />
          </Map>
        </div>
      </Col>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDuscURNM3rl5VvAmdcW3VpHjCyUlpAqAw"
})(GoogleMap);
