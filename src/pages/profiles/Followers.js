import React, { useEffect, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { getUserFollowersRequest } from '../../actions/users';
import UserCard from '../../components/users/UserCard';

import { Paper, LoadContent } from '../../components/ui';

const Feed = ({ user: userId }) => {
  const dispatch = useDispatch();
  const { loadingFollowers, followers } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getUserFollowersRequest(userId));
  }, [dispatch, userId]);

  return (
    <LoadContent loading={loadingFollowers}>
      {followers.length === 0 ? (
        <Paper padding>
          <FormattedMessage id="profile.followers.noFollowers" />
        </Paper>
      ) : (
        <div spacing={1}>
          {followers.map((user) => (
            <div xs={4} key={user._id}>
              <UserCard user={user.user} />
            </div>
          ))}
        </div>
      )}
    </LoadContent>
  );
};

export default memo(Feed);
