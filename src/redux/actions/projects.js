export const Types = {
  GET_PROJECTS_REQUEST: "projects/get_projects_request",
  GET_PROJECTS_SUCCESS: "projects/get_projects_success",
  GET_SINGLE_PROJECT_REQUEST: "projects/get_single_project_request",
  GET_SINGLE_PROJECT_SUCCESS: "projects/get_single_project_success",
  CREATE_PROJECT_REQUEST: "projects/create_project_request",
  CREATE_PROJECT_SUCCESS: "projects/create_project_success",
  UPDATE_PROJECT_REQUEST: "projects/update_project_request",
  UPDATE_PROJECT_SUCCESS: "projects/update_project_success",
  REMOVE_PROJECT_REQUEST: "projects/remove_project_request",
  REMOVE_PROJECT_SUCCESS: "projects/remove_project_success",
  UPDATE_PROJECT_AVATAR_REQUEST: "projects/update_project_avatar_request",
  UPDATE_PROJECT_AVATAR_SUCCESS: "projects/update_project_avatar_success",
  REMOVE_PROJECT_AVATAR_REQUEST: "projects/remove_project_avatar_request",
  REMOVE_PROJECT_AVATAR_SUCCESS: "projects/remove_project_avatar_success",
  UPDATE_PROJECT_COVER_REQUEST: "projects/update_project_cover_request",
  UPDATE_PROJECT_COVER_SUCCESS: "projects/update_project_cover_success",
  REMOVE_PROJECT_COVER_REQUEST: "projects/remove_project_cover_request",
  REMOVE_PROJECT_COVER_SUCCESS: "projects/remove_project_cover_success",
  UPDATE_PROJECT_ABOUT_REQUEST: "projects/update_project_about_request",
  UPDATE_PROJECT_ABOUT_SUCCESS: "projects/update_project_about_success",
  ADD_PROJECT_DONATION_REQUEST: "projects/add_project_donation_request",
  ADD_PROJECT_DONATION_SUCCESS: "projects/add_project_donation_success",
  REMOVE_PROJECT_DONATION_REQUEST: "projects/remove_project_donation_request",
  REMOVE_PROJECT_DONATION_SUCCESS: "projects/remove_project_donation_success",
  ADD_PROJECT_FAQ_REQUEST: "projects/add_project_faq_request",
  ADD_PROJECT_FAQ_SUCCESS: "projects/add_project_faq_success",
  REMOVE_PROJECT_FAQ_REQUEST: "projects/remove_project_faq_request",
  REMOVE_PROJECT_FAQ_SUCCESS: "projects/remove_project_faq_success",
  GET_PROJECT_POSTS_REQUEST: "projects/get_project_posts_request",
  GET_PROJECT_POSTS_SUCCESS: "projects/get_project_posts_success",
  GET_SINGLE_PROJECT_POST_REQUEST: "projects/get_single_project_post_request",
  GET_SINGLE_PROJECT_POST_SUCCESS: "projects/get_single_project_post_success",
  CREATE_PROJECT_POST_REQUEST: "projects/create_project_post_request",
  CREATE_PROJECT_POST_SUCCESS: "projects/create_project_post_success",
  UPDATE_PROJECT_POST_REQUEST: "projects/update_project_post_request",
  UPDATE_PROJECT_POST_SUCCESS: "projects/update_project_post_success",
  REMOVE_PROJECT_POST_REQUEST: "projects/remove_project_post_request",
  REMOVE_PROJECT_POST_SUCCESS: "projects/remove_project_post_success",
  FOLLOW_PROJECT_REQUEST: "projects/follow_project_request",
  FOLLOW_PROJECT_SUCCESS: "projects/follow_project_success",
  PROJECTS_ERROR: "projects/projects_error",
};

export const getProjectsRequest = (data) => ({
  type: Types.GET_PROJECTS_REQUEST,
  payload: data,
});

export const getProjectsSuccess = (data) => ({
  type: Types.GET_PROJECTS_SUCCESS,
  payload: data,
});

export const getSingleProjectRequest = (data) => ({
  type: Types.GET_SINGLE_PROJECT_REQUEST,
  payload: data,
});

export const getSingleProjectSuccess = (data) => ({
  type: Types.GET_SINGLE_PROJECT_SUCCESS,
  payload: data,
});

export const createProjectRequest = (data) => ({
  type: Types.CREATE_PROJECT_REQUEST,
  payload: data,
});

export const createProjectSuccess = (data) => ({
  type: Types.CREATE_PROJECT_SUCCESS,
  payload: data,
});

export const updateProjectRequest = (data) => ({
  type: Types.UPDATE_PROJECT_REQUEST,
  payload: data,
});

export const updateProjectSuccess = (data) => ({
  type: Types.UPDATE_PROJECT_SUCCESS,
  payload: data,
});

