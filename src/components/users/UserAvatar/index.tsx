import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from './styles';

import defaultAvatar from '../../../assets/default-profile-picture.jpg';

interface UserAvatarProps {
  user: {
    id: string;
    avatar?: string;
    avatar_url?: string;
    username: string;
  };
  size?: number;
  style?: React.CSSProperties;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user, size, ...props }) => (
  <Avatar size={size || 35} {...props}>
    <Link to={`/${user.username}`}>
      <img
        src={
          user.avatar_url && user.avatar_url !== ''
            ? user.avatar_url
            : defaultAvatar
        }
        alt={user.username}
      />
    </Link>
  </Avatar>
);

export default UserAvatar;
