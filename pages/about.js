import Layout from "../components/Layout";
import Meta from "../components/Meta";

import { Grid, Row, Col, Jumbotron, } from "react-bootstrap";

const About = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Home`}
      description={`About page for Fichman Eye Center`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/background-binoculars-black-267596.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      {" "}
      {/* backgroundSize:"contain", backgroundPosition: "center" */}
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">About Fichman Eye Center</h1>
        <p>
        </p>
      </div>
    </Jumbotron>
  </Layout>
);

export default About;
