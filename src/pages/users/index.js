import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { generate } from 'shortid';

import { Container, Hero, Paper, LoadContent } from '../../components/ui';

import { UserCardGrid } from './styles.css';

import { getUsersRequest } from '../../actions/users';
import UserCard from '../../components/users/UserCard';

const Users = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Hero title={<FormattedMessage id="common.users" />} />
      <div style={{ marginTop: 16 }}>
        <LoadContent loading={loading}>
          {!isEmpty(items) ? (
            <UserCardGrid>
              {items.map((user) => (
                <UserCard user={user.user} key={generate()} />
              ))}
            </UserCardGrid>
          ) : (
            <Paper padding>
              <FormattedMessage id="common.noUsersFound" />
            </Paper>
          )}
        </LoadContent>
      </div>
    </Container>
  );
};

export default Users;
