import React, {useState} from 'react';
import './Services.css'
import ServicesCard from './ServicesCard';

import handShakeIcon from './images/hand-shake.png'
function Services() {
    const [servicesData, useServicesData] = useState([
        {
            image: handShakeIcon,
            title: 'CEX',
            about: 'lorem10px',
            link: '/cex'
        }, {
            image: '',
            title: 'CEX',
            about: 'lorem10px',
            link: '/cex'
        }, {
            image: '',
            title: 'CEX',
            about: 'lorem10px',
            link: '/cex'
        }
    ])
    return <div className='services'>
        {
        servicesData.map(({image, title, about, link}) => <ServicesCard image={image}
            title={title}
            about={about}
            link={link}/>)
    } </div>
}

export default Services;
