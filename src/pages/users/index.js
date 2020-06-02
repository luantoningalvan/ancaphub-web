import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import { 
  Container,
  Hero,
  Paper,
  LoadContent,
} from '../../components/ui'

import { getUsersRequest } from '../../actions/users';
import UserCard from '../../components/users/UserCard';

export default () => {
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
            <div spacing={2}>
              {items.map((user) => (
                <div xs={3}>
                  <UserCard user={user.user} />
                </div>
              ))}
            </div>
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
