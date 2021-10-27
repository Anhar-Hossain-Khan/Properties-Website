import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import features1 from '../../../images/features1.jpg';
import features2 from '../../../images/features2.jpg';

const Features = () => {
    return (
        <Container>
         <h2 className=" mt-4 mb-3 text-success">Our Features</h2>
          <div>
            <Row xs={1} md={1} className="g-4">
      <Col>
      <Card>
        <Card.Img className="border border-primary rounded-3 " variant="top" src={features1} />
        <Card.Body>
          <Card.Title className="text-primary">Ground Floor</Card.Title>
          <h5 className="text-primary">Area: 1200sft</h5>
          <Card.Text>
          We are committed to providing exceptional services, <br /> every details and true support from the start of your home transaction until the end.
          </Card.Text>
          <button className="btn btn-success">Read More</button>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Img className="border border-primary rounded-3" variant="top" src={features2} />
        <Card.Body>
          <Card.Title className="text-primary">Ground Floor</Card.Title>
          <h5 className="text-primary">Area: 1200sft</h5>
          <Card.Text>
          We are committed to providing exceptional services, <br /> every details and true support from the start of your home transaction until the end.
          </Card.Text>
          <button className="btn btn-success">Read More</button>
        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
       </Container>
    );
};

export default Features;