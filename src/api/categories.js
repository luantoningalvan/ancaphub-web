import axios from './axios';

// eslint-disable-next-line import/prefer-default-export
export const getCategories = () => axios.get('/categories');
