

import React, { useState } from 'react';
import '../wfa.css';
import MoreInfo from './WhatWeDo/MoreInfo';
import ServiceExpandedCard  from './WhatWeDo/ServiceExpandedCard';

const ServiceType = ({ service }) => {
  const [showExpanded, setShowExpanded] = useState(false);


  const toggleExpanded = () => {
    if (!showExpanded) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when expanded
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when closed
    }
    setShowExpanded(!showExpanded);
  };

  return (
    <div className="services-card">
      {!showExpanded && (
        <div>
      <img src={service.photo} alt={service.name} />
      <h2>{service.name}</h2>
      <p className="cuisine-cost">
        <br />
        Aim: {service.aim}
      </p>
      <button onClick={toggleExpanded}>
            Know More
          </button>
        </div>
      )}
      {showExpanded && (
        <ServiceExpandedCard service={service} onClose={toggleExpanded} />
      )}
    </div>
    );
};

export default ServiceType;  
