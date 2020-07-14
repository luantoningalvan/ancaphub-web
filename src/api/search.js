import axios from './axios';

export const searchTerm = (term) => axios.get(`/search?term=${term}`);
export const serachNearbyUsers = (data) => axios.post('/search/nearby', data);

/**
 * Looks for users to be mentioned and returns a formatted response
 * @param string term Search term (an username, normally)
 */
export const searchMention = (term) =>
  axios.get(`/search/mention?term=${term}`);
