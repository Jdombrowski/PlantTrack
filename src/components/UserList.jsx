import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import PlantList from './PlantList';

const useStyles = makeStyles({
  table: {
    minWidth: 100,
    maxWidth: 300,
  },
});

export default function UserList() {
  const classes = useStyles();
  const rowNames = ['Name', 'Type', 'Location', 'Light', 'Age'];
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
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Username</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map((user) => (
                  <TableRow key={user.username}>
                    <TableCell
                      onClick={() => setCurrentUser(user)}
                      align='left'
                    >
                      {user.username}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </UserWrapper>
      <UserWrapper>
        <PlantList data={userPlants} rowNames={rowNames} />
      </UserWrapper>
    </div>
  );
}

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  border: 1px black solid;
`;
