import React, { useState } from 'react';
import { generate } from 'shortid';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
  FiUser as ProfileIcon,
  FiPower as LogoutIcon,
  FiChevronDown as ArrowDownIcon,
  FiSettings as SettingsIcon,
  FiMenu as MenuIcon,
  FiMessageCircle as MessageIcon,
} from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, CardBody, CardFooter, Menu } from 'snake-ui';

import {
  AppBar,
  HeaderWrapper,
  Logo,
  HeaderMenu,
  HeaderMenuItem,
  Bell,
} from './styles';

import Search from '../Search';

import { NotificationsItem } from '../../';
import { logoutRequest as logout } from '../../../redux/actions/auth';
import { switchColorMode as changeTheme } from '../../../redux/actions/settings';
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
  const { push } = useHistory();

  const dispatch = useDispatch();
  const [animated, setAnimated] = useState(false);
  const [notificationsAnchor, setNotificationsAnchor] = useState<any>(null);
  const [optionsAnchor, setOptionsAnchor] = useState<any>(null);

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

  const handleLogout = () => {
    dispatch(logout());
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
          <HeaderMenuItem
            current={url.includes('/notifications')}
            onClick={(e) => setNotificationsAnchor(e.currentTarget)}
          >
            <div>
              <Bell animated={animated}>
                <AnimatedBell />
              </Bell>
              {notReadCount > 0 && <span className="badge" />}
            </div>
          </HeaderMenuItem>
          <Dropdown
            placement="bottom-end"
            open={Boolean(notificationsAnchor)}
            onClose={() => setNotificationsAnchor(null)}
            anchorEl={notificationsAnchor}
          >
            <h3 style={{ padding: '16px 16px 0px 16px' }}>
              <FormattedMessage id="common.notifications" />
            </h3>
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
                    <NotificationsItem
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
          <HeaderMenuItem onClick={(e) => setOptionsAnchor(e.currentTarget)}>
            <div>
              <ArrowDownIcon />
            </div>
          </HeaderMenuItem>
          <Menu
            placement="bottom-end"
            open={Boolean(optionsAnchor)}
            onClose={() => setOptionsAnchor(null)}
            anchorEl={optionsAnchor}
            options={[
              {
                label: <FormattedMessage id="common.profile" />,
                onClick: () => push(`/${user.username}`),
                icon: <ProfileIcon />,
              },
              {
                label: <FormattedMessage id="common.settings" />,
                onClick: () => push(`/settings`),
                icon: <SettingsIcon />,
              },
              {
                label: <FormattedMessage id="common.logout" />,
                onClick: handleLogout,
                icon: <LogoutIcon />,
              },
            ]}
          />
        </HeaderMenu>
      </AppBar>
      <HeaderWrapper />
    </>
  );
};

export default Header;
