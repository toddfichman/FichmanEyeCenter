import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";

import { Grid, Row, Col, Jumbotron } from "react-bootstrap";

const FAQs = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Questions`}
      description={`Frequently Asked Questions at Fichman Eye Center`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-career-clipboard-1919236.jpeg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Frequently Asked Questions</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="text-section">
        <Col>
          <h3 className="list-header">Am I a candidate?</h3>

          <p className="text-section-paragraph">
            Large majorities of nearsighted, farsighted, or astigmatic people
            are potential candidates for the laser treatment.
          </p>

          <p className="text-section-paragraph">
            Typically, patients who are at least 21 years of age who meet
            certain medical and visual criteria are suitable. The best
            candidates tend to be people who are dissatisfied with their contact
            lenses or glasses and are motivated to make a change, whether it’s
            due to occupational or lifestyle reasons. There are certain medical
            conditions such as glaucoma, pregnancy, keratoconus, connective
            tissue disease, etc. that may exclude a potential patient.
          </p>

          <h3 className="list-header">How painful is the procedure?</h3>

          <p className="text-section-paragraph">
            The treatment itself is painless, although the patient may notice a
            pressure sensation in the eye or some discomfort in the first 24-48
            hours. Medication may be provided to minimize any post-surgical
            discomfort
          </p>
          <h3 className="list-header">
            How long does the laser treatment take?
          </h3>
          <p className="text-section-paragraph">
            Depending upon the amount of correction required, the laser
            treatment itself lasts less than 2 minutes.
          </p>
          <h3 className="list-header">How soon can I go back to work?</h3>
          <p className="text-section-paragraph">
            Typically, the patient will notice improved vision within 24 hours
            and can usually resume normal activities in 1-3 days. Vision may
            fluctuate over the next few weeks, and usually stabilizes within
            three months. Most patients do return to work the next day.
          </p>
          <h3 className="list-header">What are the risks?</h3>
          <p className="text-section-paragraph">
            As with any surgery, including vision correction, there is a risk of
            infection. Dr. Fichman uses every precaution to prevent infection at
            the time of treatment. This includes prescribing antibiotics after
            treatment to prevent infection. With proper post-operative care, the
            percentage of infection drops significantly.
          </p>
          <h3 className="list-header">Glare, Halos & Double Vision?</h3>
          <p className="text-section-paragraph">
            Early side effects of any corneal treatment include light
            sensitivity and glare. These symptoms are usually gone within days
            of treatment, but they have been reported to last for months. At
            Fichman Eye Center, we make every effort to avoid these side effects
            by carefully measuring the size of your pupil in darkness (maximum
            diameter 8 millimeters), which prevents halos and glare by
            containing the treated area within the pupil size
          </p>
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default FAQs;
