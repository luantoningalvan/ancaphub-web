import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { generate } from 'shortid';
import { getUserFollowingRequest } from '../../../actions/users';
import UserCard from '../../../components/users/UserCard';

import { Paper, Grid } from 'snake-ui';
import { LoadContent } from '../../../components';

const Feed = ({ user }: any) => {
  const dispatch = useDispatch();
  const { loadingFollowing, following } = useSelector(
    (state: any) => state.profile
  );

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
        <Grid container spacing={2}>
          {following.map((follower: any) => (
            <Grid item xs={4}>
              <UserCard user={follower.user} key={generate()} />
            </Grid>
          ))}
        </Grid>
      )}
    </LoadContent>
  );
};

export default memo(Feed);
