import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { generate } from 'shortid';
import { getUserFollowingRequest } from '../../actions/users';
import UserCard from '../../components/users/UserCard';

import { Paper, LoadContent } from '../../components/ui';

import { UserCardGrid } from './styles';

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
        <UserCardGrid>
          {following.map((user) => (
            <UserCard user={user.user} key={generate()} />
          ))}
        </UserCardGrid>
      )}
    </LoadContent>
  );
};

export default memo(Feed);
