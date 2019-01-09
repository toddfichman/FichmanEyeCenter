import { Col, Panel, Button } from 'react-bootstrap'

export default (props) => (

        <Col xs={12} md={4}>
          <Panel>
                <Panel.Heading>
                <Panel.Title componentClass="h3" className="card-header">{props.header}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    {props.content}
                    <br />
                    <Button bsStyle="primary" className="card-button">{props.buttonText}</Button>
                </Panel.Body>
                
            </Panel>
        </Col>


)