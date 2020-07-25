export const Types = {
  CREATE_PROJECT_REQUEST: 'projects/create_project_request',
  CREATE_PROJECT_SUCCESS: 'projects/create_project_success',
  GET_PROJECTS_REQUEST: 'projects/get_projects_request',
  GET_PROJECTS_SUCCESS: 'projects/get_projects_success',
  GET_SINGLE_PROJECT_REQUEST: 'projects/get_single_project_request',
  GET_SINGLE_PROJECT_SUCCESS: 'projects/get_single_project_success',
  PROJECTS_ERROR: 'projects/projects_error',
};

export const createProjectRequest = (data) => ({
  type: Types.CREATE_PROJECT_REQUEST,
  payload: data,
});

export const createProjectSuccess = (data) => ({
  type: Types.CREATE_PROJECT_SUCCESS,
  payload: data,
});

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

export const projectsError = (data) => ({
  type: Types.PROJECTS_ERROR,
  payload: data,
});
