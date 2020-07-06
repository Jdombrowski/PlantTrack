import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Wrapper from './baseComponents/Wrapper';

function UserList() {
  const [users, setUsers] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userPlants, setUserPlants] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`http://localhost:9000/plants/owner/${currentUser.id}`)
        .then((res) => setUserPlants(res.data))
        .catch((err) => console.log(err));
    }
  }, [currentUser]);

  return (
    <div>
      <UserWrapper>
        {currentUser && <Wrapper>{currentUser.username}</Wrapper>}
        {users &&
          users.map((user, key) => (
            <li
              onClick={() => {
                setCurrentUser(user);
              }}
              key={key}
            >
              {user.username}
            </li>
          ))}
      </UserWrapper>
      <UserWrapper>
        {currentUser && userPlants ? (
          userPlants.map((plant, key) => (
            <li key={key}>
              {plant.name}
              <dl>Type: {plant.type}</dl>
              <dl>Location: {plant.location_preference}</dl>
            </li>
          ))
        ) : (
          <div>
            {currentUser && currentUser.name} doesn't have any registered plants
          </div>
        )}
      </UserWrapper>
    </div>
  );
}

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 50%;
  border: 1px black solid;
`;

const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default UserList;
