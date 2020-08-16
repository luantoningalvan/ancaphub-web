import { Types } from '../actions/projects';

const INITIAL_STATE = {
  loading: true,
  loadingPosts: true,
  projects: [],
  posts: [],
  project: {},
  errorMessage: '',
};

function projects(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_PROJECTS_REQUEST:
    case Types.GET_SINGLE_PROJECT_REQUEST:
      return { ...state, loading: true };
    case Types.GET_PROJECT_POSTS_REQUEST:
      return { ...state, loadingPosts: true };
    case Types.GET_PROJECTS_SUCCESS:
    case Types.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: payload,
        loading: false,
      };

    case Types.UPDATE_PROJECT_SUCCESS:
    case Types.UPDATE_PROJECT_AVATAR_SUCCESS:
    case Types.REMOVE_PROJECT_AVATAR_SUCCESS:
    case Types.UPDATE_PROJECT_COVER_SUCCESS:
    case Types.REMOVE_PROJECT_COVER_SUCCESS:
      return { ...state, project: { ...payload }, loading: false };

    case Types.GET_SINGLE_PROJECT_SUCCESS:
      return { ...state, project: { ...payload }, loading: false };
    case Types.GET_PROJECT_POSTS_SUCCESS:
      return { ...state, posts: payload, loadingPosts: false };
    case Types.PROJECTS_ERROR:
      return { ...state, errorMessage: payload.errorMessage };
    default:
      return state;
  }
}

export default projects;
