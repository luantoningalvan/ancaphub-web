import axios from './axios';

export const getProjects = () => axios.get('/library');
export const getSingleProject = (data) => axios.get(`/library/${data.itemId}`);
export const createProject = (data) => axios.post('/library', data);
