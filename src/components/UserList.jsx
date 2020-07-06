import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Wrapper from './baseComponents/Wrapper';

function UserList() {
  const [users, setUsers] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
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
  );
}

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: autp;
  border: 1px black solid;
`;

export default UserList;
