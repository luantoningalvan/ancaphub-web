import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import {
  FiHome as NewsFeedIcon,
  FiFolder as LibraryIcon,
  FiUser as UsersIcon,
  FiFlag as ProjectsIcon,
} from 'react-icons/fi';
import { AiOutlineBug as BugIcon } from 'react-icons/ai';

import { FormattedMessage } from 'react-intl';
import MenuItemButton from './MenuItemButton';
import { MenuContainer } from './styles';

import MenuItemLink from './MenuItemLink';

const Menu = ({ handleOpenBugReport }) => {
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
          current={url.includes('/projects')}
          icon={<ProjectsIcon />}
          label="Projetos"
          link="/projects"
        />
        <MenuItemLink
          current={url.includes('/users')}
          icon={<UsersIcon />}
          label="Usuários"
          link="/users"
        />
      </ul>
      <ul>
        <MenuItemButton
          icon={<BugIcon />}
          label="Reportar Erro"
          action={handleOpenBugReport}
        />
      </ul>
    </MenuContainer>
  );
};

export default Menu;
