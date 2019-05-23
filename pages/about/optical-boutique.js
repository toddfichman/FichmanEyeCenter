import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";

import { Grid, Row, Col, Jumbotron, Image } from "react-bootstrap";

const OpticalBoutique = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Optical Boutique`}
      description={`Optical Boutique at Fichman Eye Center`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/eyeglasses-eyesight-glass-items-1627639.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Optical Boutique</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="text-section">
        <Col>
          <Image
            className="optical-img"
            src="../../static/images/oakley.jpg"
            rounded
          />
          <p className="text-section-paragraph">
            All 4 of our optical boutiques are ready to help adults and children
            find the perfect eyewear or contact lenses to suit their lifestyle.
          </p>
          <p className="text-section-paragraph">
            We have a wide variety of eyewear and sunglasses to choose from
            including designer brands such as Coach, Gucci, Prada, Oakley, D&G,
            Versace and Ray-Ban. We also carry prescription safety and sports
            eyewear. As well as, a wide variety of children's eyewear by
            Miraflex and Liberty Sports-Rec Specs.
          </p>
          <p className="text-section-paragraph">
            We also have a large selection of soft, toric and gas permeable
            contact lenses to get the beginner and even the most challenging
            contact lens patients "the perfect fit" at competitive prices.
          </p>
          <p className="text-section-paragraph">
            Our board certified opticians have been licensed with the State of
            Connecticut for over 15 years. They are available during regular
            business hours Monday - Friday and one evening a week to assist
            patients. Business hours vary at each location.
          </p>
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default OpticalBoutique;
