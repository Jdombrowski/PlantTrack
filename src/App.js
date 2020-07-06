import React from 'react';
import PlantList from './components/PlantList';
import UserList from './components/UserList';
import PlantForm from './components/PlantForm';
import './App.css';

function App() {
  return (
    <div>
      <PlantForm />
      <PlantList />
      <UserList />
    </div>
  );
}

export default App;
