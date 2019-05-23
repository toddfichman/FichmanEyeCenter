import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Slogan from "../components/Slogan";
import VideoPlayer from "../components/VideoPlayer";

import { Grid, Row } from "react-bootstrap";

const OfficeTours = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Office Tours`}
      description={`Office Tours of Fichman Eye Center`}
    />

    <Grid className="content-container">
      <h1 className="text-section-header-large">Tour Our Offices</h1>
      <Row className="video-section">
        <VideoPlayer
          location="Manchester Office"
          src="https://www.youtube.com/embed/x7nVYaCBQc8"
        />
        <VideoPlayer
          location="Torrington Office"
          src="https://www.youtube.com/embed/b7vS6pgUlr8"
        />
        <VideoPlayer
          location="New Britain Office"
          src="https://www.youtube.com/embed/nLlUYnuCPQM"
        />
        <VideoPlayer
          location="Hartford Office"
          src="https://www.youtube.com/embed/UjX6q5iewo4"
        />
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default OfficeTours;
