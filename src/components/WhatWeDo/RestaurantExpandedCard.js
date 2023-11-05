import React from 'react';
import './RestaurantExpandedCard.css'

const RestaurantExpandedCard = ({ restaurant, onClose }) => (
  <div className="restaurant-expanded-card">
    <div className="restaurant-expanded-content">
      <h2>{restaurant.name}</h2>
      <p className="cuisine-cost">
        {restaurant.cuisine}
        <br />
        Estimated Cost for 2: {restaurant.estimatedCost}
      </p>
      <p>{restaurant.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default RestaurantExpandedCard;
