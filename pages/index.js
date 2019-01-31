import "../styles/style.scss";

import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Footer from '../components/Footer';

import Card from '../components/Card';


import { Grid, Row, Col, Jumbotron, Button } from "react-bootstrap";

const Home = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Home`}
      description={`Home page for Fichman Eye Center`}
    />
    <Jumbotron style={{backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/fichman-doctors.jpg)`, backgroundRepeat: "no-repeat" }} > {/* backgroundSize:"contain", backgroundPosition: "center" */}
      <div className="jumbotron-container">
        <h1 className="jumbotron-header">Welcome to Fichman Eye Center</h1>
        <p>
          <Button className="jumbotron-btn" bsSize="large" bsStyle="primary">Schedule Appointment Today</Button>
        </p>
      </div>
    </Jumbotron>

    <Grid>
      <Row className="card-row">
          <Card 
            header={'ABOUT'}
            content={'Donec non elit massa. Cras at neque in lectus euismod rutrum quis et odio. Suspendisse id iaculis nisi. Curabitur egestas nibh odio, non efficitur risus efficitur quis. Sed nec justo ut nunc blandit tempus vel ut tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut dapibus velit. Proin scelerisque eu ligula sit amet efficitur. Nam accumsan elementum elit, ultricies efficitur ante venenatis at.'}
            buttonText={'About'}/>
          <Card 
            header={'SERVICES'}
            content={'Donec non elit massa. Cras at neque in lectus euismod rutrum quis et odio. Suspendisse id iaculis nisi. Curabitur egestas nibh odio, non efficitur risus efficitur quis. Sed nec justo ut nunc blandit tempus vel ut tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut dapibus velit. Proin scelerisque eu ligula sit amet efficitur. Nam accumsan elementum elit, ultricies efficitur ante venenatis at.'}
            buttonText={'Services'}/>
          <Card 
            header={'TESTIMONIALS'}
            content={'Donec non elit massa. Cras at neque in lectus euismod rutrum quis et odio. Suspendisse id iaculis nisi. Curabitur egestas nibh odio, non efficitur risus efficitur quis. Sed nec justo ut nunc blandit tempus vel ut tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut dapibus velit. Proin scelerisque eu ligula sit amet efficitur. Nam accumsan elementum elit, ultricies efficitur ante venenatis at.'}
            buttonText={'Testimonials'}/>
      </Row>


      <Row className="text-section">
        <Col lg={12}>
          <h1 className="text-section-header">Fichman Eye Center</h1>
        </Col>
        <Col lg={12}>
          <div className="text-section-subtext">You can clearly see the difference</div>
        </Col>
      </Row>
    </Grid>

  
    
  </Layout>
);

export default Home;
