import axios from './axios';

export const getLastChatsRequest = () => axios.get('/chats');
