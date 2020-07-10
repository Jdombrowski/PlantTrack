import React from 'react';
import styled from 'styled-components';

import MainViewArea from './components/MainViewArea';
import img from './components/images/poly-background.png';
import Header from './components/Header';

function App() {
  return (
    <Background>
      <Header />
      <MainViewArea />
    </Background>
  );
}

const Background = styled.div`
  background-image: url(${img});
  color: #ebebd3;
  display: flex;
  flex-direction: column;
  height: 1000px;
  justify-contet: center;
  width: 100%;
`;

export default App;
