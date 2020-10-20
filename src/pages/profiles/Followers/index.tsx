import React, { useEffect, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { generate } from 'shortid';
import { getUserFollowersRequest } from '../../../actions/users';
import UserCard from '../../../components/users/UserCard';

import { Grid, Paper } from 'snake-ui';
import { LoadContent } from '../../../components/ui';

const Feed = ({ user }: any) => {
  const dispatch = useDispatch();
  const { loadingFollowers, followers } = useSelector(
    (state: any) => state.profile
  );

  useEffect(() => {
    dispatch(getUserFollowersRequest(user));
  }, [dispatch, user]);

  return (
    <LoadContent loading={loadingFollowers}>
      {followers.length === 0 ? (
        <Paper padding>
          <FormattedMessage id="profile.followers.noFollowers" />
        </Paper>
      ) : (
        <Grid container spacing={2}>
          {followers.map((follower: any) => (
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
