import { Types } from '../actions/search';

const INITIAL_STATE = {
  results: {
    users: [],
    projects: [],
    library: [],
  },
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.SEARCH_NEARBY_USERS_REQUEST:
    case Types.SEARCH_TERM_REQUEST:
      return { ...state, loading: true };
    case Types.SEARCH_TERM_SUCCESS:
      return {
        ...state,
        results: {
          users: payload.users,
          library: payload.library,
          events: payload.events,
        },
        loading: false,
      };
    case Types.SEARCH_NEARBY_USERS_SUCCESS: {
      return {
        ...state,
        results: payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
