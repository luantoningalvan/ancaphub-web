import axios from './axios';

export const getLastChats = () => axios.get('/chats');
