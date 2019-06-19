import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";

// import "../../styles/style.scss";

// import patientForm from '../forms/Fichman-Eye-Center-Patient-Information-2016.pdf'

import { Grid, Row, Col, Jumbotron } from "react-bootstrap";

const PatientForms = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Patient Forms`}
      description={`Patient Forms for Fichman Eye Center`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-career-clipboard-1919236.jpeg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">New Patient Forms</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="text-section">
        <Col>
          <h1 className="text-section-header">Annual Exams:</h1>
          <p className="text-section-paragraph">
            It is required that you give the office a 24 hour notice when
            rescheduling your appointment or a $50.00 fee will be assessed. This
            will also apply if you do not show up for appointment.
          </p>
          <h1 className="text-section-header">Lasik Evaluations:</h1>
          <p className="text-section-paragraph">
            It is required that you give the office a 48 hour notice when
            rescheduling your appointment or a $50.00 fee will be assessed. This
            will also apply if you do not show up for appointment.
          </p>
          <h1 className="text-section-header">All Patients:</h1>
          <p className="text-section-paragraph">
            Patients scheduled for NON-SURGICAL appointments coming in late more
            than 20 minutes will be rescheduled.
          </p>
          <h1 className="text-section-header">
            New Patient - Medicare/Non Medicare/Cataract Evaluation
          </h1>
          <ul className="list-group">
            <li className="list-item">
              &rarr;{" "}
              <a
                href="https://drive.google.com/file/d/1spWFaXf7fH0Ro06ps-4r1e-pQxNOyMUC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="visible-link"
              >
                Patient Information
              </a>
            </li>
            <li className="list-item">
              &rarr;{" "}
              <a
                href="https://drive.google.com/file/d/1bGGnZr18itcSQUUrBq-QRV0IQKX6TxcN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="visible-link"
              >
                Medical History
              </a>
              
            </li>
            <li className="list-item">
              &rarr;{" "}
              <a
                href="https://drive.google.com/file/d/1yIPinIz_QSwLPTUjHAnIPtcHeCPOAWt1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="visible-link"
              >
                HIPAA - Privacy Practices
              </a>
            </li>
          </ul>
          <h1 className="text-section-header">Lasik Evaluations</h1>
          <ul className="list-group">
          <li className="list-item">
              &rarr;{" "}
              <a
                href="https://drive.google.com/file/d/1haiiYnFXVCeEFF1DS1cCmHWVkRQzKuvI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="visible-link"
              >
                Patient Information
              </a>
            </li>
            <li className="list-item">
              &rarr;{" "}
              <a
                href="https://drive.google.com/file/d/1bGGnZr18itcSQUUrBq-QRV0IQKX6TxcN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="visible-link"
              >
                Medical History
              </a>
              
            </li>
            <li className="list-item">
              &rarr;{" "}
              <a
                href="https://drive.google.com/file/d/1yIPinIz_QSwLPTUjHAnIPtcHeCPOAWt1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="visible-link"
              >
                HIPAA - Privacy Practices
              </a>
            </li>
            <li className="list-item">
              &rarr;{" "}
              <a
                href="https://drive.google.com/file/d/1HkLXoRd-YJxIvXMgNKm58yzhsw_-Z4yN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="visible-link"
              >
                Appointment Letter - Manchester
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default PatientForms;
