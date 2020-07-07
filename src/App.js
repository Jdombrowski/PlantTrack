import React from 'react';
import UserList from './components/UserList';
import PlantForm from './components/PlantForm';
import './App.css';

function App() {
  return (
    <div>
      <PlantForm />
      <div>
        <UserList />
      </div>
    </div>
  );
}

export default App;
