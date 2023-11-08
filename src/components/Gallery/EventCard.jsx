import india from '../../assets/ind.jpg'; // Import your image4
import ganpati from '../../assets/ganpati.jpg';
import diwali from '../../assets/diwali.jpg'
import quality from '../../assets/quality.jpg'
import React, { useState } from 'react';
import './Media.css';

const Media = () => {
  const events = [
    {
      title: 'Ganesh Chaturthi',
      date: 'September 10, 2023',
      location: 'Airoli ',
      description: 'Celebration of God Ganesha!',
      imageUrl: ganpati, // Use the imported image
    },
    {
      title: 'Independence Day',
      date: 'August 15, 2023',
      location: 'Airoli ',
      description: 'Followed the tri-color theme throughout the Seamex office.',
      imageUrl: india, // Use the imported image
    },
    {
      title: 'Diwali Celebration',
      date: 'November 10, 2023',
      location: 'Airoli ',
      description: 'Flaunt yourself in your traditional way',
      imageUrl: diwali, // Use the imported image
    },
    {
      title: 'Quality Day',
      date: 'November 22, 2023',
      location: 'Airoli',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: quality,
    }
    // Add more event objects here
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


//correct
// import React from 'react';
// import './EventCard.css'

// const EventCard = ({ title, date, location, description, imageUrl }) => {
//   return (
//     <div className="event-card">
//       <img src={imageUrl} alt={title} />
//       <div className="event-details">
//         <h3>{title}</h3>
//         <p>Date: {date}</p>
//         <p>Location: {location}</p>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default EventCard;
