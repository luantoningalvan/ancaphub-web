import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import {
  FiHome as NewsFeedIcon,
  FiFolder as LibraryIcon,
  FiUser as UsersIcon,
} from 'react-icons/fi';

import { FormattedMessage } from 'react-intl';
import { MenuContainer } from './styles';

import MenuItemLink from './MenuItemLink';

const Menu = () => {
  const { url } = useRouteMatch();

  return (
    <MenuContainer>
      <ul>
        <MenuItemLink
          current={url === '/home'}
          icon={<NewsFeedIcon />}
          label={
            <FormattedMessage
              id="common.feed"
              description="Label do menu - Home"
            />
          }
          link="/home"
        />
        <MenuItemLink
          current={url.includes('/library')}
          icon={<LibraryIcon />}
          label="Biblioteca"
          link="/library"
        />
        <MenuItemLink
          current={url.includes('/users')}
          icon={<UsersIcon />}
          label="Usuários"
          link="/users"
        />
      </ul>
    </MenuContainer>
  );
};

export default Menu;
