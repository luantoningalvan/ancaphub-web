import React from 'react';
import { Link } from 'react-router-dom';
import { FiX as CloseIcon } from 'react-icons/fi';

import { useTransition } from 'react-spring';
import defaultProfilePicture from '../../assets/default-profile-picture.jpg';
import Menu from './Menu';
import { IconButton } from '../ui';
import { Nav, UserMenu } from './styles';

const Sidenav = ({ user, collapsed, setCollapsed }) => {
  const transitions = useTransition(!collapsed, null, {
    from: { left: -240 },
    enter: { left: 0 },
    leave: { left: -240 },
  });

  const SidnavContent = () => (
    <>
      <UserMenu>
        <Link to={`/${user._id}`}>
          <img
            src={
              user.avatar && user.avatar !== ''
                ? user.avatar
                : defaultProfilePicture
            }
            alt="profile pic"
          />
        </Link>

        <div>
          <IconButton icon={<CloseIcon />} onClick={setCollapsed} />
        </div>
      </UserMenu>
      <Menu />
    </>
  );

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Nav key={key} style={props} isMobile>
              <SidnavContent />
            </Nav>
          )
      )}

      <Nav isMobile={false}>
        <SidnavContent />
      </Nav>
    </>
  );
};

export default Sidenav;
