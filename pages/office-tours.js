import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Slogan from "../components/Slogan";
import VideoPlayer from '../components/VideoPlayer';

import "../styles/style.scss";

// import patientForm from '../forms/Fichman-Eye-Center-Patient-Information-2016.pdf'

import { Grid, Row, Col, Jumbotron } from "react-bootstrap";

const OfficeTours = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Office Tours`}
      description={`Office Tours`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/background-binoculars-black-267596.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Tour Our Offices</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="video-section">
        <VideoPlayer location="Manchester Office" src="https://www.youtube.com/embed/x7nVYaCBQc8"/>
        <VideoPlayer location="Torrington Office" src="https://www.youtube.com/embed/b7vS6pgUlr8"/>
        <VideoPlayer location="New Britain Office" src="https://www.youtube.com/embed/nLlUYnuCPQM"/>
        <VideoPlayer location="Hartford Office" src="https://www.youtube.com/embed/UjX6q5iewo4"/>
        
     
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default OfficeTours;
