import React from 'react';
import { FiMapPin as DistanceIcon } from 'react-icons/fi';
import FollowButton from '../FollowButton';
import UserAvatar from '../UserAvatar';
import UserName from '../UserName';
import { UserCardWrap } from './styles';

type User = {
  id: string;
  avatar: string;
  username: string;
  dist: number;
};

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <UserCardWrap padding>
    <div className="avatar">
      <UserAvatar user={user} size={80} />
    </div>
    <UserName user={user} />
    <span className="username">@{user.username}</span>
    {(user.dist || user.dist === 0) && (
      <div className="distance">
        <DistanceIcon />
        <span>{`${(user.dist / 1000).toFixed(0)} Km`}</span>
      </div>
    )}
    <FollowButton user={user.username} />
  </UserCardWrap>
);

export default UserCard;
