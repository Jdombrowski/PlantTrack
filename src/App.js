import React from 'react';
import styled from 'styled-components';

import img from './components/images/poly-background.png';
import UserList from './components/UserList';
import Header from './components/Header';

function App() {
  return (
    <Background>
      <Header />
      <MainViewArea>
        <UserList />
      </MainViewArea>
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

const MainViewArea = styled.div`
  height: 100%;
  width: 100%;
`;

export default App;
