import { Types } from '../actions/projects';

const INITIAL_STATE = {
  loading: true,
  projects: [],
  project: {},
  errorMessage: '',
};

function projects(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_PROJECTS_REQUEST:
    case Types.GET_SINGLE_PROJECT_REQUEST:
      return { ...state, loading: true };
    case Types.GET_PROJECTS_SUCCESS:
    case Types.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case Types.GET_SINGLE_PROJECT_SUCCESS:
      return { ...state, project: { ...payload }, loading: false };
    case Types.PROJECTS_ERROR:
      return { ...state, errorMessage: payload.errorMessage };
    default:
      return state;
  }
}

export default projects;
