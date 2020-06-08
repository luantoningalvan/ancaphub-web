import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiX as CloseIcon } from 'react-icons/fi';

import { useTransition, animated } from 'react-spring';
import defaultProfilePicture from '../../assets/default-profile-picture.jpg';
import Menu from './Menu';
import { IconButton } from '../ui';

const Nav = styled(animated.aside)`
  width: 100%;
  max-width: 240px;
  height: calc(100vh);
  position: fixed;
  z-index: 121;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.palette.paper};
  display: ${(props) => (props.isMobile ? 'block' : 'none')};

  @media (min-width: 576px) {
    display: block;
    width: 64px;
    height: calc(100vh - 64px);
    position: fixed;
    top: 64px;
    display: ${(props) => (!props.isMobile ? 'block' : 'none')};
  }
`;

const UserMenu = styled.div`
  height: 64px;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  border-bottom: 1px solid ${(props) => props.theme.palette.border};

  > a {
    display: block;
    border: none;
    outline: none;
    border-radius: 100%;
    height: 44px;
    width: 44px;
    overflow: hidden;
    cursor: pointer;

    > img {
      height: 100%;
      width: 100%;
    }
  }

  > div {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
  @media (min-width: 576px) {
    border: none;
    margin-bottom: 8px;
    justify-content: center;
    padding: 0px;
    width: 64px;
    div {
      display: none;
    }
  }
`;

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
