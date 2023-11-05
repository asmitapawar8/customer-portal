import React, { useState } from 'react';
import './CardHeader.css'; // Import your CSS file

const CardHeader = (props) => {
 const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card-container">
        <div className="service-card">
            <div className="service-content">
                <h2>Captive HR Service</h2>
            </div>
        </div>
        
        <div className="service-card">
            <div className="service-content">
                <h2>Hire to Retire Cycle</h2>
            </div>
        </div>

        <div className="service-card">
            <div className="service-content">
                <h2>Career Development</h2>
            </div>
        </div>

        <div className="service-card">
            <div className="service-content">
                <h2>Technology-centric</h2>
            </div>
        </div>
    </div>
  );
};

export default CardHeader;
