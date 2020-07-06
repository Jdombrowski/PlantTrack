import { useForm } from 'react-hook-form';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { createPlant } from '../lib/plantActions';

export default function PlantForm() {
  const { register, handleSubmit, errors } = useForm();
  const [users, setUsers] = useState(false);

  const onSubmit = (data) => {
    createPlant(data);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:9000/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='name'
          defaultValue='Name'
          ref={register({ required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <select name='location_preference' ref={register}>
          <option value='full-sun'>Full Sun</option>
          <option value='partial-sun'>Partial Sun</option>
          <option value='shade'>Full Shade</option>
          <option value='bright-wo-direct'>Bright without direct light</option>
        </select>
        <select name='location_preference' ref={register}>
          <option value='indoors'>indoors</option>
          <option value='outdoors'>outdoors</option>
        </select>
        <input name='type' defaultValue='type' ref={register} />
        <select name='user_id' ref={register}>
          {users &&
            users.map((user, key) => (
              <option value={user.id} key={key}>
                {user.username}
              </option>
            ))}
        </select>
        <input type='submit' />
      </form>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  display: flex;
  height: auto;
  width: 170px;
  border: 1px black solid;
`;
