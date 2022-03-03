import { Types } from "../actions/authors";

const INITIAL_STATE = {
  items: [],
  author: {},
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_AUTHORS_REQUEST:
    case Types.GET_SINGLE_AUTHOR_REQUEST:
    case Types.CREATE_AUTHORS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_AUTHORS_SUCCESS:
      return {
        ...state,
        items: payload,
        loading: false,
      };
    case Types.GET_SINGLE_AUTHOR_SUCCESS:
      return {
        ...state,
        author: payload,
        loading: false,
      };
    case Types.CREATE_AUTHORS_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};
