import React, { useState } from 'react';
import styled from 'styled-components';

import UserList from './UserList';
import DetailedPlantView from './DetailedPlantView';

export default function MainViewArea() {
  const [selectedPlantId, setSelectedPlantId] = useState();

  return (
    <MainViewWrapper>
      <UserList setSelectedPlantId={setSelectedPlantId} />
      <DetailedPlantView selectedPlantId={selectedPlantId} />
    </MainViewWrapper>
  );
}

const MainViewWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
