import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Wrapper from './baseComponents/Wrapper';

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
    <PlantWrapper>
      {currentPlant && <Wrapper>{currentPlant.name}</Wrapper>}
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
    </PlantWrapper>
  );
}

const PlantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 50%;
  border: 1px black solid;
`;

export default PlantList;
