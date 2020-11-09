import React from 'react';
import { Link } from 'react-router-dom';
import defaultProfilePicture from '../../../assets/default-profile-picture.jpg';
import { AuthorAvatar, AuthorTitle, AuthorCardContainer } from './styles';

interface GroupCardProps {
  data: {
    id: string;
    username: string;
    name: string;
    avatar: string;
  };
}

const GroupCard: React.FC<GroupCardProps> = ({ data }) => {
  const { username, name, avatar } = data;
  return (
    <AuthorCardContainer>
      <AuthorAvatar to={`/authors/${username}`}>
        <img src={avatar || defaultProfilePicture} alt={name} />
      </AuthorAvatar>
      <AuthorTitle>
        <Link to={`/authors/${username}`}>{name}</Link>
      </AuthorTitle>
    </AuthorCardContainer>
  );
};

export default GroupCard;
