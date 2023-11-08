import React, { useState } from 'react';
import './Media.css';
import EventCard from './EventCard.jsx'; // Assuming you have the EventCard component in a separate file
import india from '../../assets/ind.jpg'; // Import your image
import quality from '../../assets/quality.jpg'; // Import your image

const Media = () => {
  // const events = [
  //   {
  //     title: 'Independence Day Celebration',
  //     date: 'August 15, 2023',
  //     location: 'Airoli Office',
  //     description: 'Followed the tri-color theme throughout the Seamex office.',
  //     imageUrl: india,
  //   },
  //   {
      // title: 'Event 2',
      // date: 'December 5, 2023',
      // location: 'Los Angeles',
      // description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      // imageUrl: quality,
  //   },
  //   // Add more event objects here
  // ];

  return (
    <div className="app">
      <h1>Discover What's Happening!!</h1>
      <div className="event-list">
        {/* {events.map((event, index) => (
          <EventCard key={index} {...event} /> */}
          <EventCard/>
      
      </div>
    </div>
  );
};

export default Media;
