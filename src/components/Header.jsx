import React from 'react';
import styled from 'styled-components';

import MonsteraLeafLogo from './icons/MonsteraLeafLogo';

export default function Header() {
  return (
    <HeaderWrapper>
      <FlexRow>
        <AlignmentBox>
          <div>My Plants</div>
        </AlignmentBox>
        <AlignmentBox>
          <FlexRow>
            <MonsteraLeafLogo />
            PlantTrack
          </FlexRow>
        </AlignmentBox>
        <AlignmentBox>Profile</AlignmentBox>
      </FlexRow>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  background-color: #083d77;
  opacity: 0.5;
  width: 100%;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AlignmentBox = styled.div`
  color: #ebebd3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34%;
  height: 70px;
`;
