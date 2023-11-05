import React from 'react';

const MoreInfo = ({ card, onClose }) => (
  <div className="card-info-overlay">
    <div className="card-info-modal">
      <h2>{card.name}</h2>
      <p className="cuisine-cost">
        {card.cuisine}
        <br />
        Estimated Cost for 2: {card.estimatedCost}
      </p>
      <p>{card.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default MoreInfo;
