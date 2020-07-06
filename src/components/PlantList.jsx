import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PlantList() {
  const [plants, setPlants] = useState(false);
  const [currentPlant, setCurrentPlant] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/plants`)
      .then((res) => setPlants(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {currentPlant && <div>{currentPlant.name}</div>}
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
    </div>
  );
}

export default PlantList;
