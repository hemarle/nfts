import React from 'react';
import './Services.css'
import ServicesCard from './ServicesCard';
function Services() {
    let servicesData = [{
            image: '',
            title: 'CEX',
            about: 'lorem10px',
            link: '/cex'
        }]
    return <div className='services'>
        {
        servicesData.map(({image, title, about, link}) => {
            <ServicesCard image={image}
                title={title}
                about={about}
                link={link}/>

        })
    } </div>
}

export default Services;
