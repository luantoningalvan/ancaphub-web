import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import {
  FiHome as NewsFeedIcon,
  FiFolder as LibraryIcon,
  FiFlag as ProjectsIcon,
  FiCalendar as EventsIcon,
} from 'react-icons/fi';

import { FormattedMessage } from 'react-intl';
import { ItemLinkListContainer } from './styles';

import ItemLink from '../ItemLink';

const ItemLinkList: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <ItemLinkListContainer>
      <ItemLink
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
      <ItemLink
        current={url.includes('/library')}
        icon={<LibraryIcon />}
        label="Biblioteca"
        link="/library"
      />
      <ItemLink
        current={url.includes('/projects')}
        icon={<ProjectsIcon />}
        label="Projetos"
        link="/projects"
      />
      <ItemLink
        current={url.includes('/events')}
        icon={<EventsIcon />}
        label="Eventos"
        link="/events"
      />
    </ItemLinkListContainer>
  );
};

export default ItemLinkList;
