import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";
import VideoPlayer from '../../components/VideoPlayer';

// import "../../styles/style.scss";

// import patientForm from '../forms/Fichman-Eye-Center-Patient-Information-2016.pdf'

import {
  Grid,
  Row,
  Col,
  Jumbotron,
} from "react-bootstrap";

const Lasik = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Lasik Information`}
      description={`Lasik Information`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-career-clipboard-1919236.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Lasik Information</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="text-section">
        <Col>
          <h1 className="text-section-header">
            The Laser Vision Correction Experience
          </h1>
          <h3 className="text-section-footer">
            What Happens During LASIK Eye Surgery?
          </h3>
          <h3 className="text-section-footer">
            Imagine seeing clearly without contacts or glasses...
          </h3>

          <VideoPlayer src="https://www.youtube.com/embed/_LjXcMH2uvY" />

          <p className="text-section-paragraph">
            Although many patients seek out laser vision correction simply
            because they dislike wearing glasses, the treatment is more than a
            vision care cosmetic solution. The human eye becomes dryer as we
            age, making the use of contact lenses more uncomfortable. Certain
            types of employment require excellent vision without corrective
            devices. In other jobs, the use of glasses may be inconvenient.
            LASIK, laser eye surgery, offers the potential to reduce dependence
            on glasses and contact lenses or, in many cases, eliminate them all
            together. For those people who, for whatever reason, have never
            liked to wear corrective lenses of any kind, laser eye surgery is an
            exciting, safe and effective alternative.
          </p>

          <h3 className="list-header">LASIK Pre-Operative Evaluation</h3>

          <p className="text-section-paragraph">
            You will need a thorough exam from a LASIK surgeon who has advanced
            training in laser vision correction to determine if your vision can
            be improved by the treatment. At Fichman Eye Center, we offer a free
            consultation with no obligation. Our staff will answer your
            questions and let you know if laser vision correction is right for
            you. During the consultation, we will also discuss various LASIK
            technology. Because Fichman Eye Center is dedicated to the best and
            safest outcomes our center invests in the latest laser technology.
            We will explain bladeless Lasik using the Ziemer Crystal Line Femto
            Laser and the Nidek EC-5000.
          </p>

          <h3 className="list-header">
            Connecticut LASIK Eye surgery procedure (also known as Laser in-Situ
            keratomileusis)
          </h3>

          <p className="text-section-paragraph">
            The results of the patient’s pre-operative exam will determine the
            treatment parameters that are entered into the laser’s computer. The
            patient remains awake and pain free during the treatment. Prior to
            treatment, the patient is lead into the treatment room and
            positioned in a comfortable chair where anesthetic eye drops will be
            administered. Using the Ziemer Crystal Line Femto Laser, a corneal
            flap is created one eye at a time at less than a minute per eye. The
            corneal flap is then lifted, and using the Nidek EC-5000, a laser
            beam is applied to the exposed surface of the cornea to re-shape the
            tissue. The flap is then replaced over the treated area. This
            corneal flap serves as a natural bandage, which eliminates the
            discomfort associated with other types of refractive surgery, and
            expedites the healing process. Because of the extraordinary bonding
            properties of the corneal tissue, stitches are not needed to keep
            the flap in place post-operatively.
          </p>
          <p className="text-section-paragraph">
            During 24-48 hours after treatment most patients will experience a
            sensation in the eye and/or some mild discomfort. Typically, the
            patient will notice improved vision in 3-5 days or sooner following
            the treatment. Vision may fluctuate over the next few weeks, but
            generally stabilizes within three months. Treatment follow up
            generally involves a visit to the doctor the next day, in one to two
            weeks, in one month, three months, and six months after surgery.
            Antibiotic and anti-inflammatory drops will be prescribed for one
            week after surgery. Yearly eye exams are highly recommended.
          </p>
          {/* <p className="text-section-paragraph">
            If you are interested in determining whether you are a candidate for
            LASIK eye surgery please be sure to click here to complete our LASIK
            SELF EVALUATION TEST. If you would like us to contact you, please
            fill out our contact form or call 1-877-FICHMAN. Once we receive
            your request a patient counselor will be in touch with you. At
            Fichman Eye Center we take great pride in offering many vision
            correction options. If you are not a candidate for LASIK, our LASIK
            surgeon will determine the best possible option and discuss the
            potential risks and benefits.
          </p> */}

          <h3 className="list-header">Tips for LASIK treatment day</h3>

          <ul className="list-group">
            <li className="list-item">&rarr; Dress causally and comfortably</li>
            <li className="list-item">
              &rarr; Avoid wearing eye makeup, perfume or cologne
            </li>
            <li className="list-item">
              &rarr; Bring a friend or family member who can accompany you
              through most of the process and drive you home
            </li>
            <li className="list-item">
              &rarr; Allow 1 ½ - 2 hours for treatment
            </li>
            <li className="list-item">
              &rarr; Do not wear contacts for the prescribed period of time
              prior to the procedure
            </li>
          </ul>

          <h3 className="list-header">
          Interesting things to know about LASIK eye surgery
          </h3>

          <p className="text-section-paragraph">
            The excimer laser was first developed in 1972. The excimer laser
            does not cut tissue like a scalpel; rather it ablates or vaporizes
            tissue from the corneal surface. The laser is able to precisely
            shape or sculpt the corneal tissue.
          </p>

          <p className="text-section-paragraph">
            The first LASIK Surgery in the state of Connecticut was performed at
            the Fichman Eye Center in the mid 90’s.
          </p>
          <p className="text-section-paragraph">
            Fichman Eye Center was first to perform LASIK Surgery using
            bladeless technology in the state of Connecticut.
          </p>
          <p className="text-section-paragraph">
            Celebrities who have undergone Lasik surgery: Jessica Simpson, Elton
            John, Nicole Kidman, Troy Aikman, Michael Bolton, Drew Carey,
            Lorenzo Lamas, Courtney Cox, John Tesh, Ozzy Osbourne, Steven Tyler,
            Rick Fox and Tiger Woods.
          </p>
          <VideoPlayer src="https://www.youtube.com/embed/cw8TwIaIOv4" />
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default Lasik;
