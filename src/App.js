import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Assuming you're using BrowserRouter

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Seamex  from './components/WhatWeDo/SeamexHeader'; 
import Media from './components/Gallery/Media';
import Services from './components/Services/Services';

// import Card1 from './components/card1';
import Card2 from './components/WhatWeDo/card2'
import Card3 from './components/card3';
import Card4 from './components/WhatWeDo/CardHeader';
import RestaurantCard from './components/wfa';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
     < Route path="/media" element={<Media/>} />
     <Route path="/servicesWWD" element={<Services/>}/>

        {/* <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        <Route path="*" element={<Nopage />} /> */}
      </Routes>
      {/* <Seamex></Seamex> */}
      <Footer/>
    </Router>
  );
}


export default App;

