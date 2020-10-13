import axios from './axios';

export const getComments = (postId) => axios.get(`/posts/${postId}/comments`);
export const createComment = (data) =>
  axios.post(`/posts/${data.postId}/comments`, data.comment);
export const deleteComment = ({ postId, commentId }) =>
  axios.delete(`/posts/${postId}/comments/${commentId}`);
export const likeComment = (data) => axios.get(`/posts/user/${data}`);
export const replyComment = (data) => axios.get(`/posts/user/${data}`);
