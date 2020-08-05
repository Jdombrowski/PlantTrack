import React from 'react';
import styled from 'styled-components';

import MainViewArea from './components/MainViewArea';

function App() {
  return (
    <Background>
      <MainViewArea />
    </Background>
  );
}

const Background = styled.div`
  background-color: black;
  color: #ebebd3;
  display: flex;
  flex-direction: column;
  height: 1000px;
  justify-contet: center;
  width: 100%;
`;

export default App;
