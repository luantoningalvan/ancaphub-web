import { Types } from '../actions/comments';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        [payload.id]: payload.data,
      };
    case Types.DELETE_COMMENT_REQUEST:
      return {
        ...state,
        [payload.postId]: state[payload.postId].filter(
          (value) => value.id !== payload.commentId
        ),
      };
    case Types.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        [payload.postId]: [
          {
            ...payload.data,
            date: new Date(Date.now()).toISOString(),
          },
          ...state[payload.postId],
        ],
      };
    case Types.UPDATE_COMMENT_SUCCESS: {
      return {
        ...state,
        [payload.post_id]: state[payload.post_id].map((comment) =>
          comment.id === payload.id ? payload : comment
        ),
      };
    }
    default:
      return state;
  }
};
