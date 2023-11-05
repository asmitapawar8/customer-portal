import './SeamexHeader.css';
import React, { useState } from 'react';
import RestaurantCard from '../wfa';
import Card2 from './card2';
import CardHeader from './CardHeader';
import wfa from '../../assets/wfa.jpg';

const AboutUs = () => {
  const restaurants = [
    {
      name: 'Restaurant A',
      photo: wfa,
      cuisine: 'Italian',
      estimatedCost: '$30',
      description: 'Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.etur adipiscing elit.',
    },
    // Add more restaurant objects here
  ];

  const [isCardVisible, setCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setCardVisible(!isCardVisible);
  };

  return (
    <div>
      <div className="about-us-container">
        <div className="about-us-content">
          <h1 id='h1' style={{ fontSize: '43px' }}>SeamEx: Creating an Delightful <br></br>Employee Experience!!</h1>
          <p id='p1'>
            We serve as the backbone of the Aditya Birla Group, providing captive HR shared services.
            <br></br>We play a crucial role in supporting the ABG's global workforce and contributing to its growth and success.
          </p>
        </div>
        <br />
        <h1
          className='service-areas-header'
          style={{ fontSize: '23px', cursor: 'pointer' }}
          onClick={toggleCardVisibility}> Services We Offer.. &nbsp;<i className="fas fa-hand-pointer"></i></h1>
        {isCardVisible && <CardHeader />}
      </div>
      <div className='container'>
        <div className='card-container'>
          <div className="star-container">
            <div className="left-cards">
              <div className="abc">
                <div className="restaurant-container">
                  {restaurants.map((restaurant, index) => (
                    <RestaurantCard key={index} restaurant={restaurant} />
                  ))}
                </div>
              </div>
              <div className="abc">
                <div className="restaurant-container">
                  {restaurants.map((restaurant, index) => (
                    <RestaurantCard key={index} restaurant={restaurant} />
                  ))}
                </div>
              </div>
              <div className="abc">
                <Card2 title="Card Title"
                  description="This is a short description of the card."
                  fullDescription="This is the full description of the card. It provides more details about the card's content."
                  image="/assets/card_1.jpg" />
              </div>
            </div>
            <div className="abc">
              <div className="restaurant-container">
                {restaurants.map((restaurant, index) => (
                  <RestaurantCard key={index} restaurant={restaurant} />
                ))}
              </div>
            </div>
          </div>
          <div className="right-cards">
            <div className="abc">
              <Card2 title="Card Title"
                description="This is a short description of the card."
                fullDescription="This is the full description of the card. It provides more details about the card's content."
                image="/assets/card_1.jpg" />
            </div>
            <div className="abc">
              <Card2 title="Card Title"
                description="This is a short description of the card."
                fullDescription="This is the full description of the card. It provides more details about the card's content."
                image="/assets/card_1.jpg" />
            </div>
            <div className="abc">
              <Card2 title="Card Title"
                description="This is a short description of the card."
                fullDescription="This is the full description of the card. It provides more details about the card's content."
                image="/assets/card_1.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
