import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";


import { Grid, Row, Jumbotron, Col, Image } from "react-bootstrap";

const DrFichman = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Richard Fichman, M.D.`}
      description={`Richard Fichman, M.D.`}
    />

    {/* <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/adult-afro-blazer-1056556.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      {" "}
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Ophthalmologist, Medical Director: Richard A. Fichman, MD</h1>
      </div>
    </Jumbotron> */}

    <Grid className="doctors-main">
      <Row className="doctors-main-container">
        <Col className="doctors-main-section">
          <h1 className="doctors-main-title">Richard A. Fichman, M.D.</h1>
          <Image
            className="doctors-main-img"
            src="../../static/images/drFichman.jpeg"
            rounded
          />

          <div className="doctors-main-text">
            <p>
              In 1984 Dr. Richard Fichman was Chairman of the Dept of
              Ophthalmology at Woodhull Hospital in New York City as well as an
              Associate Professor. Ophthalmic surgery was rapidly changing and
              he decided to bring these new techniques and technologies to his
              hometown in CT. Initially he traveled 6 times a week between NYC
              and CT. His mother, then 70 years old was his receptionist. Office
              hours began at 7:00 AM weekdays and on Saturdays. Eventually he
              moved to CT.
            </p>
            <p>
              In 1991 Dr. Fichman introduced a method to eliminate needles from
              cataract surgery, called "Topical Anesthesia". This technique is
              widely used around the globe. It is estimated that 10's of
              millions of patients have benefited from this technique,
              revolutionizing cataract surgery. In 1995 Dr. Fichman performed
              the first LASIK surgery in CT. He then introduced the first all
              laser procedure.
            </p>
            <p>
              Dr. Fichman has always focused on getting his patients to reduce
              their dependence on glasses after cataract surgery. The newly
              developed Laser Assisted Cataract procedure helps achieve this
              goal. The Fichman Eye Center is a leader of this technique in the
              Northeast.
            </p>
            <p>
              The practice has grown to four locations with a dedicated team of
              Doctors and support staff, all dedicated to provide the best in
              technology and advanced eyecare, from treatment of complex eye
              conditions to routine eye exams, fashionable glasses and contact
              lenses.
            </p>
            <h3 style={{fontWeight: 'bold'}}>Over three decades we have stayed true to our founding principals:</h3>
            <p>To provide the most advanced technologies and blend them into a caring environment.</p>
          </div>
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default DrFichman;
