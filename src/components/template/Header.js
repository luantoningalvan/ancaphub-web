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
import styled, { css } from 'styled-components';
import {
  Dropdown,
  DropdownListContainer,
  DropdownListItem,
  DropdownHeader,
  CardBody,
  CardFooter,
  Switcher,
} from '../ui';
import {
  AppBar,
  HeaderWrapper,
  Logo,
  HeaderMenu,
  HeaderMenuItem,
} from './styles';

import Search from './Search';

import Notification from '../notifications';
import { logoutRequest as logout } from '../../actions/auth';
import { switchColorMode as changeTheme } from '../../actions/settings';
import { ReactComponent as AncapHubLogo } from '../../assets/ancaphub.svg';
import { ReactComponent as AnimatedBell } from '../../assets/bell.svg';

import notificationSound from '../../assets/notification.mp3';

const Bell = styled.div`
  #e8n1zamhvyle3_tr {
    transform: translate(12px, 9.5px) rotate(0deg);
  }

  #e8n1zamhvyle5_to {
    transform: translate(12px, 21.503926px);
  }

  ${(props) =>
    props.animated &&
    css`
      #e8n1zamhvyle3_tr {
        animation: e8n1zamhvyle3_tr__tr 3000ms linear 1 normal forwards;
      }

      @keyframes e8n1zamhvyle3_tr__tr {
        0% {
          transform: translate(12px, 9.5px) rotate(10deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        3.333333% {
          transform: translate(12px, 9.5px) rotate(-10deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        6.666667% {
          transform: translate(12px, 9.5px) rotate(10deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        10% {
          transform: translate(12px, 9.5px) rotate(-10deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        13.333333% {
          transform: translate(12px, 9.5px) rotate(10deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        15% {
          transform: translate(12px, 9.5px) rotate(0deg);
        }
        100% {
          transform: translate(12px, 9.5px) rotate(0deg);
        }
      }
      #e8n1zamhvyle5_to {
        animation: e8n1zamhvyle5_to__to 3000ms linear 1 normal forwards;
      }
      @keyframes e8n1zamhvyle5_to__to {
        0% {
          transform: translate(17px, 21.503926px);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        3.333333% {
          transform: translate(7px, 21.503926px);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        6.666667% {
          transform: translate(17px, 21.503926px);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        10% {
          transform: translate(7px, 21.503926px);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        13.333333% {
          transform: translate(17px, 21.503926px);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        15% {
          transform: translate(12px, 21.503926px);
        }
        100% {
          transform: translate(12px, 21.503926px);
        }
      }
      #e8n1zamhvyle5_tr {
        animation: e8n1zamhvyle5_tr__tr 3000ms linear 1 normal forwards;
      }
      @keyframes e8n1zamhvyle5_tr__tr {
        0% {
          transform: rotate(0deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        3.333333% {
          transform: rotate(5deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        6.666667% {
          transform: rotate(0deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        10% {
          transform: rotate(5deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        13.333333% {
          transform: rotate(-5deg);
          animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
        }
        15% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    `}
`;
const audio = new Audio(notificationSound);

const Header = ({ user, collapsed, setCollapsed }) => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const [animated, setAnimated] = useState(false);

  const escFunction = (event) => {
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
