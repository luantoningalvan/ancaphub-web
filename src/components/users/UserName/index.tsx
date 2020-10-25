import React from 'react';
import { useIntl } from 'react-intl';
import { FiCheckCircle } from 'react-icons/fi';
import { UserNameStyle } from './styles';

interface UserNameProps {
  user: any;
  fontSize?: number;
}

const UserName: React.FC<UserNameProps> = ({ user, fontSize }) => {
  const { formatMessage } = useIntl();
  return (
    <UserNameStyle
      title={user.isVerified && formatMessage({ id: 'common.verified' })}
      to={`/${user.username}`}
      fontSize={fontSize}
      isVerified={user.isVerified}
    >
      {user.name}
      {user.isVerified && (
        <FiCheckCircle
          color="#edb30d"
          width={16}
          height={16}
          style={{ transform: 'translateY(4px)', marginLeft: 4 }}
        />
      )}
    </UserNameStyle>
  );
};

export default UserName;
