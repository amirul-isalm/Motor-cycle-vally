import React from 'react';
import Footer from '../SharedComponent/Footer';
import Navbar from '../SharedComponent/Navbar';
import Explore from './Explore';

const ExplorePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Explore></Explore>
            <Footer></Footer>
        </div>
    );
};

export default ExplorePage;