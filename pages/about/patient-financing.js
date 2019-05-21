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

const PatientFinancing = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Patient Financing`}
      description={`Patient Financing`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-career-clipboard-1919236.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Patient Financing</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="text-section">
        <Col>
          <h1 className="text-section-header">Affordable Payment Options</h1>
          <p className="text-section-paragraph">
            Here at Fichman Eye Center, financial considerations should not be
            an obstacle in obtaining Vision Correction. Our goal is to make our
            procedures affordable for any budget. It is for this reason that we
            make things affordable, by offering a combination of expertise,
            experience and advanced technology at a price everyone can afford.
          </p>

          <h3 className="list-header">
            You may choose any of the following payment options:
          </h3>

          <ul className="list-group">
            <li className="list-item">&rarr; Cash or Check</li>
            <li className="list-item">&rarr; Credit Card</li>
            <li className="list-item">&rarr; Monthly Payment Plan</li>
          </ul>

          <h3 className="list-header">
            Our Monthly Payment Plans Offer:
          </h3>

          <ul className="list-group">
            <li className="list-item">
              &rarr; Zero Down Payment & Special Financing for 12 Months
            </li>
            <li className="list-item">
              &rarr; Zero Down Payment & Low Monthly Payment with Interest
            </li>
            <li className="list-item">&rarr; Zero Prepayment Penalty</li>
          </ul>

          <h3 className="text-section-footer">
            Apply now at{" "}
            <a
              href="http://www.carecredit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="visible-link"
            >
              www.carecredit.com
            </a>{" "}
            or call toll-free (800) 677-0718 to apply for a CareCredit card.
          </h3>

          <h3 className="text-section-footer">
            You can use our easy, automated system anytime or you can apply with
            a live agent Monday through Friday from 9:00am – 9:00pm (EST).
          </h3>

          <h3 className="text-section-footer">
            The application process is fast, easy and of course completely
            confidential 24 hours a day, 7 days a week.
          </h3>
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default PatientFinancing;
