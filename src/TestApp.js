import './App.css';
import Seamex  from './components/WhatWeDo/SeamexHeader'; 
// import Card1 from './components/card1';
import Card2 from './components/card2'
import Card3 from './components/card3';
import Card4 from './components/card4';
import RestaurantCard from './components/wfa';

const App = () => {
  const restaurants = [
    {
      name: 'Restaurant A',
      photo: '/assets/wfa.jpg',
      cuisine: 'Italian',
      estimatedCost: '$30',
      description: 'Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.etur adipiscing elit.',
    },
    // Add more restaurant objects here
  ];

  return (
    
    <div className="App">
      <h1>Customer Portal</h1>

    
                  <Seamex></Seamex>
      {/* <Card1 title="Manage Hire-To-Retire Lifecycle"
        description="This is the card description. You can add more information here."
        image="/assets/card_1.jpg"/> */}

        
<div className='container'>
<div className='card-container'>

<div className="restaurant-container">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>

  <Card2 title="Card Title"
  description="This is a short description of the card."
  fullDescription="This is the full description of the card. It provides more details about the card's content."
  image="/assets/card_1.jpg"/>

        <Card4
          title="Service 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

       <Card3  title="Card 3 Title"
        description="This is the short description for Card 3."
        fullDescription="This is the full description for Card 3. It provides more details about the content of Card 3."
        image="/assets/card_1.jpg" />

      <Card2 title="Card Title"
  description="This is a short description of the card."
  fullDescription="This is the full description of the card. It provides more details about the card's content."
  image="/assets/card_1.jpg"/>
</div>

</div>

<footer id="ft1">
        <p>&copy; 2023 Seamex ABMCPL</p>
    </footer>
  </div>
  );
};

export default App;

