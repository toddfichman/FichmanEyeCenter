import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";

import { Grid, Row, Col, Image } from "react-bootstrap";

const DrTu = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Dr. Steve Tu, D.O.`}
      description={`All Doctors At Fichman Eye Center`}
    />


    <Grid className="doctors-main">
      <Row className="doctors-main-container">
        <Col className="doctors-main-section">
          <h1 className="doctors-main-title">Dr. Steve Tu, D.O.</h1>
          <Image
            className="doctors-main-img"
            src="../../static/images/drTu.jpg"
            rounded
          />

          <div className="doctors-main-text">
            <p>
              Dr. Tu was born and raised in the hills of New Jersey. He went to
              Rutgers University and then the University of Health Sciences in
              Kansas City, MO for medical school. His medical training involved
              traveling to several areas across the country, from Florida to
              Michigan to Pennsylvania. Dr. Tu did his ophthalmology residency
              in Dayton, Ohio. After residency, he began working with Dr.
              Fichman in 2001. He has been involved with eye surgery and laser
              eye surgery since then.
            </p>
            <p>
              Dr. Tu enjoys travel and is an avid skier. He hopes to offer
              additional services in the future, including Botox injections and
              other cosmetic procedures.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default DrTu;
