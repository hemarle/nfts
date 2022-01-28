import React from 'react';
import './ServicesCard.css'
function ServicesCard({image, title, about, link}) {
    return <div className='servicesCard'>
        <img src={image}
            alt=""/>
        <h3>{title}</h3>
        <p>{about}</p>
        <a href={link}>
            Explore
        </a>
    </div>;
}

export default ServicesCard;
