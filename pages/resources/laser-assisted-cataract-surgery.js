import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";
import Router from "next/router";

import { Grid, Row, Col, Jumbotron } from "react-bootstrap";

const CataractSurgery = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Cataract Surgery`}
      description={`Laser Assisted Cataract Surgery At Fichman Eye Center`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-career-clipboard-1919236.jpeg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">
          Laser Assisted Cataract Surgery
        </h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="text-section">
        <Col>
          <h1 className="text-section-header">
            Discover the advantages of laser cataract refractive surgery
          </h1>
          <h3 className="list-header">An advancement in cataract treatment</h3>
          <p className="text-section-paragraph">
            How your cataract procedure is performed is up to you and your
            doctor. You’ve probably heard a lot about your options, but the
            truth is that laser-assisted surgery is proven to be more precise
            and reproducible than traditional cataract surgery. Cataract
            refractive surgery can help you get back to the lifestyle you love
            with improved vision.
          </p>
          <h3 className="list-header">
            Developing a personalized treatment plan
          </h3>
          <p className="text-section-paragraph">
            While our eyes share the same basic anatomy, each eye is unique when
            it comes to certain key measurements. Before your cataract
            procedure, the technology behind the LenSx® Laser captures
            high-resolution images of your eyes. These images help your surgeon
            plan and complete a procedure to exacting specifications not
            possible with traditional cataract surgery.
          </p>
          <h3 className="list-header">A precise procedure</h3>
          <p className="text-section-paragraph">
            The LenSx® Laser system takes real-time video and generates
            three-dimensional images of your eye to help your surgeon automate
            and execute the challenging steps of cataract surgery. Laser
            fragmentation helps the surgeon remove the cataract precisely and
            efficiently while limiting stress to your eye.
          </p>
          <h3 className="list-header">
            Cataract refractive surgery is designed to help you see the world
            better
          </h3>
          <p className="text-section-paragraph">
            After laser fragmentation of your lens, your cataract is removed and
            an artificial replacement lens, or IOL, is inserted to help you see
            clearly again. Many patients experience improved vision after two
            weeks, and they approach optimal vision between two and four months
            after their procedure.
          </p>

          <h3 className="list-header">
            Reduce your dependence on glasses with advanced technology lenses
          </h3>
          <p className="text-section-paragraph">
            The LenSx® Laser can also be used with advanced technology IOLs,
            which are designed to help you enjoy less dependence on spectacles
            during activities such as:
            <ul className="list-group">
              <li className="list-item">&rarr; Knitting</li>
              <li className="list-item">&rarr; Reading</li>
              <li className="list-item">&rarr; Playing cards</li>
              <li className="list-item">&rarr; Watching TV</li>
              <li className="list-item">&rarr; Playing golf and tennis</li>
            </ul>
          </p>

          <h3 className="list-header">What is the LenSx® Laser?</h3>
          <p className="text-section-paragraph">
            The system is designed to automate some of the most demanding steps
            of cataract refractive surgery and offers:
            <ul className="list-group">
              <li className="list-item">&rarr; A laser procedure</li>
              <li className="list-item">
                &rarr; Precise, reproducible performance
              </li>
              <li className="list-item">&rarr; Increased surgeon control</li>
              <li className="list-item">
                &rarr; More predictable surgical outcomes
              </li>
            </ul>
          </p>

          <h3 className="list-header">
            Investing in the added value of laser procedures
          </h3>
          <p className="text-section-paragraph">
            Medicare and private insurance typically cover some of the costs of
            cataract surgery. However, there may be out-of-pocket expenses
            involved because of the premium nature of a laser-assisted cataract
            procedure. Even so, many patients still choose laser-assisted
            cataract refractive surgery.
          </p>

          <a
            href="https://drive.google.com/file/d/1DDARVR7Ga-2EzZfVmcoYMhX-ARf7p9Y3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="visible-link-large"
          >
            Click Here For Outlook Magazine Article
          </a>

          <a
            onClick={() => Router.push("/about/testimonials")}
            className="visible-link-large"
          >
            Click Here For Testimonials
          </a>
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default CataractSurgery;
