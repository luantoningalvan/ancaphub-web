import React from 'react';
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
import logo from '../../assets/logo-prov.png';

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
