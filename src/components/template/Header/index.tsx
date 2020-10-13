import React, { useState } from 'react';
import { generate } from 'shortid';
import { Link, useRouteMatch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
  FiUser as ProfileIcon,
  FiSun as ContrastIcon,
  FiPower as LogoutIcon,
  FiChevronDown as ArrowDownIcon,
  FiSettings as SettingsIcon,
  FiMenu as MenuIcon,
  FiMessageCircle as MessageIcon,
} from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import { CardBody, CardFooter } from 'snake-ui';
import {
  Dropdown,
  DropdownListContainer,
  DropdownListItem,
  DropdownHeader,
  Switcher,
} from '../../ui';

import {
  AppBar,
  HeaderWrapper,
  Logo,
  HeaderMenu,
  HeaderMenuItem,
  Bell,
} from './styles';

import Search from '../Search';

import Notification from '../../notifications';
import { logoutRequest as logout } from '../../../actions/auth';
import { switchColorMode as changeTheme } from '../../../actions/settings';
import { ReactComponent as AncapHubLogo } from '../../../assets/ancaphub.svg';
import { ReactComponent as AnimatedBell } from '../../../assets/bell.svg';

import notificationSound from '../../../assets/notification.mp3';

const audio = new Audio(notificationSound);

interface HeaderProps {
  user: {
    username: string;
  };
  collapsed: boolean;
  setCollapsed(value: boolean): void;
}

const Header: React.FC<HeaderProps> = ({ user, collapsed, setCollapsed }) => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const [animated, setAnimated] = useState(false);

  const escFunction = (event: any) => {
    if (event.keyCode === 16) {
      audio.play();
      setAnimated(true);

      setTimeout(() => {
        setAnimated(false);
      }, 1000);
    }
  };

  document.addEventListener('keydown', escFunction);

  const { notifications, notReadCount } = useSelector(
    (state: any) => state.notifications
  );

  const { colorMode } = useSelector((state: any) => state.settings);

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
            onClick={() => setCollapsed(!collapsed)}
          >
            <MenuIcon />
          </button>
          <div className="logo">
            <Link to="/">
              <AncapHubLogo />
            </Link>
          </div>
        </Logo>
        <Search />

        <HeaderMenu>
          <HeaderMenuItem current={url.includes('/messages')}>
            <Link to="/messages">
              <MessageIcon />
            </Link>
          </HeaderMenuItem>
          <Dropdown
            placement="bottom"
            offsetY={16}
            offsetX="-8vw"
            toggle={
              <HeaderMenuItem current={url.includes('/notifications')}>
                <div>
                  <Bell animated={animated}>
                    <AnimatedBell />
                  </Bell>
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
                  {notifications.map((notification: any) => (
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
                <Link to={`/${user.username}`}>
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
                <a onClick={handleLogout}>
                  <FormattedMessage id="common.logout" />
                </a>
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
