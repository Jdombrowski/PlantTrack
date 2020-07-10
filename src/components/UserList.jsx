import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';

import PlantList from './PlantList';
import MaterialTable from './MaterialTable';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
}));

export default function UserList() {
  const classes = useStyles();
  const rowNames = ['Name', 'Type', 'Location', 'Light', 'Age'];
  const [users, setUsers] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [userPlants, setUserPlants] = useState();

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

  const handleChange = (event) => {
    setCurrentUser(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>Username</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={currentUser}
          onChange={handleChange}
        >
          {users &&
            users.map((user) => (
              <MenuItem key={user.id} value={user}>
                {user.username}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <UserWrapper>
        {/* <PlantList data={userPlants} rowNames={rowNames} /> */}
        {userPlants && <MaterialTable data={userPlants} />}
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
