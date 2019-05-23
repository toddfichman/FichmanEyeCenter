import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";
import VideoPlayer from "../../components/VideoPlayer";

import { Grid, Row } from "react-bootstrap";

const Testimonials = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center |  Testimonials`}
      description={`Testimonials For Fichman Eye Center`}
    />

    <Grid className="content-container">
      <h1 className="text-section-header-large">Testimonials</h1>
      <Row className="video-section">
        <VideoPlayer src="https://www.youtube.com/embed/5A4C3va_Pzc?rel=0" />
        <VideoPlayer src="https://www.youtube.com/embed/E9u-UbTiPPg?rel=0" />
        <VideoPlayer src="https://www.youtube.com/embed/gSxnJ3Gx0rI?rel=0" />
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default Testimonials;
