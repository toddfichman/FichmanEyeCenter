import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";
import VideoPlayer from "../../components/VideoPlayer";

import { Grid, Row } from "react-bootstrap";

const InfromationalVideos = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center |  Infromational Videos`}
      description={`Infromational Videos For Fichman Eye Center`}
    />

    <Grid className="content-container">
      <h1 className="text-section-header-large">Infromational Videos</h1>
      <Row className="video-section">
        <VideoPlayer src="https://www.youtube.com/embed/PbXvvpDhXSc" />
        <VideoPlayer src="https://www.youtube.com/embed/VWSYwigT9aA" />
        <VideoPlayer src="https://www.youtube.com/embed/uKJkOp80XHU" />
        <VideoPlayer src="https://www.youtube.com/embed/8hLW6QwoIWU" />
        <VideoPlayer src="https://www.youtube.com/embed/pejuBf8nk40" />
        <VideoPlayer src="https://www.youtube.com/embed/0Rw9H6BxwTs" />
        <VideoPlayer src="https://www.youtube.com/embed/on7q57C9qiU" />
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default InfromationalVideos;
