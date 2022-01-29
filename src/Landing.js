import './Landing.css'

import About from "./About";
import Download from "./Download";
import Hero from "./Hero";
import React from 'react';
import phoneIcon from './images/phone2.png'
import Started from "./Started";
import Services from './Services';

function Landing() {
    return <div className='landing'>
        <Hero title='Invest in Defi from one place' about='One stop platform for CEX, DEX and DAO' link='/signup' linkText='Get Started'/>
        <About title='Explore'/>
        <Services/>
        <Download image={phoneIcon}
            title='Defi for every device'
            about=" Track your portfolio in real time and view the entire DeFi market, straight from your phone. Our mobile app is globally available, with over 10 languages support"/>
        <Started/>

    </div>;
}

export default Landing;
