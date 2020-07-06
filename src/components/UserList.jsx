import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      {currentUser && <div>{currentUser.username}</div>}
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
    </div>
  );
}

export default UserList;
