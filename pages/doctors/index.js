import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";
import Link from "next/link";

// import "../../styles/style.scss";

import { Grid, Row, Jumbotron, Col, Image, Button } from "react-bootstrap";

const Doctors = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Doctors`}
      description={`All Doctors At Fichman Eye Center`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-afro-blazer-1056556.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      {" "}
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Meet Our Doctors</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="doctors-short-container">
        <Col className="doctors-short-section">
          <h3 className="doctors-short-title">
            Ophthalmologist, Medical Director: Richard A. Fichman, MD
          </h3>
          <Image
            className="doctors-img"
            src="../../static/images/drFichman.jpeg"
            rounded
          />

          <div className="doctors-short-text">
            <p>
              "God fortunately has given me a gift...the gift of microsurgery.
              Eyesight is one of the most precious gifts I can think of. That’s
              why it gives me great personal satisfaction to give the gift of
              sight to my patients through the latest surgical techniques."
            </p>
            <p>
              "When it comes to specialized eye care, time is often as important
              as skill. We’re ready to handle emergencies anytime—24 hours a
              day, seven days a week. Because we know that sometimes quick
              action can keep a trauma from becoming a tragedy."
            </p>
            <Button
              role="button"
              className="doctors-info-btn"
              bsSize="large"
              bsStyle="primary"
            >
              <Link href="/doctors/Richard-Fichman-MD">
                <a className="button-link">
                  View Dr. Fichman's Credentials & Bio
                </a>
              </Link>
            </Button>
          </div>
        </Col>
        <Col className="doctors-short-section">
          <h3 className="doctors-short-title">
            Ophthalmologist: Dr. Steven Tu, DO
          </h3>
          <Image
            className="doctors-img"
            src="../../static/images/drTu.jpg"
            rounded
          />

          <div className="doctors-short-text">
            <p>
              Dr. Tu was born and raised in the hills of New Jersey. He went to
              Rutgers University and then the University of Health Sciences in
              Kansas City, MO for medical school. His medical training involved
              traveling to several areas across the country, from Florida to
              Michigan to Pennsylvania.
            </p>
            <Button
              role="button"
              className="doctors-info-btn"
              bsSize="large"
              bsStyle="primary"
            >
              <Link href="/doctors/Dr-Steven-Tu">
                <a className="button-link">View Dr. Tu's Credentials & Bio</a>
              </Link>
            </Button>
          </div>
        </Col>
        <Col className="doctors-short-section">
          <h3 className="doctors-short-title">
            Optometrist: Dr. Jason Delisle, OD
          </h3>
          <Image
            className="doctors-img"
            src="../../static/images/drDelisle.jpg"
            rounded
          />

          <div className="doctors-short-text">
            <p>
              A Connecticut native, Jason Delisle graduated from the New England
              College of Optometry in May 2008. His experience includes
              externships at the Eye Centers of South Florida in Miami, Vision
              Care of Maine in Bangor, the Newington VA Hospital in Connecticut
              and the East Boston health center in Massachusetts.
            </p>
            <Button
              role="button"
              className="doctors-info-btn"
              bsSize="large"
              bsStyle="primary"
            >
              <Link href="/doctors/Richard-Fichman-MD">
                <a className="button-link">
                  View Dr. Deslisle's Credentials & Bio
                </a>
              </Link>
            </Button>
          </div>
        </Col>
        <Col className="doctors-short-section">
          <h3 className="doctors-short-title">
            Ophthalmologist: Dr. Randy Bouligny, MD
          </h3>
          <Image
            className="doctors-img"
            src="../../static/images/drBouligny.jpg"
            rounded
          />

          <div className="doctors-short-text">
            <p>
              Dr. Bouligny was born and raised in New Orleans, Louisiana. He
              graduated from Xavier University of Louisiana and went to medical
              school at Cornell University Medical College in New York City.
              Between his third and fourth year of medical school, Dr. Bouligny
              became interested in ophthalmology and took a year off to perform
              research in ocular immunology at the National Institutes of Health
              as a member of the Howard Hughes Medical Institute Research
              Scholars Program in Bethesda, MD.
            </p>
            <Button
              role="button"
              className="doctors-info-btn"
              bsSize="large"
              bsStyle="primary"
            >
              <Link href="/doctors/Richard-Fichman-MD">
                <a className="button-link">
                  View Dr. Bouligny's Credentials & Bio
                </a>
              </Link>
            </Button>
          </div>
        </Col>
        <Col className="doctors-short-section">
          <h3 className="doctors-short-title">Dr. Carly Olsin, OD</h3>
          <Image
            className="doctors-img"
            src="../../static/images/drOslin.jpg"
            rounded
          />

          <div className="doctors-short-text">
            <p>
              Dr. Olsin was born and raised in small town Ohio. She graduated
              University of Dayton and went on to optometry school at The Ohio
              State University College of Optometry. After graduation Dr. Olsin
              moved to Charleston, South Carolina where her husband was
              stationed in the Navy. There she worked for the Association for
              the Blind and also worked for a private practice. She moved to
              Connecticut in September 2014 once her husband was re stationed to
              Groton and began work at the Fichman Eye Center in October.
            </p>
            <Button
              role="button"
              className="doctors-info-btn"
              bsSize="large"
              bsStyle="primary"
            >
              <Link href="/doctors/Richard-Fichman-MD">
                <a className="button-link">
                  View Dr. Olsin's Credentials & Bio
                </a>
              </Link>
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default Doctors;
