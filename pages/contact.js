import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Slogan from "../components/Slogan";
import HoursCard from "../components/HoursCard";

import { Grid, Row, Jumbotron } from "react-bootstrap";

const Contact = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Contact`}
      description={`Contact page for Fichman Eye Center`}
    />

    <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-afro-blazer-1056556.jpeg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      {" "}
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Contact Us</h1>
        <p />
      </div>
    </Jumbotron>

    <Grid className="content-container">
      <Row>
        <HoursCard
          office={"Manchester"}
          phone={"+1-(860)-649-9973"}
          monday={"8:00 AM - 5:00 PM"}
          tuesday={"8:00 AM - 5:00 PM"}
          wednesday={"10:00 AM - 7:00 PM"}
          thursday={"8:00 AM - 5:00 PM"}
          friday={"8:00 AM - 4:00 PM"}
        />
        <HoursCard
          office={"Torrington"}
          phone={"+1-(860)-489-8999"}
          monday={"8:00 AM - 5:00 PM"}
          tuesday={"8:00 AM - 5:00 PM"}
          wednesday={"10:00 AM - 7:00 PM"}
          thursday={"8:30 AM - 5:00 PM"}
          friday={"8:30 AM - 4:00 PM"}
        />
        <HoursCard
          office={"New Britain"}
          phone={"+1-(860)-357-2349"}
          monday={"Closed"}
          tuesday={"8:00 AM - 5:00 PM"}
          wednesday={"Closed"}
          thursday={"Closed"}
          friday={"8:00 AM - 5:00 PM"}
        />
        <HoursCard
          office={"Hartford"}
          phone={"+1-(860)-560-9563"}
          monday={"8:00 AM - 5:00 PM"}
          tuesday={"Closed"}
          wednesday={"10:00 AM - 5:00 PM"}
          thursday={"Closed"}
          friday={"8:00 AM - 5:00 PM"}
        />
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default Contact;
