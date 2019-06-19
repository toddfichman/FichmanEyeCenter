import Link from "next/link";

import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Locations from "../components/Locations";
import Slogan from "../components/Slogan";
import Card from "../components/Card";
import Testimonials from "../components/Testimonials";

import { Grid, Row, Jumbotron, Button } from "react-bootstrap";

const Home = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Home`}
      description={`Home page for Fichman Eye Center`}
    />
    <Jumbotron
      className="jumbo"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/fichman-doctors.jpeg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      {" "}
      <div className="jumbotron-container">
        <h1 className="jumbotron-header">Welcome to Fichman Eye Center</h1>
        <p>
          <Button
            role="button"
            className="jumbotron-btn"
            bsSize="large"
            bsStyle="primary"
          >
            <Link href="/contact">
              <a className="button-link">Schedule Your Appointment Today</a>
            </Link>
          </Button>
        </p>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="card-row">
        <Card
          header={"About"}
          content={
            "Donec non elit massa. Cras at neque in lectus euismod rutrum quis et odio. Suspendisse id iaculis nisi. Curabitur egestas nibh odio, non efficitur risus efficitur quis. Sed nec justo ut nunc blandit tempus vel ut tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut dapibus velit. Proin scelerisque eu ligula sit amet efficitur. Nam accumsan elementum elit, ultricies efficitur ante venenatis at."
          }
          buttonText={"About"}
          link={"/about"}
        />
        <Card
          header={"Resources"}
          content={
            "Donec non elit massa. Cras at neque in lectus euismod rutrum quis et odio. Suspendisse id iaculis nisi. Curabitur egestas nibh odio, non efficitur risus efficitur quis. Sed nec justo ut nunc blandit tempus vel ut tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut dapibus velit. Proin scelerisque eu ligula sit amet efficitur. Nam accumsan elementum elit, ultricies efficitur ante venenatis at."
          }
          buttonText={"Resources"}
          link={"/resources/patient-education"}
        />
        <Card
          header={"Testimonials"}
          content={
            "Donec non elit massa. Cras at neque in lectus euismod rutrum quis et odio. Suspendisse id iaculis nisi. Curabitur egestas nibh odio, non efficitur risus efficitur quis. Sed nec justo ut nunc blandit tempus vel ut tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut dapibus velit. Proin scelerisque eu ligula sit amet efficitur. Nam accumsan elementum elit, ultricies efficitur ante venenatis at."
          }
          buttonText={"Testimonials"}
          link={"/about/testimonials"}
        />
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>

      <Row className="tesimonial-container">
        <Testimonials />
      </Row>
      <div className="testimonial-button-container">
        <Button type="submit" bsStyle="primary" className="testimonial-button">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://birdeye.com/fichman-eye-center-149816264924653"
            className="testimonial-button-link"
          >
            Read More Testimonials
          </a>
        </Button>
      </div>

      <Row className="map-container">
        <Locations />
      </Row>
    </Grid>
  </Layout>
);

export default Home;
