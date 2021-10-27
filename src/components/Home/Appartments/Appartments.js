import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Appartment from '../Appartment/Appartment';
import './Appartments.css'

const Appartments = () => {
    const [appartments, setAppartments] = useState([]);

    useEffect(()=>{
        fetch('/appartments.json')
        .then(response => response.json())
        .then(data => setAppartments(data))
    }, [])

    return (
        <div className="container">
        <div className="top">
        <h2>Our <span>Appartments</span></h2>
        </div>
        <input className="appartment" type="text" placeholder="Search your Appartment" />
        <Row xs={1} md={2} lg={3} className="g-4">
            {
                appartments?.map(appartment => <Appartment key={appartment.id} appartment={appartment}></Appartment>)
            }
        </Row>
     </div>
    );
};

export default Appartments;