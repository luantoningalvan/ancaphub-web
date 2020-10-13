import axios from './axios';

export const getUsers = ({ page = 1, limit = 20 }) => {
  return axios.get('/users', { params: { page, limit } });
};

export const getSingleUser = (payload) => axios.get(`users/${payload}`);

export const followUser = (payload) => axios.post(`users/${payload}/follow`);
export const unfollowUser = (payload) =>
  axios.post(`users/${payload}/unfollow`);
export const getUserFollowers = (payload) =>
  axios.get(`users/${payload}/followers`);
export const getUserFollowing = (payload) =>
  axios.get(`users/${payload}/following`);

export const createUser = ({ name, username, email, password, code }) =>
  axios.post('/users', {
    name,
    username,
    email,
    password,
    code,
  });

export const updateUserInfo = ({ name, bio, birthday, currentCity, site }) =>
  axios.put('/users/profile', {
    name,
    bio,
    birthday,
    currentCity,
    site,
  });

export const updateUserAvatar = (data) => axios.patch('/users/avatar', data);
