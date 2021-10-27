import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Appartment.css'

const Appartment = (props) => {
    const { img, name, price, area, description} = props.appartment;
    return (
        <div className="mt-5">
        <Col>
        <Card>
          <Card.Img variant="top" className="card-img border border-primary rounded-3" src={img} />
          <Card.Body>
             <h3 className="text-success">{name}</h3>
              <h4 className="text-primary">Price: ${price}</h4>
              <h5>Area: {area}</h5>
             <p>{description}</p>
             <Button variant="danger">Click For Details</Button>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default Appartment;