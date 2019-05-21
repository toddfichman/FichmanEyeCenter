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
} from "react-bootstrap";

const PatientEducation = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Patient Education`}
      description={`Patient Education for Fichman Eye Center`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-career-clipboard-1919236.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Patient Education</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="text-section">
        <Col>
          <h1 className="text-section-header">Myopia (Nearsightedness)</h1>
          <p className="text-section-paragraph">
            Nearsighted individuals typically have problems seeing well at a
            distance and are forced to wear glasses or contact lenses. The
            nearsighted eye is usually longer than a normal eye, and its cornea
            may also be steeper. Therefore, when light passes through the cornea
            and lens, it is focused in front of the retina. This will make
            distant images appear blurred. There are several refractive surgery
            solutions available to correct nearly all levels of nearsightedness.
          </p>
          <h1 className="text-section-header">Hyperopia (Farsightedness)</h1>
          <p className="text-section-paragraph">
            Farsighted individuals typically develop problems reading up close
            before the age of 40. The farsighted eye is usually slightly shorter
            than a normal eye and may have a flatter cornea. Thus, the light of
            distant objects focuses behind the retina unless the natural lens
            can compensate fully. Near objects require even greater focusing
            power to be seen clearly and therefore, blur more easily. LASIK,
            Refractive Lens Exchange and Contact lenses are a few of the options
            available to correct farsightedness.
          </p>
          <h1 className="text-section-header">Astigmatism</h1>
          <p className="text-section-paragraph">
            Asymmetric steepening of the cornea or natural lens causes light to
            be focused unevenly, which is the main optical problem in
            astigmatism. To individuals with uncorrected astigmatism, images may
            look blurry or shadowed. Astigmatism can accompany any form of
            refractive error and is very common. Astigmatism can be corrected
            with glasses, contact lenses, corneal relaxing incisions, laser
            vision correction, and special implant lenses.
          </p>
          <h1 className="text-section-header">Presbyopia</h1>
          <p className="text-section-paragraph">
            Presbyopia is a condition that typically becomes noticeable for most
            people around age 45. In children and young adults, the lens inside
            the eye can easily focus on distant and near objects. With age, the
            lens loses its ability to focus adequately. Although presbyopia is
            not completely understood, it is thought that the lens and its
            supporting structures lose the ability to make the lens longer
            during close vision effort. To compensate, affected individuals
            usually find that holding reading material further away makes the
            image clearer. Ultimately, aids such as reading glasses are
            typically needed by the mid-forties. Besides glasses, presbyopia can
            be dealt with in a number of ways. Options include: monovision and
            multifocal contact lenses, monovision laser vision correction, and
            new presbyopia correcting implant lenses.
          </p>
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default PatientEducation;
