import React, {useState} from 'react';
import './Services.css'
import ServicesCard from './ServicesCard';
import handShakeIcon from './images/hand-shake.png'
import nexIcon from './images/cex.png'
import dexIcon from './images/dex.png'
function Services() {
    const [servicesData, useServicesData] = useState([
        {
            image: handShakeIcon,
            title: 'DAO',
            about: 'Vote in official acendao governance proposal and view past proposals. Governance forum: Participate by proposing upgrades and discussing the future of acendao',
            link: '/dao'
        }, {
            image: dexIcon,
            title: 'DEX',
            about: 'A community-driven decentralized exchange for Avalanche assets with fast settlement, low transaction fees and a democratic distribution powered by Avalanche. Acendao brings you the best trading opportunity to find and maximize your yield.',
            link: '/dex'
        }, {
            image: nexIcon,
            title: 'NEX',
            about: 'A community-driven NFT exchange first in the space built to trade NFTs with NFTs.',
            link: '/nex'
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
