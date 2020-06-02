import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { getUserFollowingRequest } from '../../actions/users';
import UserCard from '../../components/users/UserCard';

import { 
  Paper,
  LoadContent 
} from '../../components/ui'

const Feed = ({ user: userId }) => {
  const dispatch = useDispatch();
  const { loadingFollowing, following } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getUserFollowingRequest(userId));
  }, [dispatch, userId]);

  return (
    <LoadContent loading={loadingFollowing}>
      {following.length === 0 ? (
        <Paper padding>
          <FormattedMessage id="profile.following.notFollowingAnyone" />
        </Paper>
      ) : (
        <div spacing={1}>
          {following.map((user) => (
            <div xs={4}>
              <UserCard user={user.user} />
            </div>
          ))}
        </div>
      )}
    </LoadContent>
  );
};

export default memo(Feed);
