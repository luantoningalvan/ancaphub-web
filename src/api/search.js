import axios from './axios';

export const searchTerm = (term) => axios.get(`/search?term=${term}`);
export const searchNearbyUsers = (data) => axios.post('/location/nearby', data);

/**
 * Looks for users to be mentioned and returns a formatted response
 * @param string term Search term (an username, normally)
 */
export const searchMention = (term) =>
  axios.get(`/search/mention?term=${term}`);
