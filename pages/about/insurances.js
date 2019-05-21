import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";

// import "../../styles/style.scss";

// import patientForm from '../forms/Fichman-Eye-Center-Patient-Information-2016.pdf'

import {
  Grid,
  Row,
  Col,
  Jumbotron,
  Image,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

const Insurances = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Insurances We Accept`}
      description={`Insurances We Accept`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-career-clipboard-1919236.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Insurances We Accept</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="text-section">
        <Col md={6}>
          <ul className="list-group">
            <li className="list-item">&rarr; AARP</li>
            <li className="list-item">&rarr; AARP MEDICARE HMO</li>
            <li className="list-item">&rarr; AETNA</li>
            <li className="list-item">&rarr; AETNA MEDICARE HMO</li>
            <li className="list-item">&rarr; B/C MEDIBLUE</li>
            <li className="list-item">&rarr; BC/BS (ANTHEM)</li>
            <li className="list-item">&rarr; CIGNA</li>
            <li className="list-item">&rarr; CONNECTICARE</li>
            <li className="list-item">&rarr; CONNECTICARE MEDICARE HMO</li>
            <li className="list-item">&rarr; DAVIS</li>
            <li className="list-item">&rarr; EYE BENEFITS</li>
            <li className="list-item">&rarr; EYEMED</li>
            <li className="list-item">&rarr; GUARDIAN</li>
            <li className="list-item">&rarr; HEALTH CT PPO</li>
            <li className="list-item">&rarr; HMCPPO</li>
          </ul>
        </Col>
        <Col md={6}>
          <ul className="list-group">
          <li className="list-item">&rarr; MEDICAID / T19 / HUSKY</li>
            <li className="list-item">&rarr; MEDICARE</li>
            <li className="list-item">&rarr; MULTIPLAN</li>
            <li className="list-item">&rarr; NORTHEAST HEALTH DIR</li>
            <li className="list-item">&rarr; OXFORD</li>
            <li className="list-item">&rarr; PHCS</li>
            <li className="list-item">&rarr; PREMIER EYECARE</li>
            <li className="list-item">&rarr; SUPERIOR</li>
            <li className="list-item">&rarr; TRICARE</li>
            <li className="list-item">&rarr; UNITED HEALTHCARE - (MEDICAL ONLY NO ROUTINE VISION EXAMS)</li>
            <li className="list-item">&rarr; UNITED HEALTHCARE MEDICARE HMO</li>
            <li className="list-item">&rarr; VISION BENEFITS OF AMERICA</li>
            <li className="list-item">&rarr; VSP</li>
            <li className="list-item">&rarr; WELLCARE</li>
            
          </ul>
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default Insurances;
