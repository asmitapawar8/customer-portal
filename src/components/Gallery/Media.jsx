import React, { useState } from 'react';
import './Media.css';
import india from '../../assets/ind.jpg';
import ganpati from '../../assets/ganpati.jpg';
import diwali from '../../assets/diwali.jpg';
import quality from '../../assets/quality.jpg';

const Media = () => {
  const events = [
    {
      title: 'Ganesh Chaturthi',
      date: 'September 10, 2023',
      location: 'Airoli',
      description: 'Celebration of God Ganesha!',
      imageUrl: ganpati,
    },
    {
      title: 'Independence Day',
      date: 'August 15, 2023',
      location: 'Airoli',
      description: 'Followed the tri-color theme throughout the Seamex office.',
      imageUrl: india,
    },
    {
      title: 'Diwali Celebration',
      date: 'November 10, 2023',
      location: 'Airoli',
      description: 'Flaunt yourself in your traditional way',
      imageUrl: diwali,
    },
    {
      title: 'Quality Day',
      date: 'November 22, 2023',
      location: 'Airoli',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: quality,
    },
  ];

  const [expandedImage, setExpandedImage] = useState(null);

  const handleExpandImage = (imageUrl) => {
    setExpandedImage(imageUrl);
  };

  const handleCloseImage = () => {
    setExpandedImage(null);
  };

  return (
    <div className="app">
      <h1>Discover What's Happening!!</h1>
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <img
              src={event.imageUrl}
              alt={event.title}
              className="small-image"
              onClick={() => handleExpandImage(event.imageUrl)}
            />
            <button onClick={() => handleExpandImage(event.imageUrl)} className='fullSize'>View Full Size</button>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>

      {expandedImage && (
        <div className="expanded-image">
          <img src={expandedImage} alt="Expanded Event Image" />
          <button className="close-button" onClick={handleCloseImage}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Media;


