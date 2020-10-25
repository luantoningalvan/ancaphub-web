import React from 'react';
import defaultAvatar from '../../../assets/default-profile-picture.jpg';
import FollowButton from '../FollowButton';
import { User, Avatar } from './styles';

interface MiniUserCardProps {
  user: {
    username: string;
    name: string;
    avatar?: string;
  };
}

const MiniUserCard: React.FC<MiniUserCardProps> = ({
  user,
  children,
  ...rest
}) => (
  <User {...rest}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={user.avatar !== '' ? user.avatar : defaultAvatar} />
      <div style={{ flex: 1 }}>
        <h4>{user.name}</h4>
        <span>{user.username}</span>
      </div>
      {children}
    </div>
    <FollowButton user={user.username} />
  </User>
);

export default MiniUserCard;
