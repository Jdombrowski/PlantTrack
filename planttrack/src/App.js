import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [responseText, setResponseText] = useState('TEST');

  useEffect(() => {
    fetch(`http://localhost:9000/api-status`)
      .then((res) => {
        res.json();
      })
      .then((text) => {
        setResponseText(text.status);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{responseText}</p>
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
