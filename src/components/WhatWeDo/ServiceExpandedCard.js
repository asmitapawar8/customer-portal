import React from 'react';
import './ServiceExpandedCard.css'

const ServiceExpandedCard = ({ service, onClose }) => (
  <div className="service-expanded-card">
    <div className="service-expanded-content">
      <h2>{service.name}</h2>
      <p className="aim-cost">
        {service.aim}
        <br />
      </p>
      <p>{service.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default ServiceExpandedCard;
