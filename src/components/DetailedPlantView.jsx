import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function DetailedPlantView(props) {
  DetailedPlantView.propTypes = {
    plantId: PropTypes.number.isRequired,
  };

  return <ViewWrapper></ViewWrapper>;
}

const ViewWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
