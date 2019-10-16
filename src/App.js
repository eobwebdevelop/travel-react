import React from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      photo="https://www.everysteph.com/wp-content/uploads/2019/01/things-to-do-in-lisbon-featured-1440x1000.jpg"
      distance="like to the moon and back"
      />
      <Travel
      destination="Madrid"
      country="Spain"
      photo="https://media.gettyimages.com/photos/aerial-view-and-skyline-of-madrid-at-dusk-spain-europe-picture-id951917136?s=2048x2048"
      distance="so close"
      />

    </div>
  );
}

export default App;
