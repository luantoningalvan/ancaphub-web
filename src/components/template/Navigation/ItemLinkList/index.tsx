import React from "react";

import {
  FiHome as NewsFeedIcon,
  FiFolder as LibraryIcon,
  FiFlag as ProjectsIcon,
  FiCalendar as EventsIcon,
  FiUsers as GroupsIcon,
} from "react-icons/fi";

import { FormattedMessage } from "react-intl";
import { ItemLinkListContainer } from "./styles";

import ItemLink from "../ItemLink";

const ItemLinkList: React.FC = () => {
  return (
    <ItemLinkListContainer>
      <ItemLink
        url={"/home"}
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
        url={"/library"}
        icon={<LibraryIcon />}
        label="Biblioteca"
        link="/library"
      />
      <ItemLink
        url={"/projects"}
        icon={<ProjectsIcon />}
        label="Projetos"
        link="/projects"
      />

      <ItemLink
        url={"/events"}
        icon={<EventsIcon />}
        label="Eventos"
        link="/events"
      />

      <ItemLink
        url={"/groups"}
        icon={<GroupsIcon />}
        label="Grupos"
        link="/groups"
      />
    </ItemLinkListContainer>
  );
};

export default ItemLinkList;
