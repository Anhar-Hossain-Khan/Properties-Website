import React from 'react';
import About from '../About/About';
import Appartments from '../Appartments/Appartments';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Appartments></Appartments>
           <Features></Features>
           <About></About>
        </div>
    );
};

export default Home;