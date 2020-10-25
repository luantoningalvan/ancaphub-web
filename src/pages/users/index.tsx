import React, { useState, useEffect, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Container, Hero, CircularLoader, Grid } from 'snake-ui';

import { getUsersRequest, loadMoreUsersRequest } from '../../actions/users';
import UserCard from '../../components/users/UserCard';

const Users = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: any) => state.users);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  const loadMore = useCallback(() => {
    setPage(page + 1);
    dispatch(loadMoreUsersRequest({ page: page + 1 }));
  }, [dispatch, page]);

  return (
    <Container>
      <Hero title={<FormattedMessage id="common.users" />} actions />
      <div style={{ marginTop: 16 }}>
        <InfiniteScroll
          dataLength={items.length} // This is important field to render the next data
          next={loadMore}
          hasChildren
          hasMore={page * 20 < 254}
          loader={
            <div
              style={{
                width: '100%',
                justifyContent: 'center',
                display: 'flex',
                padding: 16,
              }}
            >
              <CircularLoader size={72} />
            </div>
          }
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Grid container spacing={2}>
            {items.map((user: any) => (
              <Grid item xs={6} md={4} lg={3} key={user.id}>
                <UserCard user={user.user} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </div>
    </Container>
  );
};

export default Users;
