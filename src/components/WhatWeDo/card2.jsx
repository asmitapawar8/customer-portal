import React, { useState } from 'react';
import '../WhatWeDo/cards.css'; // Import your CSS file

const Card2 = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h2>{props.title}</h2>
        <p className={expanded?'expanded-description':''}>
            {expanded ? props.fullDescription : props.description}</p>
        {props.fullDescription && (
          <button className="button" onClick={toggleExpand}>
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card2;
