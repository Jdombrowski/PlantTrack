import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';

import EnhancedTable from './EnhancedTable';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
}));

export default function UserList(props) {
  UserList.propTypes = {
    setSelectedPlant: PropTypes.func.isRequired,
  };
  const classes = useStyles();
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
      <UserWrapper>
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
        {userPlants && (
          <EnhancedTable
            data={userPlants}
            setSelectedPlant={props.setSelectedPlant}
          />
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
  padding: 30px;
`;
