import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";
import VideoPlayer from '../../components/VideoPlayer';


// import patientForm from '../forms/Fichman-Eye-Center-Patient-Information-2016.pdf'

import { Grid, Row, Col, Jumbotron } from "react-bootstrap";

const InfromationalVideos = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center |  Infromational Videos`}
      description={`Infromational Videos`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/background-binoculars-black-267596.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Infromational Videos</h1>
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row className="video-section">
        <VideoPlayer  src="https://www.youtube.com/embed/PbXvvpDhXSc"/>
        <VideoPlayer src="https://www.youtube.com/embed/VWSYwigT9aA"/>
        <VideoPlayer  src="https://www.youtube.com/embed/uKJkOp80XHU"/>
        <VideoPlayer  src="https://www.youtube.com/embed/8hLW6QwoIWU"/>
        <VideoPlayer  src="https://www.youtube.com/embed/pejuBf8nk40"/>
        <VideoPlayer  src="https://www.youtube.com/embed/0Rw9H6BxwTs"/>
        <VideoPlayer  src="https://www.youtube.com/embed/on7q57C9qiU"/>
        
     
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default InfromationalVideos;
