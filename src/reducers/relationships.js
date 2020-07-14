import { Types } from '../actions/relationships';
import arrayToObject from '../utils/arrayToObject';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_USER_RELATIONSHIPS: {
      const data = payload.map((obj) => ({
        _id: obj._id,
        username: obj.username,
        following: obj.following,
        followed_by: obj.followed_by,
      }));

      return {
        ...state,
        ...arrayToObject(data, 'username'),
      };
    }
    case Types.FOLLOW_USER_SUCCESS:
    case Types.UNFOLLOW_USER_SUCCESS:
      return {
        ...state,
        [payload._id]: payload,
      };
    default:
      return state;
  }
};
