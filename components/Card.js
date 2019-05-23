import { Col, Panel, Button } from "react-bootstrap";
import Link from "next/link";

export default props => (
  <Col xs={12} md={4}>
    <Panel>
      <Panel.Heading>
        <Panel.Title componentClass="h3" className="card-header">
          {props.header}
        </Panel.Title>
      </Panel.Heading>
      <Panel.Body className="card-body">
        {props.content}
        <br />
        <Button type="submit" bsStyle="primary" className="card-button">
          <Link href={props.link}>
            <a className="button-link">{props.buttonText}</a>
          </Link>
        </Button>
      </Panel.Body>
    </Panel>
  </Col>
);
