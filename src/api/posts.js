import axios from './axios';

export const createPost = (data) => axios.post('/posts', data);
export const deletePost = (postId) => axios.delete(`/posts/${postId}`);
export const likePost = (postId) => axios.post(`/posts/${postId}/favorites`);
export const unlikePost = (postId) =>
  axios.delete(`/posts/${postId}/favorites`);
export const getLikes = (postId) => axios.get(`/posts/${postId}/favorites`);
export const getFeedPosts = ({ currentPage = 1, pageSize = 5 }) =>
  axios.get('/timeline/home', { params: { currentPage, pageSize } });
export const getUserPosts = (data) => axios.get(`/timeline/profile/${data}`);
export const votePostPoll = (data) =>
  axios.post(`/posts/${data.pollId}/vote`, { vote: data.option });
