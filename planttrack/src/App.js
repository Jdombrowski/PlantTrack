import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [plants, setPlants] = useState(false);
  const [currentPlant, setCurrentPlant] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/plants`)
      .then((res) => setPlants(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        {currentPlant && <div>{currentPlant.name}</div>}
        <img src={logo} className='App-logo' alt='logo' />
        {plants &&
          plants.map((plant, key) => (
            <li
              onClick={() => {
                setCurrentPlant(plant);
              }}
              key={key}
            >
              {plant.name} : {plant.type}
            </li>
          ))}
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
