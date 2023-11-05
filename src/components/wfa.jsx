

import React, { useState } from 'react';
import '../wfa.css';
import MoreInfo from './WhatWeDo/MoreInfo';
import RestaurantExpandedCard  from './WhatWeDo/RestaurantExpandedCard';

const RestaurantCard = ({ restaurant }) => {
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
    <div className="restaurant-card">
      {!showExpanded && (
        <div>
      <img src={restaurant.photo} alt={restaurant.name} />
      <h2>{restaurant.name}</h2>
      <p className="cuisine-cost">
        {restaurant.cuisine}
        <br />
        Estimated Cost for 2: {restaurant.estimatedCost}
      </p>
      <button onClick={toggleExpanded}>
            Know More
          </button>
        </div>
      )}
      {showExpanded && (
        <RestaurantExpandedCard restaurant={restaurant} onClose={toggleExpanded} />
      )}
    </div>
    );
};

export default RestaurantCard;  
