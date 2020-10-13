import React from 'react';
import { Link } from 'react-router-dom';
import { FiX as CloseIcon } from 'react-icons/fi';

import { useTransition } from 'react-spring';
import defaultProfilePicture from '../../../assets/default-profile-picture.jpg';
import Menu from '../Menu';
import { IconButton } from 'snake-ui';
import { Nav, UserMenu } from './styles';

interface SidenavProps {
  user: {
    username: string;
    avatar: string;
  };
  collapsed: boolean;
  setCollapsed(value: boolean): void;
}

const Sidenav: React.FC<SidenavProps> = ({ user, collapsed, setCollapsed }) => {
  const transitions = useTransition(!collapsed, null, {
    from: { left: -240 },
    enter: { left: 0 },
    leave: { left: -240 },
  });

  const handleOpenBugReport = () => {
    // @ts-ignore
    global.Ybug.open();
    setCollapsed(true);
  };

  const SidnavContent = () => (
    <>
      <UserMenu>
        <Link to={`/${user.username}`}>
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
          {/* @ts-ignore */}
          <IconButton icon={<CloseIcon />} onClick={setCollapsed} />
        </div>
      </UserMenu>
      <Menu handleOpenBugReport={handleOpenBugReport} />
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
