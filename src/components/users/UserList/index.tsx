import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import FollowButton from '../FollowButton';
import defaultAvatar from '../../../assets/default-profile-picture.jpg';
import { Avatar, User } from './styles';

const UserList: React.FC<{ users: any }> = ({ users }) => (
  <div style={{ width: '100%' }}>
    <ul>
      {!isEmpty(users) &&
        users.map((user: any) => (
          <User key={user.user.id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link to={`/${user.user.username}`}>
                <Avatar
                  src={
                    user?.user?.avatar ? user.user.avatar_url : defaultAvatar
                  }
                />
              </Link>
              <div style={{ marginRight: 8 }}>
                <h4>{user.user.name}</h4>
                <span>{user.user.username}</span>
              </div>
            </div>
            <FollowButton user={user.user} />
          </User>
        ))}
    </ul>
  </div>
);

export default UserList;
