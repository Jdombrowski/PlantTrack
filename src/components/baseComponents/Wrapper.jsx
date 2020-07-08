import React from 'react';
import styled from 'styled-components';

export default function Wrapper(props) {
  return <Border>{props.children}</Border>;
}

const Border = styled.div`
  border: 1px black solid;
  display: flex;
  height: auto;
  width: auto;
`;
