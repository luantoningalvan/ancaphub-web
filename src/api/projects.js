import axios from './axios';

export const getProjects = () => axios.get('/projects');
export const getSingleProject = (data) => axios.get(`/projects/${data}`);
export const createProject = (data) => axios.post('/projects', data);
