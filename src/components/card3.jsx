import React, { useState } from 'react';
import '../card3.css'; // Import your CSS file
import Modal from './modal'; // Import the Modal component

const Card3 = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const openModal = () => {
    console.log('Opening Modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing Modal');
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h2>{props.title}</h2>
        <p className={expanded ? 'expanded-description' : ''}>
          {expanded ? props.fullDescription : props.description}
        </p>
        {props.fullDescription && (
          <>
            <button className="button" onClick={toggleExpand}>
              {expanded ? 'Read Less' : 'Read More'}
            </button>
            <button className="button" onClick={openModal}>
              More Detailss
            </button>
          </>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={props.title}
        content={props.fullDescription}
      />
    </div>
  );
};

export default Card3;
