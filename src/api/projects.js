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
export const updateProjectAbout = ({ id, data }) =>
  axios.patch(`/projects/${id}/about`, data);
export const removeProjectCover = (id) => axios.delete(`/projects/${id}/cover`);
export const addProjectFAQ = ({ id, data }) =>
  axios.post(`/projects/${id}/faq`, data);
export const removeProjectFAQ = ({ projectId, faqId }) =>
  axios.delete(`/projects/${projectId}/faq/${faqId}`);
export const addProjectDonation = ({ id, data }) =>
  axios.post(`/projects/${id}/donations`, data);
export const removeProjectDonation = ({ projectId, donationId }) =>
  axios.delete(`/projects/${projectId}/donations/${donationId}`);
export const getSingleProjectPost = ({ projectId, postId }) =>
  axios.get(`/projects/${projectId}/posts/${postId}`);
export const getProjectPosts = (id) => axios.get(`/projects/${id}/posts`);
export const createProjectPost = ({ project, data }) =>
  axios.post(`/projects/${project}/posts`, data);
export const updateProjectPost = ({ projectId, postId, data }) =>
  axios.put(`/projects/${projectId}/posts/${postId}`, data);
export const removeProjectPost = ({ projectId, postId }) =>
  axios.delete(`/projects/${projectId}/posts/${postId}`);
export const followProject = (projectId) =>
  axios.post(`/projects/${projectId}/follow`);
