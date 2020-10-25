import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Card, CardFooter, CardHeader, CardBody } from 'snake-ui';

import MiniUserCard from '../MiniUserCard';

const UserListWidget = () => {
  const users = [
    {
      id: 1,
      name: 'Luan',
      username: '@ltoningalvan',
      avatar: '',
      isFollowing: false,
    },
    {
      id: 1,
      name: 'Luan',
      username: '@ltoningalvan',
      avatar: '',
      isFollowing: false,
    },
    {
      id: 1,
      name: 'Luan',
      username: '@ltoningalvan',
      avatar: '',
      isFollowing: false,
    },
  ];
  return (
    <div style={{ width: '100%' }}>
      <Card>
        <CardHeader>
          <h3>
            <FormattedMessage id="common.youMightLike" />
          </h3>
        </CardHeader>
        <CardBody>
          <ul>
            {users.map((user) => (
              <MiniUserCard key={user.id} user={user} />
            ))}
          </ul>
        </CardBody>
        <CardFooter
          link="/"
          label={<FormattedMessage id="common.showMore" />}
        />
      </Card>
    </div>
  );
};

export default UserListWidget;
