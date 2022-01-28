import React, {useState} from 'react';
import './Services.css'
import ServicesCard from './ServicesCard';
import handShakeIcon from './images/hand-shake.png'
import cexIcon from './images/cex.png'
import dexIcon from './images/dex.png'
function Services() {
    const [servicesData, useServicesData] = useState([
        {
            image: handShakeIcon,
            title: 'CMEX',
            about: 'Community exchange is done easily with osmos. With our solid community, you can transact easily and faster too',
            link: '/cmex'
        }, {
            image: dexIcon,
            title: 'DEX',
            about: 'lorem10px',
            link: '/dex'
        }, {
            image: cexIcon,
            title: 'CEX',
            about: 'lorem10px',
            link: '/cex'
        }
    ])
    return <div className='services'>
        <h2 className='services__Title'>Offers</h2>
        <div className="services__Cards">
            {
            servicesData.map(({image, title, about, link}) => <ServicesCard image={image}
                title={title}
                about={about}
                link={link}/>)
        } </div>
    </div>
}

export default Services;
