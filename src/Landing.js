import './Landing.css'

import About from "./About";
import Download from "./Download";
import Hero from "./Hero";
import React from 'react';
import phoneIcon from './images/phone2.png'
import Started from "./Started";

function Landing() {
    return <div className='landing'>
        <Hero title='Invest in Defi from one place' about='One stop platform for CEX, DEX and DAO' link='/signup' linkText='Connect wallet'/>
        <About/>
        <Download image={phoneIcon}
            title='Defi for every device'
            about=" Track your portfolio in real time and view the entire DeFi market,
                                                                                                      straight from your phone. Our mobile app is globally available, with
                                                                                                      over 10 languages supported.
                                                                                                 "/>
        <Started/>

    </div>;
}

export default Landing;
