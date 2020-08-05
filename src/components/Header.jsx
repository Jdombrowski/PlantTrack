import React from 'react';
import styled from 'styled-components';

import MonsteraLeafLogo from './icons/MonsteraLeafLogo';

export default function Header() {
  return (
    <HeaderWrapper>
      <FlexRow>
        <MonsteraLeafLogo />
        <SquiggleHover href='#'>PlantTrack</SquiggleHover>
      </FlexRow>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 20%;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SquiggleHover = styled.a`
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 0px 0px;
  border-bottom: 1px solid #ebebd3;
  color: #ebebd3;
  text-decoration: none;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23ebebd3' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
  &:hover {
    border-bottom: none;
    background-position: 0 100%;
    background-size: auto 3px;
    background-repeat: repeat-x;
    text-decoration: none;
  }
`;
