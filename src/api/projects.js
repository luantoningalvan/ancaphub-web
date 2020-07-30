import axios from './axios';

export const getProjects = () => axios.get('/projects');
export const getSingleProject = (data) => axios.get(`/projects/${data}`);
export const createProject = (data) => axios.post('/projects', data);
export const getProjectPosts = (id) => axios.get(`/projects/${id}/posts`);
export const createProjectPost = ({ project, data }) =>
  axios.post(`/projects/${project}/posts`, data);
