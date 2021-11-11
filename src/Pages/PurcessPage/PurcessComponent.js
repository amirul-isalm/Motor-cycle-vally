import React from 'react';
import Footer from '../SharedComponent/Footer';
import Navbar from '../SharedComponent/Navbar';
import PurcessSection from "./PurcessSection";

const PurcessComponent = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PurcessSection></PurcessSection>
            <Footer></Footer>
        </div>
    );
};

export default PurcessComponent;