export const removeProjectRequest = (data) => ({
  type: Types.REMOVE_PROJECT_REQUEST,
  payload: data,
});

export const removeProjectSuccess = (data) => ({
  type: Types.REMOVE_PROJECT_SUCCESS,
  payload: data,
});

export const updateProjectAvatarRequest = (data) => ({
  type: Types.UPDATE_PROJECT_AVATAR_REQUEST,
  payload: data,
});

export const updateProjectAvatarSuccess = (data) => ({
  type: Types.UPDATE_PROJECT_AVATAR_SUCCESS,
  payload: data,
});

export const removeProjectAvatarRequest = (data) => ({
  type: Types.REMOVE_PROJECT_AVATAR_REQUEST,
  payload: data,
});

export const removeProjectAvatarSuccess = (data) => ({
  type: Types.REMOVE_PROJECT_AVATAR_SUCCESS,
  payload: data,
});

export const updateProjectCoverRequest = (data) => ({
  type: Types.UPDATE_PROJECT_COVER_REQUEST,
  payload: data,
});

export const updateProjectCoverSuccess = (data) => ({
  type: Types.UPDATE_PROJECT_COVER_SUCCESS,
  payload: data,
});

export const removeProjectCoverRequest = (data) => ({
  type: Types.REMOVE_PROJECT_COVER_REQUEST,
  payload: data,
});

export const removeProjectCoverSuccess = (data) => ({
  type: Types.REMOVE_PROJECT_COVER_SUCCESS,
  payload: data,
});

export const updateProjectAboutRequest = (data) => ({
  type: Types.UPDATE_PROJECT_ABOUT_REQUEST,
  payload: data,
});

export const updateProjectAboutSuccess = (data) => ({
  type: Types.UPDATE_PROJECT_ABOUT_SUCCESS,
  payload: data,
});

export const addProjectDonationRequest = (data) => ({
  type: Types.ADD_PROJECT_DONATION_REQUEST,
  payload: data,
});

export const addProjectDonationSuccess = (data) => ({
  type: Types.ADD_PROJECT_DONATION_SUCCESS,
  payload: data,
});

export const removeProjectDonationRequest = (data) => ({
  type: Types.REMOVE_PROJECT_DONATION_REQUEST,
  payload: data,
});

export const removeProjectDonationSuccess = (data) => ({
  type: Types.REMOVE_PROJECT_DONATION_SUCCESS,
  payload: data,
});

export const addProjectFAQRequest = (data) => ({
  type: Types.ADD_PROJECT_FAQ_REQUEST,
  payload: data,
});

export const addProjectFAQSuccess = (data) => ({
  type: Types.ADD_PROJECT_FAQ_SUCCESS,
  payload: data,
});

export const removeProjectFAQRequest = (data) => ({
  type: Types.REMOVE_PROJECT_FAQ_REQUEST,
  payload: data,
});

export const removeProjectFAQSuccess = (data) => ({
  type: Types.REMOVE_PROJECT_FAQ_SUCCESS,
  payload: data,
});

export const getProjectPostsRequest = (data) => ({
  type: Types.GET_PROJECT_POSTS_REQUEST,
  payload: data,
});

export const getProjectPostsSuccess = (data) => ({
  type: Types.GET_PROJECT_POSTS_SUCCESS,
  payload: data,
});

export const getSingleProjectPostRequest = (data) => ({
  type: Types.GET_SINGLE_PROJECT_POST_REQUEST,
  payload: data,
});

export const getSingleProjectPostSuccess = (data) => ({
  type: Types.GET_SINGLE_PROJECT_POST_SUCCESS,
  payload: data,
});

export const createProjectPostRequest = (data) => ({
  type: Types.CREATE_PROJECT_POST_REQUEST,
  payload: data,
});

export const createProjectPostSuccess = (data) => ({
  type: Types.CREATE_PROJECT_POST_SUCCESS,
  payload: data,
});

export const removeProjectPostRequest = (data) => ({
  type: Types.REMOVE_PROJECT_POST_REQUEST,
  payload: data,
});

export const removeProjectPostSuccess = (data) => ({
  type: Types.REMOVE_PROJECT_POST_SUCCESS,
  payload: data,
});

export const updateProjectPostRequest = (data) => ({
  type: Types.UPDATE_PROJECT_POST_REQUEST,
  payload: data,
});

export const updateProjectPostSuccess = (data) => ({
  type: Types.UPDATE_PROJECT_POST_SUCCESS,
  payload: data,
});

export const followProjectRequest = (data) => ({
  type: Types.FOLLOW_PROJECT_REQUEST,
  payload: data,
});

export const followProjectSuccess = (data) => ({
  type: Types.FOLLOW_PROJECT_SUCCESS,
  payload: data,
});

export const projectsError = (data) => ({
  type: Types.PROJECTS_ERROR,
  payload: data,
});
