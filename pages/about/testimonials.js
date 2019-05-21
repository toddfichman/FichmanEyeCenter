import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";
import VideoPlayer from '../../components/VideoPlayer';


// import patientForm from '../forms/Fichman-Eye-Center-Patient-Information-2016.pdf'

import { Grid, Row, Col, Jumbotron } from "react-bootstrap";

const Testimonials = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center |  Testimonials`}
      description={`Testimonials`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/background-binoculars-black-267596.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Testimonials</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="video-section">
        <VideoPlayer  src="https://www.youtube.com/embed/5A4C3va_Pzc?rel=0"/>
        <VideoPlayer  src="https://www.youtube.com/embed/E9u-UbTiPPg?rel=0"/>
        <VideoPlayer src="https://www.youtube.com/embed/gSxnJ3Gx0rI?rel=0"/>
        
     
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default Testimonials;
