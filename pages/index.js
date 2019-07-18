import Link from "next/link";

import Layout from "../components/Layout";
import Meta from "../components/Meta";
// import Locations from "../components/Locations";
import Slogan from "../components/Slogan";
// import Card from "../components/Card";
import Testimonials from "../components/Testimonials";
import dynamic from 'next/dynamic';

const Locations = dynamic(() => import('../components/Locations'));

import { Grid, Row, Jumbotron, Button, Col } from "react-bootstrap";

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
              <a className="button-link">Schedule An Appointment Today</a>
            </Link>
          </Button>
        </p>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="text-section">
        <Col lg={12}>
          <h1 className="text-section-header">
            Connecticut's Leading Eye Care Professionals
          </h1>
          <p className="text-section-paragraph">
            When it comes to eye care, Fichman Eye Center has a wide variety of
            CERTIFIED OPTICIANS who are specialized in enhancing your eyesight
            for strength and clarity. With four locations around Connecticut, we
            can help residents from all corners of the state with their visual
            needs and answer any questions they might have.
          </p>
          <p className="text-section-paragraph">
            We strive to provide the best quality vision with our optical
            boutiques at each facility that help you find the perfect eyewear or
            contact lenses to suit your lifestyle. With a variety of brands
            available, you can enhance your eyesight in style.
          </p>
          <p className="text-section-paragraph">
            If you want to ditch the glasses and contact lenses altogether, we
            offer innovative LASER CATARACT SURGERY, which provides an accurate
            and successful procedure for vision excellence. This technology
            utilizes an advanced laser to deliver a precise incision for safety
            and care. You will be able to enjoy your enhanced eyesight without
            ever having to rely on visual assistance again.
          </p>
          <p className="text-section-paragraph">
            Whatever your visual needs, our friendly and professional staff are
            here to help you see. Contact one of our specialists today, to see
            how Fichman Eye Center can benefit you.
          </p>
        </Col>
      </Row>
      {/* <Row className="card-row">
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
      </Row> */}

      <Row className="slogan-section">
        <Slogan />
      </Row>

      <Row className="tesimonial-container">
        <Testimonials />
      </Row>
      <div className="testimonial-button-container">
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href="https://birdeye.com/fichman-eye-center-149816264924653"
          type="submit"
          bsStyle="primary"
          className="testimonial-button"
        >
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
