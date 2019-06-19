import { Col, Panel, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const review = (
  <div style={{ marginTop: ".5rem" }}>
    <FontAwesomeIcon icon={faStar} className="review-star" />
    <FontAwesomeIcon icon={faStar} className="review-star" />
    <FontAwesomeIcon icon={faStar} className="review-star" />
    <FontAwesomeIcon icon={faStar} className="review-star" />
    <FontAwesomeIcon icon={faStar} className="review-star" />
  </div>
);

export default () => (
  <>
    <div className="map-header">Testimonials</div>
    <Col xs={12} md={4}>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3" className="card-header">
            Pat L.
          </Panel.Title>
          {review}
        </Panel.Heading>
        <Panel.Body className="card-body">
          Both the assessment provided for Laser Vision Surgery as well as the
          in depth information on preparing for the surgery are comprehensive
          and outstanding. I would not hesitate to recommend the Fichman Eye
          Center. The staff is highly skilled, extremely competent,
          knowledgeable, and professional.
        </Panel.Body>
      </Panel>
    </Col>
    <Col xs={12} md={4}>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3" className="card-header">
            Mary K.
          </Panel.Title>
          {review}
        </Panel.Heading>
        <Panel.Body className="card-body">
          The environment is very caring. The nurses are very skilled and
          responsive. They cover all the bases, from medical to noticing things
          like I could use another warm blanket. Of course, Dr. Fichman is the
          best, and I had every confident placing myself in his care for this
          surgery. I have had excellent results. I have already had occasion to
          recommend Dr. Fichman, based on the overall experience and outcome.
        </Panel.Body>
      </Panel>
    </Col>
    <Col xs={12} md={4}>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3" className="card-header">
            Lauren C.
          </Panel.Title>
          {review}
        </Panel.Heading>
        <Panel.Body className="card-body">
          Going to Fichman Eyecenter was one of my best decisions. All of the
          doctors are knowledgeable, caring and willing to take the time to talk
          about all concerns no matter how small. Dr Fitchman was wonderful and
          is the best. A big shout out to the pre op and post op nurses, they
          are exceptional!
        </Panel.Body>
      </Panel>
    </Col>

    
    
  </>
);
