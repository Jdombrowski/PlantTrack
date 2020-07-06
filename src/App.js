import React from 'react';
import PlantList from './components/PlantList';
import UserList from './components/UserList';
import PlantForm from './components/PlantForm';
import './App.css';

function App() {
  return (
    <div>
      <PlantForm />
      <div>
        <PlantList />
        <UserList />
      </div>
    </div>
  );
}

export default App;
