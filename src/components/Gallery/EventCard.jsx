import india from '../../assets/ind.jpg'; // Import your image
import React, { useState } from 'react';
import './Media.css';

const Media = () => {
  const events = [
    {
      title: 'Independence Day Celebration',
      date: 'August 15, 2023',
      location: 'Airoli Office',
      description: 'Followed the tri-color theme throughout the Seamex office.',
      imageUrl: india, // Use the imported image
    },
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
      <h1>Upcoming Events</h1>
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>{event.description}</p>
            <img
              src={event.imageUrl}
              alt={event.title}
              className="small-image"
              onClick={() => handleExpandImage(event.imageUrl)}
            />
            <button onClick={() => handleExpandImage(event.imageUrl)}>Expand Image</button>
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

// import React, { useState } from 'react';
// import './EventCard.css';

// const EventCard = ({ title, date, location, description, imageUrl }) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   const closeExpandedImage = () => {
//     setExpanded(false);
//   };

//   return (
//     <div className={`event-card ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
//       {expanded && (
//         <div className="close-button" onClick={closeExpandedImage}>
//           <span>&times;</span>
//         </div>
//       )}
//       <img className="event-image" src={imageUrl} alt={title} />
//       <div className="event-details">
//         <h3>{title}</h3>
//         <p>Date: {date}</p>
//         <p>Location: {location}</p>
//         {expanded && (
//           <div>
//             <p>Description: {description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventCard;


// import React, { useState } from 'react';

// const EventCard = ({ title, date, location, description, imageUrl }) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div
//       className={`event-card ${expanded ? 'expanded' : ''}`}
//       onClick={toggleExpand}
//     >
//       <h3>{title}</h3>
//       <p>Date: {date}</p>
//       <p>Location: {location}</p>
//       {expanded && (
//         <div>
//           <p>Description: {description}</p>
//         </div>
//       )}
//       <img src={imageUrl} alt={title} />
//     </div>
//   );
// };

// export default EventCard;




//correct
// import React, { useState } from 'react';
// import './Media.css';
// import india from '../../assets/ind.jpg'; // Import your image

// const Media = () => {
//   const [isImageExpanded, setImageExpanded] = useState(false);

//   const handleExpandImage = () => {
//     setImageExpanded(true);
//   };

//   const handleCloseImage = () => {
//     setImageExpanded(false);
//   };

//   return (
//     <div className="app">
//       <h1>Upcoming Events</h1>
//       <div className="event-list">
//         <div className="event-card">
//           <img src={india} alt="Independence Day" />
//           <h3>Independence Day</h3>
//           <p>Date: 15/08/2023</p>
//           <p>Location: Airoli</p>
//           <p>Theme: Colors of Freedom</p>
//           <button onClick={handleExpandImage}>Expand Image</button>
//         </div>

//         {/* Other event cards can be added similarly */}

//         {isImageExpanded && (
//           <div className="expanded-image">
//             <button className="close-button" onClick={handleCloseImage}>
//               &times; {/* This is the close symbol (X) */}
//             </button>
//             <img src={india} alt="Expanded Image" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Media;


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
