import { Types } from '../actions/users';
import arrayToObject from '../utils/arrayToObject';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USERS_COUNT: {
      // Get only id and relationships count
      const data = action.payload.map((obj) => ({
        _id: obj._id,
        // ! Comes from the userObject function in the API
        followersCount: obj.followersCount,
        followingCount: obj.followingCount,
      }));

      return {
        ...state,
        ...arrayToObject(data, '_id'),
      };
    }
    default:
      return state;
  }
};
