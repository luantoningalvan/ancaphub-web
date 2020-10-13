import axios from './axios';

export const authUser = ({ email, password }) =>
  axios.post('/sessions', {
    email,
    password,
  });

export const loadUser = () => axios.get('/sessions');
