import React from 'react';
import { Col, Row } from "react-bootstrap";
import property2 from '../../../images/property2.jpg';
import './About.css'

const About = () => {
    return (
        <div className="info-header">
          <div class="info-top">
            <h2>Why are you come with us?</h2>
          </div>
          <Row sm={12} lg={12} className="info-row">
            <Col sm={6}  lg={6} className="info-description">
              <h3>Find Your Dream Home By Us</h3>
              <h6>We are committed to providing exceptional services, every <br />details and true support from the start of your home transaction until <br /> the end. </h6>
            </Col>
            <Col sm={6}  lg={6} >
              <img className="border border-primary rounded-3 w-100 h-75 " src={property2} alt="" />
            </Col>
          </Row>
        </div>
    );
};

export default About;