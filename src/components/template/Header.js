import React from 'react';
import styled from 'styled-components';
import { generate } from 'shortid';
import { Link, useRouteMatch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
  FiUser as ProfileIcon,
  FiSun as ContrastIcon,
  FiPower as LogoutIcon,
  FiChevronDown as ArrowDownIcon,
  FiBell as NotificationsIcon,
  FiSettings as SettingsIcon,
  FiMenu as MenuIcon,
} from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';

import {
  Dropdown,
  DropdownListContainer,
  DropdownListItem,
  DropdownHeader,
  CardBody,
  CardFooter,
  Switcher,
} from '../ui';

import Notification from '../notifications';
import { logoutRequest as logout } from '../../actions/auth';
import { switchColorMode as changeTheme } from '../../actions/settings';
import logo from '../../assets/logo-prov.png';

const AppBar = styled.header`
  background: ${(props) => props.theme.palette.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
`;

const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  .logo {
    display: flex;
    justify-content: flex-start;
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;

    img {
      height: 56px;
    }
  }

  .collapse-button {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-left: 16px;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
    border-radius: 100%;
    svg {
      height: 24px;
      width: 24px;
      color: ${(props) => props.theme.palette.text.contrast};
    }
  }

  @media (min-width: 576px) {
    .collapse-button {
      display: none;
    }
    flex: 0;
  }
`;

const HeaderMenu = styled.ul`
  display: flex;
  margin-right: 25px;
`;

const HeaderMenuItem = styled.li`
  list-style: none;
  margin-right: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.text.contrast};

  &:last-child {
    margin-right: 0px;
  }

  > a,
  > div {
    display: block;
    position: relative;
    margin-left: 8px;
    padding: 8px;
    border-radius: 8px;
    background: ${(props) =>
      props.current ? 'rgba(0,0,0,0.15)' : 'transparent'};
    transition: background 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .badge {
    position: absolute;
    height: 8px;
    width: 8px;
    top: 8px;
    right: 8px;
    border-radius: 4px;
    background: red;
  }
`;

const Header = ({ user, setCollapsed }) => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const { notifications, notReadCount } = useSelector(
    (state) => state.notifications
  );

  const { colorMode } = useSelector((state) => state.settings);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleChangeTheme = () => {
    if (colorMode === 'dark') dispatch(changeTheme('light'));
    if (colorMode === 'light') dispatch(changeTheme('dark'));
  };

  return (
    <>
      <AppBar>
        <Logo>
          <button
            type="button"
            className="collapse-button"
            onClick={setCollapsed}
          >
            <MenuIcon />
          </button>
          <div className="logo">
            <Link to="/">
              <img alt="logo" src={logo} />
            </Link>
          </div>
        </Logo>
        <Search />

        <HeaderMenu>
          <Dropdown
            placement="bottom"
            offsetY={16}
            offsetX="-8vw"
            toggle={
              <HeaderMenuItem current={url.includes('/notifications')}>
                <div>
                  <NotificationsIcon />
                  {notReadCount > 0 && <span className="badge" />}
                </div>
              </HeaderMenuItem>
            }
          >
            <DropdownHeader>
              <FormattedMessage id="common.notifications" />
            </DropdownHeader>
            {notifications.length > 0 ? (
              <>
                <ul
                  style={{
                    maxWidth: 400,
                    maxHeight: 400,
                    overflowY: 'scroll',
                  }}
                >
                  {notifications.map((notification) => (
                    <Notification
                      notification={notification}
                      key={generate()}
                    />
                  ))}
                </ul>
                <CardFooter
                  link="/notifications"
                  label={<FormattedMessage id="common.showMore" />}
                />
              </>
            ) : (
              <CardBody>
                <FormattedMessage id="notifications.noNotificationsFound" />
              </CardBody>
            )}
          </Dropdown>
          {/*
          <Dropdown
            placement="bottom"
            offsetY={16}
            offsetX="-4vw"
            toggle={
              <HeaderMenuItem current={url.includes("/messages")}>
                <div>
                  <MessagesIcon />
                </div>
              </HeaderMenuItem>
            }
          >
            <p>Messages will appear here...</p>
          </Dropdown>
          */}
          <Dropdown
            offsetY={16}
            offsetX="-4vw"
            placement="bottom"
            toggle={
              <HeaderMenuItem>
                <div>
                  <ArrowDownIcon />
                </div>
              </HeaderMenuItem>
            }
          >
            <DropdownListContainer>
              <DropdownListItem icon={<ProfileIcon />}>
                <Link to={`/${user._id}`}>
                  <FormattedMessage id="common.profile" />
                </Link>
              </DropdownListItem>

              <DropdownListItem
                icon={<ContrastIcon />}
                action={
                  <Switcher
                    value={colorMode === 'dark'}
                    onChange={() => handleChangeTheme()}
                  />
                }
              >
                <FormattedMessage id="common.darkMode" />
              </DropdownListItem>
              <DropdownListItem icon={<SettingsIcon />}>
                <Link to="/settings">
                  <FormattedMessage id="common.settings" />
                </Link>
              </DropdownListItem>
              <DropdownListItem icon={<LogoutIcon />}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link onClick={handleLogout}>
                  <FormattedMessage id="common.logout" />
                </Link>
              </DropdownListItem>
            </DropdownListContainer>
          </Dropdown>
        </HeaderMenu>
      </AppBar>
      <HeaderWrapper />
    </>
  );
};

export default Header;
