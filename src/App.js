import React from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from "./Travel";
import Travels from "./Travels";
// const homer = {
//   image: "https://giantbomb1.cbsistatic.com/uploads/scale_medium/0/4/12135-homer_simpson.gif",
//   firstName : "Estoy dsd el spread operator",
//   lastName : "Simpson" 
// }
//  const bart = {
//   image: "https://giantbomb1.cbsistatic.com/uploads/scale_medium/0/4/12135-homer_simpson.gif",
//   firstName : "Estoy dsd el segundo operator",
//   lastName : "Simpson" 
//  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Holi 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Travel
        destination="Lisbon"
        country="Portugal"
        photo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/CastleSaintGeorge.jpg/700px-CastleSaintGeorge.jpg"
        distance="like to the moon and back"
      />
      <Travel
        destination="Madrid"
        country="Spain"
        photo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Palacio_Buen_Retiro_Leonardo.jpg/700px-Palacio_Buen_Retiro_Leonardo.jpg"
        distance="so close"
      />
    <Travels/>
     
    </div>
  );
}

export default App;
