import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";

// import "../../styles/style.scss";

// import patientForm from '../forms/Fichman-Eye-Center-Patient-Information-2016.pdf'

import { Grid, Row, Col, Jumbotron, Image, ListGroup, ListGroupItem } from "react-bootstrap";

const SurgeryCenter = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Surgery Center`}
      description={`About Page for Fichman Surgery Center`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-career-clipboard-1919236.jpeg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Surgery Center</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="text-section">
        <Col>
          <Image
            className="surgery-center-img"
            src="../../static/images/surgery-center.jpeg"
            rounded
          />
          <p className="text-section-paragraph">
            The Laser Vision Surgery Center is a state-licensed, Medicare
            approved, AAAHC accredited facility. To protect the integrity of
            this surgical environment, we are unable to allow visitors to tour
            the Center. When you come to The Laser Vision Surgery Center, you
            will especially appreciate our commitment to these quality
            standards.
          </p>
          <h3 className="text-section-footer">The Laser Vision Surgery Center features the following:</h3>
          <ul className="list-group">
            <li className="list-item">&rarr; Operating Room for Quick Sight™ Cataract Removal</li>
            <li className="list-item">&rarr; Portable YAG Laser</li>
            <li className="list-item">&rarr; Three-bed Post Surgical Recovery Suite</li>
            <li className="list-item">&rarr; Closed HVAC System</li>
          </ul>
        </Col>
       
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default SurgeryCenter;
