import axios from './axios';

export const getProjects = () => axios.get('/projects');
export const getSingleProject = (data) => axios.get(`/projects/${data}`);
export const createProject = (data) => axios.post('/projects', data);
export const updateProject = ({ id, data }) =>
  axios.put(`/projects/${id}`, data);
export const updateProjectAvatar = ({ id, data }) =>
  axios.patch(`/projects/${id}/avatar`, data);
export const removeProjectAvatar = (id) =>
  axios.delete(`/projects/${id}/avatar`);
export const updateProjectCover = ({ id, data }) =>
  axios.patch(`/projects/${id}/cover`, data);
export const removeProjectCover = (id) => axios.delete(`/projects/${id}/cover`);
export const getProjectPosts = (id) => axios.get(`/projects/${id}/posts`);
export const createProjectPost = ({ project, data }) =>
  axios.post(`/projects/${project}/posts`, data);
