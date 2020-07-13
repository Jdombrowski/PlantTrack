import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function DetailedPlantView(props) {
  DetailedPlantView.propTypes = {
    selectedPlantId: PropTypes.number.isRequired,
  };

  const [currentPlant, setCurrentPlant] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/plants/plant/${props.selectedPlantId}`)
      .then((res) => setCurrentPlant(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ViewWrapper>{currentPlant && <div>{currentPlant.name}</div>}</ViewWrapper>
  );
}

const ViewWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
