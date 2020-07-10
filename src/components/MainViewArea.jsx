import React, { useState } from 'react';
import styled from 'styled-components';

import UserList from './UserList';
import DetailedPlantView from './DetailedPlantView';

export default function MainViewArea() {
  const [selectedPlant, setSelectedPlant] = useState();

  return (
    <MainViewWrapper>
      <UserList setSelectedPlant={setSelectedPlant} />
      <DetailedPlantView selectedPlant={selectedPlant} />
    </MainViewWrapper>
  );
}

const MainViewWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
