import React from 'react';
import Footer from '../SharedComponent/Footer';
import Navbar from "../SharedComponent/Navbar"
import Banner from './Banner';
import HelmateSeftyCompo from './HelmateSeftyCompo';
import OurProduct from './OurProduct';
import Review from './Review';

const Home = () => {
    return (
      <div>
            <Navbar></Navbar>
            <Banner></Banner>
        <OurProduct></OurProduct>
        <HelmateSeftyCompo></HelmateSeftyCompo>
        <Review></Review>
        <Footer></Footer>
      </div>
    );
};

export default Home;