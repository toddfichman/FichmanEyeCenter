import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";

import { Grid, Row, Col, Jumbotron } from "react-bootstrap";

const About = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | About`}
      description={`About page for Fichman Eye Center`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/background-binoculars-black-267596.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">About Fichman Eye Center</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="text-section">
        <Col lg={12}>
          <h1 className="text-section-header">
            Your quality of vision is our number one priority
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

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default About;
