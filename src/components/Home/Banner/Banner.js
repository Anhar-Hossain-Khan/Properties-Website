import React from 'react';
import { Carousel } from 'react-bootstrap';
import property1 from '../../../images/property1.jpg';
import property2 from '../../../images/property2.jpg';
import property3 from '../../../images/property3.jpg';
import './Banner.css'

const Banner = () => {
    return (
  <div>
 <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={property1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Find Your Dream Home </h3>
      <p>We are committed to providing exceptional services, <br /> every details and true support from the start of your home transaction until the end.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={property2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h3>Find Your Dream Home</h3>
    <p>We are committed to providing exceptional services, <br /> every details and true support from the start of your home transaction until the end.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={property3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3>Find Your Dream Home</h3>
    <p>We are committed to providing exceptional services, <br /> every details and true support from the start of your home transaction until the end.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
};

export default Banner;