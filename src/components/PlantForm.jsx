import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

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
    // {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
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
  );
}
