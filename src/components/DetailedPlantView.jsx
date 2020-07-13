import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function DetailedPlantView(props) {
  DetailedPlantView.propTypes = {
    selectedPlantId: PropTypes.number,
  };

  const [currentPlant, setCurrentPlant] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/plants/plant/${props.selectedPlantId}`)
      .then((res) => {
        setCurrentPlant(res.data);
      })
      .catch((err) => console.log(err));
  }, [props.selectedPlantId]);

  if (currentPlant) {
    return (
      <Outline>
        <InnerOutline>
          <Name>{currentPlant.name}</Name>
          <Detail>{currentPlant.type}</Detail>
          <Detail>{currentPlant.light_requirement}</Detail>
          <Detail>{currentPlant.location_preference}</Detail>
          <Detail>{currentPlant.created_at}</Detail>
        </InnerOutline>
      </Outline>
    );
  } else {
    return <div />;
  }
}

const Detail = styled.div`
  color: #ebebd3;
  font-size: 24px;
  padding: 20px;
  border-bottom: 1px solid #ebebd3;
`;

const Name = styled.div`
  color: #ebebd3;
  font-size: 36px;
  padding: 20px;
  border-bottom: 1px solid #ebebd3;
`;

const Outline = styled.div`
  height: 100%;
  width: 50%;
  margin: 30px;
`;

const InnerOutline = styled.div`
  height: 100%;
  width: 100%;
  outline: 1px solid #ebebd3;
`;
