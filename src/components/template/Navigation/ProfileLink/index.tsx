import React from 'react';
import { Link } from 'react-router-dom';
import defaultProfilePicture from '../../../../assets/default-profile-picture.jpg';
import { ProfileLinkContainer } from './styles';

interface ProfileLinkProps {
  user: {
    username: string;
    avatar_url: string;
  };
}

const ProfileLink: React.FC<ProfileLinkProps> = ({ user }) => (
  <ProfileLinkContainer>
    <Link to={`/${user.username}`}>
      <img
        src={
          user.avatar_url && user.avatar_url !== ''
            ? user.avatar_url
            : defaultProfilePicture
        }
        alt="profile pic"
      />
    </Link>
  </ProfileLinkContainer>
);

export default ProfileLink;
