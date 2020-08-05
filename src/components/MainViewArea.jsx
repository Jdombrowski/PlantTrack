import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import UserList from './UserList';
import PhotoGrid from './PhotoGrid';

export default function MainViewArea() {
  const [selectedPlantId, setSelectedPlantId] = useState();
  const [userPlants, setUserPlants] = useState();

  return (
    <MainViewWrapper>
      <Header />
      <GridWrapper>
        <UserList
          setSelectedPlantId={setSelectedPlantId}
          setUserPlants={setUserPlants}
        />
        {userPlants && <PhotoGrid userPlants={userPlants} />}
      </GridWrapper>
      <Header />
    </MainViewWrapper>
  );
}

const MainViewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  height: 100%;
  width: 100%;
  outline: 1px solid #ebebd3;
`;

const GridWrapper = styled.div`
  width: 100%;
  height: 100%;
  outline: 1px solid #ebebd3;
`;
