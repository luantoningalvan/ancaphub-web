import axios from './axios';

export const getUsers = ({ page = 1, limit = 20 }) => {
  return axios.get('/users', { params: { page, limit } });
};

export const getSingleUser = (payload) => axios.get(`users/${payload}`);

export const followUser = (payload) => axios.post(`relationships/${payload}`);
export const unfollowUser = (payload) =>
  axios.delete(`relationships/${payload}`);
export const getUserFollowers = (payload) =>
  axios.get(`relationships/${payload}/followers`);
export const getUserFollowing = (payload) =>
  axios.get(`relationships/${payload}/following`);

export const createUser = ({ name, username, email, password, code }) =>
  axios.post('/users', {
    name,
    username,
    email,
    password,
    code,
  });

export const updateUserInfo = ({ name, bio, birthday, location, url }) =>
  axios.put('/users/profile', {
    name,
    bio,
    birthday,
    location,
    url,
  });

export const updateUserAvatar = (data) => axios.patch('/users/avatar', data);
export const updateUserCover = (data) => axios.patch('/users/cover', data);
