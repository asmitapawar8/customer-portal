import './SeamexHeader.css'
import React, { useState } from 'react';
import RestaurantCard from '../wfa';
import Card2 from './card2'
import Card3 from '../../components/card3';
import CardHeader from './CardHeader';
import wfa from '../../assets/wfa.jpg'


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

 
  return (
    <div>
        <div className="about-us-container">
      <div className="about-us-content">
        <h1 id='h1' style={{fontSize:'45px'}}>SeamEx:  &nbsp;Creating an Delightful <br></br>Employee Experience!!</h1>
        <p id='p1'>
        We serve as the backbone of the Aditya Birla Group, providing captive HR shared services. 
        <br></br>We play a crucial role in supporting the ABG's global workforce and contributing to its growth and success.
        </p>
      </div>
      <br/>
      <h1 className='service-areas-header' style={{fontSize:'30px'}}>Our Main Service Areas</h1>
      <CardHeader></CardHeader>
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
    {/* <div className="abc">
        <Card2 title="Card Title"
           description="This is a short description of the card."
            fullDescription="This is the full description of the card. It provides more details about the card's content."
            image="/assets/card_1.jpg"/>
    </div> */}

<div className="abc">
       <div className="restaurant-container">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
</div>
    {/* <div className="abc">
        <Card2 title="Card Title"
           description="This is a short description of the card."
            fullDescription="This is the full description of the card. It provides more details about the card's content."
            image="/assets/card_1.jpg"/>
    </div> */}

    <div className="abc">
         <Card2 title="Card Title"
           description="This is a short description of the card."
            fullDescription="This is the full description of the card. It provides more details about the card's content."
            image="/assets/card_1.jpg"/>
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
            image="/assets/card_1.jpg"/>
    </div>

    <div className="abc">
          <Card2 title="Card Title"
           description="This is a short description of the card."
            fullDescription="This is the full description of the card. It provides more details about the card's content."
            image="/assets/card_1.jpg"/>
    </div>

    <div className="abc">
          <Card2 title="Card Title"
           description="This is a short description of the card."
            fullDescription="This is the full description of the card. It provides more details about the card's content."
            image="/assets/card_1.jpg"/>
    </div>
  </div>

  </div>

</div>

  {/* <Card2 title="Card Title"
  description="This is a short description of the card."
  fullDescription="This is the full description of the card. It provides more details about the card's content."
  image="/assets/card_1.jpg"/>

       

       <Card3  title="Card 3 Title"
        description="This is the short description for Card 3."
        fullDescription="This is the full description for Card 3. It provides more details about the content of Card 3."
        image="/assets/card_1.jpg" />

      <Card2 title="Card Title"
  description="This is a short description of the card."
  fullDescription="This is the full description of the card. It provides more details about the card's content."
  image="/assets/card_1.jpg"/> */}
</div>
  );
}

export default AboutUs;


//       <Card1 title="Manage Hire-To-Retire Lifecycle"
//         description="This is the card description. You can add more information here."
//         image="/assets/card_1.jpg"/> 

        


// <footer id="ft1">
//         <p>&copy; 2023 Seamex ABMCPL</p>
//     </footer> 
//   // </div>
// //   );
// // };


// const AboutUs = () => {
//   return (
//     <div>
//     <div className="about-us-container">
//       <div className="about-us-content">
//         <h1 id='h1' style={{fontSize:'45px'}}>SeamEx:  &nbsp;Creating an Delightful <br></br>Employee Experience!!</h1>
//         <p id='p1'>
//         We serve as the backbone of the Aditya Birla Group, providing captive HR shared services. 
//         <br></br>We play a crucial role in supporting the ABG's global workforce and contributing to its growth and success.
//         </p>
//       </div>
//     </div>
//     <h1 className='service-areas-header' style={{fontSize:'30px'}}>Our Main Service Areas</h1>




//     </div>
//   );
// };


// // function Seamex(){  
// // return(
// // <div >  
// //     <body>
// //     <header>
// //     &nbsp; 
// //     <div id='div1'>
// //         <h1 className="container" >Seamex: Creating a delightful employee experience</h1>
// //         <p id='par1'> Serves as the Backbone of Aditya Birla Group as a captive HR shared services</p>
// //         <p>Plays a crucial role in supporting the ABG's Global Workforce & contributing to its growth & success</p>
// //     </div>
// //     </header>
// //     <p id="p1">What we do?</p>
// //     {/* <footer id="ft1">
// //         <p>&copy; 2023 Seamex ABMCPL</p>
// //     </footer> */}
// //     </body>
// // </div>
// // );
// // }
// // export default Seamex;


import './SeamexHeader.css'
import React from 'react';
import RestaurantCard from '../wfa';
import Card2 from './card2'
import CardHeader from './CardHeader';
import wfa from '../../assets/wfa.jpg'


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

  return (
    <div>
        <div className="about-us-container">
      <div className="about-us-content">
        <h1 id='h1' style={{fontSize:'43px'}}>SeamEx: Creating an Delightful <br></br>Employee Experience!!</h1>
        <p id='p1'>
        We serve as the backbone of the Aditya Birla Group, providing captive HR shared services. 
        <br></br>We play a crucial role in supporting the ABG's global workforce and contributing to its growth and success.
        </p>
      </div>
      <br/>
      <h1 className='service-areas-header' style={{fontSize:'25px'}}>Our Main Service Areas</h1>
      {/* <h1
          className='service-areas-header'
          style={{ fontSize: '25px', cursor: 'pointer' }}>
            <a href="#main-service-areas" onClick={toggleCardVisibility}>   
            <i className="fas fa-hand-pointer"></i> Our Main Service Areas</a> 
          </h1> */}
      <CardHeader></CardHeader>
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
            image="/assets/card_1.jpg"/>
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
            image="/assets/card_1.jpg"/>
    </div>

    <div className="abc">
          <Card2 title="Card Title"
           description="This is a short description of the card."
            fullDescription="This is the full description of the card. It provides more details about the card's content."
            image="/assets/card_1.jpg"/>
    </div>

    <div className="abc">
          <Card2 title="Card Title"
           description="This is a short description of the card."
            fullDescription="This is the full description of the card. It provides more details about the card's content."
            image="/assets/card_1.jpg"/>
    </div>
  </div>

  </div>

</div>
</div>
  );
}

export default AboutUs;



