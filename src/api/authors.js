import axios from './axios';

export const getAuthors = () => axios.get('/authors');
export const getSingleAuthor = (id) => axios.get(`/authors/${id}`);
export const createAuthor = (data) => axios.post(`/authors`, data);
