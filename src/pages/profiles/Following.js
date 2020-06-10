import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { generate } from 'shortid';
import { getUserFollowingRequest } from '../../actions/users';
import UserCard from '../../components/users/UserCard';

import { Paper, LoadContent } from '../../components/ui';

import { UserCardGrid } from './styles';

const Feed = ({ user }) => {
  const dispatch = useDispatch();
  const { loadingFollowing, following } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getUserFollowingRequest(user));
  }, [dispatch, user]);

  return (
    <LoadContent loading={loadingFollowing}>
      {following.length === 0 ? (
        <Paper padding>
          <FormattedMessage id="profile.following.notFollowingAnyone" />
        </Paper>
      ) : (
        <UserCardGrid>
          {following.map((follower) => (
            <UserCard user={follower.user} key={generate()} />
          ))}
        </UserCardGrid>
      )}
    </LoadContent>
  );
};

export default memo(Feed);
