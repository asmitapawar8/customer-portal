import React, { useState } from 'react';
import './wfa.css';

const ServiceCard = ({ service }) => {
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
    <div className={`services-card ${showExpanded ? 'expanded' : ''}`}>
      {!showExpanded && (
        <div>
          <img src={service.photo} alt={service.name} />
          <h2>{service.name}</h2>
          <p className="aim-cost">
            <br />
            Aim: {service.aim}
          </p>
          <button onClick={toggleExpanded}>Know More</button>
        </div>
      )}
      {showExpanded && (
        <div className="service-expanded-card">
          <div className="service-expanded-content">
            <h2>{service.name}</h2>
            <p className="aim-cost">
              {service.aim}
              <br />
            </p>
            <p>{service.description}</p>
            <button onClick={toggleExpanded}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
