import { Types } from '../actions/relationships';
import arrayToObject from '../../utils/arrayToObject';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_USER_RELATIONSHIPS: {
      const data = payload.map((obj) => ({
        id: obj.user.id,
        username: obj.user.username,
        following: obj.user.following,
        followed_by: obj.user.followed_by,
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
        [payload.id]: payload,
      };
    default:
      return state;
  }
};
