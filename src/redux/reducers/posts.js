import { Types } from '../actions/posts';
import arrayToObject from '../../utils/arrayToObject';

const INITIAL_STATE = {
  items: [],
  errorMessage: '',
  postLikesLoading: true,
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.CREATE_POST_SUCCESS:
      return {
        ...state,
        items: {
          [payload.id]: payload,
          ...state.items,
        },
      };
    case Types.GET_POSTS_REQUEST:
    case Types.GET_USER_POSTS_REQUEST:
      return { ...state, loading: true };
    case Types.GET_POSTS_SUCCESS:
    case Types.GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        items: arrayToObject(payload.items, 'id'),
        loading: false,
      };
    case Types.GET_MORE_POSTS_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          ...arrayToObject(payload.items, 'id'),
        },
        loading: false,
      };
    case Types.UNLIKE_POST_REQUEST:
    case Types.LIKE_POST_REQUEST:
      return {
        ...state,
        items: {
          ...state.items,
          [payload]: {
            ...state.items[payload],
            hasLiked: !state.items[payload].hasLiked,
          },
        },
      };
    case Types.DELETE_POST_SUCCESS: {
      const newObj = { ...state.items };
      delete newObj[payload];

      return {
        ...state,
        items: newObj,
      };
    }

    case Types.UNLIKE_POST_SUCCESS:
    case Types.LIKE_POST_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [payload.id]: {
            ...state.items[payload.id],
            ...payload,
          },
        },
      };
    case Types.GET_POST_LIKE_REQUEST:
      return { ...state, postLikesLoading: true };
    case Types.GET_POST_LIKE_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [payload.id]: {
            ...state.items[payload.id],
            likes: payload.likes,
          },
        },
        postLikesLoading: false,
      };
    case Types.VOTE_POST_POLL_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          [payload.postId]: {
            ...state.items[payload.postId],
            poll: {
              ...payload.data,
              allVotesCount: payload.data.allVotes.length,
            },
          },
        },
      };
    case Types.POST_ERROR:
      return { ...state, errorMessage: payload.errorMessage };
    default:
      return state;
  }
};
