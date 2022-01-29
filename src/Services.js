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
            about: 'A community-driven NFT exchange first in the Space built for ERC721 tokens(non-fungible token)',
            link: '/dex'
        }, {
            image: cexIcon,
            title: 'CEX',
            about: 'A community-driven decentralized exchange for Avalanche assets with fast settlement, low transaction fees and a democratic distribution powered by Acendex.',
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
