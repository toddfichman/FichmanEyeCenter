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

const CostsAndFees = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Costs & Fees`}
      description={`About page for Fichman Costs & Fees`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-career-clipboard-1919236.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Costs & Fees</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="text-section">
        <Col>
          <h1 className="text-section-header">
            How much is LASIK eye surgery?
          </h1>
          <p className="text-section-paragraph">
            At Fichman Eye Center, we arrange affordable monthly payments to
            help fit Laser Vision Correction into your budget. Compared to
            eyeglasses and contact lenses, the price of this CT lask eye surgery
            can pay for itself in a few years time. Eyeglasses usually have to
            be replaced roughly once a year while contact lenses, depending on
            the type, can be extremely costly to maintain. Pre-approved
            financing is available online with no money down. Depending upon the
            desired term, (1-5 years) you can pay as little as $3.00/day for
            your Laser Vision Correction Surgery.
          </p>

          <ul className="list-group">
            <li className="list-item">
              &rarr; No down payment required & no interest up to two years
            </li>
            <li className="list-item">
              &rarr; Patient Financing - a payment plan with visible benefits
            </li>
            <li className="list-item">
              &rarr; Monthly payment that fits your budget
            </li>
            <li className="list-item">
              &rarr; Fixed payments that will never change
            </li>
            <li className="list-item">
              &rarr; Payments divisible for up to 60 months for manageable
              out-of-pocket expense
            </li>
            <li className="list-item">&rarr; No prepayment penalty.</li>
            <li className="list-item">
              &rarr; Fast and confidential application process using toll-free
              number.
            </li>
            <li className="list-item">&rarr; No application fees or forms</li>
            <li className="list-item">
              &rarr; Approval within minutes with good credit standing{" "}
            </li>
          </ul>

          <h3 className="text-section-footer">
            For questions about the cost of LASIK in Connecticut, call
            1-877-FICHMAN.
          </h3>

          <h3 className="text-section-footer">
            Fichman Eye Center also accepts negotiated discount contracts from
            the following:
          </h3>

          <ul className="list-group">
            <li className="list-item">&rarr; Vision Service Plan(VSP)</li>
            <li className="list-item">&rarr; Davis Vision</li>
            <li className="list-item">&rarr; Eye Med</li>
            <li className="list-item">&rarr; Superior Vision</li>
            <li className="list-item">&rarr; Cigna Vision</li>
            <li className="list-item">&rarr; Blue View Vision</li>
            <li className="list-item">&rarr; VBA</li>
            
          </ul>

          <i className="text-section-paragraph">10% discount for students, teachers, seniors and military personnel.</i>
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default CostsAndFees;
