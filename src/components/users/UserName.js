import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Verified user icon

import { FiCheckCircle } from 'react-icons/fi';

const UserNameStyle = styled(Link)`
  font-weight: bold;
  color: inherit;
  text-decoration: none;
  font-size: ${(props) => props.fontSize || 15}em;

  .verifiedUser {
    background: ${(props) => props.theme.palette.secondary};
    border-radius: 15px;
    color: ${(props) => props.theme.palette.text.primary};
    padding: 5px 10px;
    margin-right: 5px;
  }
`;

const UserName = ({ user, fontSize }) => {
  const { formatMessage } = useIntl();

  return (
    <UserNameStyle
      title={user.isVerified && formatMessage({ id: 'common.verified' })}
      to={`/${user.username}`}
      className={clsx({ verifiedUser: user.isVerified })}
      fontSize={fontSize}
    >
      {user.name}
      <FiCheckCircle
        color="#edb30d"
        width={16}
        height={16}
        style={{ transform: 'translateY(4px)', marginLeft: 4 }}
      />
    </UserNameStyle>
  );
};

UserName.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
    bio: PropTypes.string,
    isVerified: PropTypes.bool,
  }).isRequired,
  fontSize: PropTypes.number,
};

UserName.defaultProps = {
  fontSize: 1,
};

export default UserName;
