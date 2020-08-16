export const Types = {
  CREATE_PROJECT_REQUEST: 'projects/create_project_request',
  CREATE_PROJECT_SUCCESS: 'projects/create_project_success',
  UPDATE_PROJECT_REQUEST: 'projects/update_project_request',
  UPDATE_PROJECT_SUCCESS: 'projects/update_project_success',
  UPDATE_PROJECT_AVATAR_REQUEST: 'projects/update_project_avatar_request',
  UPDATE_PROJECT_AVATAR_SUCCESS: 'projects/update_project_avatar_success',
  REMOVE_PROJECT_AVATAR_REQUEST: 'projects/remove_project_avatar_request',
  REMOVE_PROJECT_AVATAR_SUCCESS: 'projects/remove_project_avatar_success',
  UPDATE_PROJECT_COVER_REQUEST: 'projects/update_project_cover_request',
  UPDATE_PROJECT_COVER_SUCCESS: 'projects/update_project_cover_success',
  REMOVE_PROJECT_COVER_REQUEST: 'projects/remove_project_cover_request',
  REMOVE_PROJECT_COVER_SUCCESS: 'projects/remove_project_cover_success',
  GET_PROJECTS_REQUEST: 'projects/get_projects_request',
  GET_PROJECTS_SUCCESS: 'projects/get_projects_success',
  GET_SINGLE_PROJECT_REQUEST: 'projects/get_single_project_request',
  GET_SINGLE_PROJECT_SUCCESS: 'projects/get_single_project_success',
  GET_PROJECT_POSTS_REQUEST: 'projects/get_project_posts_request',
  GET_PROJECT_POSTS_SUCCESS: 'projects/get_project_posts_success',
  CREATE_PROJECT_POST_REQUEST: 'projects/create_project_post_request',
  CREATE_PROJECT_POST_SUCCESS: 'projects/create_project_post_success',
  PROJECTS_ERROR: 'projects/projects_error',
};

export const getProjectsRequest = (data) => ({
  type: Types.GET_PROJECTS_REQUEST,
  payload: data,
});

export const getProjectsSuccess = (data) => ({
  type: Types.GET_PROJECTS_SUCCESS,
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

export const getSingleProjectRequest = (data) => ({
  type: Types.GET_SINGLE_PROJECT_REQUEST,
  payload: data,
});

export const getSingleProjectSuccess = (data) => ({
  type: Types.GET_SINGLE_PROJECT_SUCCESS,
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

export const createProjectPostRequest = (data) => ({
  type: Types.CREATE_PROJECT_POST_REQUEST,
  payload: data,
});

export const createProjectPostSuccess = (data) => ({
  type: Types.CREATE_PROJECT_POST_SUCCESS,
  payload: data,
});

export const projectsError = (data) => ({
  type: Types.PROJECTS_ERROR,
  payload: data,
});
