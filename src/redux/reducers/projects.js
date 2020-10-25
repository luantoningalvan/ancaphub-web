import { Types } from '../actions/projects';
import arrayToObject from '../../utils/arrayToObject';

const INITIAL_STATE = {
  loading: true,
  loadingPosts: true,
  projects: [],
  posts: [],
  post: {},
  project: {},
  errorMessage: '',
  relationships: {},
};

const getRelationships = (pjts) => {
  const reducer = pjts.map((pj) => ({
    _id: pj._id,
    following: pj.isFollowing,
  }));
  return arrayToObject(reducer, '_id');
};

function projects(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_PROJECTS_REQUEST:
    case Types.GET_SINGLE_PROJECT_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SINGLE_PROJECT_POST_REQUEST:
    case Types.GET_PROJECT_POSTS_REQUEST:
      return { ...state, loadingPosts: true };
    case Types.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: payload,
        loading: false,
        relationships: {
          ...state.relationships,
          ...getRelationships(payload),
        },
      };

    case Types.GET_SINGLE_PROJECT_POST_SUCCESS:
      return {
        ...state,
        post: payload,
        loadingPosts: false,
      };
    case Types.UPDATE_PROJECT_SUCCESS:
    case Types.UPDATE_PROJECT_AVATAR_SUCCESS:
    case Types.REMOVE_PROJECT_AVATAR_SUCCESS:
    case Types.UPDATE_PROJECT_COVER_SUCCESS:
    case Types.REMOVE_PROJECT_COVER_SUCCESS:
    case Types.ADD_PROJECT_FAQ_SUCCESS:
    case Types.REMOVE_PROJECT_FAQ_SUCCESS:
    case Types.ADD_PROJECT_DONATION_SUCCESS:
    case Types.REMOVE_PROJECT_DONATION_SUCCESS:
      return { ...state, project: { ...payload }, loading: false };
    case Types.GET_SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        project: payload,
        loading: false,
        relationships: {
          ...state.relationships,
          ...getRelationships([payload]),
        },
      };
    case Types.GET_PROJECT_POSTS_SUCCESS:
      return { ...state, posts: payload, loadingPosts: false };
    case Types.REMOVE_PROJECT_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loadingPosts: false,
      };
    case Types.PROJECTS_ERROR:
      return { ...state, errorMessage: payload.errorMessage };
    default:
      return state;
  }
}

export default projects;
