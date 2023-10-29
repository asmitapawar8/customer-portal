import './App.css';
import Seamex  from './components/SeamexHeader'; 
import Card1 from './components/card1';


function App() {
  return (
    <div className="App">
      <h1>Customer Portal</h1>
      <Seamex></Seamex>
      <Card1 title="Manage Hire-To-Retire Lifecycle"
        description="This is the card description. You can add more information here."
        image="/assets/card_1.jpg"/>

<footer id="ft1">
        <p>&copy; 2023 Seamex ABMCPL</p>
    </footer>
    </div>
  );
}

export default App;
