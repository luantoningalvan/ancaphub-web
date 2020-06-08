import React, { useEffect, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { generate } from 'shortid';
import { getUserFollowersRequest } from '../../actions/users';
import UserCard from '../../components/users/UserCard';

import { UserCardGrid } from './styles';

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
        <UserCardGrid>
          {followers.map((user) => (
            <UserCard user={user.user} key={generate()} />
          ))}
        </UserCardGrid>
      )}
    </LoadContent>
  );
};

export default memo(Feed);
