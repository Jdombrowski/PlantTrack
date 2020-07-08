import axios from 'axios';

export const createPlant = async (plant) => {
  axios
    .post('http://localhost:9000/plants/', plant)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
};
