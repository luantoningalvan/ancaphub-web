import React from 'react';

import {
  FiGrid,
  FiSliders,
  FiUsers,
  FiChevronLeft,
  FiEdit,
} from 'react-icons/fi';

import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Paper,
  Menu,
  MenuItem,
  MenuTree,
} from '../../../components/ui';

import {
  SettingsContainer,
  SettingsSidebarContainer,
  SettingsContentContainer,
} from './styles';

import Generals from './Generals';
import Posts from './Posts';
import Sections from './Sections';
import Roles from './Roles';

const Settings = () => {
  const { page, subpage } = useParams();

  const settingsMap = {
    generals: <Generals />,
    posts: <Posts />,
    sections: <Sections />,
    roles: <Roles />,
  };

  const Tab = () =>
    // TODO: remove this nested ternary as it is very misleading
    // eslint-disable-next-line no-nested-ternary
    page !== null ? (
      settingsMap[page] === undefined ? (
        <Generals />
      ) : (
        settingsMap[page]
      )
    ) : (
      <Generals />
    );

  return (
    <Container>
      <SettingsContainer>
        <SettingsSidebarContainer>
          <Paper>
            <div className="group-name">
              <img
                className="icon"
                src="https://pbs.twimg.com/profile_images/1282328964363583488/pZ3r5Pv8_400x400.jpg"
                alt="profile pic"
              />
              <h2>AncapHub</h2>
            </div>
            <Menu>
              <MenuItem
                current={
                  page === 'generals' ||
                  page === null ||
                  settingsMap[page] === undefined
                }
                label="Gerais"
                link="/projects/1/manage"
                icon={<FiSliders />}
              />
              <MenuItem
                current={page === 'posts'}
                label="Publicaçoes"
                link="/projects/1/manage/posts"
                icon={<FiEdit />}
              />
              <MenuTree
                current={page === 'sections'}
                label="Seções"
                icon={<FiGrid />}
              >
                <MenuItem
                  nested
                  label="Sobre"
                  link="/projects/1/manage/sections/about"
                  current={page === 'sections' && subpage === 'about'}
                />
                <MenuItem
                  label="Doações"
                  nested
                  link="/projects/1/manage/sections/donations"
                  current={page === 'sections' && subpage === 'donations'}
                />
                <MenuItem
                  nested
                  label="FAQ"
                  link="/projects/1/manage/sections/faq"
                  current={page === 'sections' && subpage === 'faq'}
                />
              </MenuTree>
              <MenuItem
                current={page === 'roles'}
                label="Funções Administrativas"
                link="/projects/1/manage/roles"
                icon={<FiUsers />}
              />
            </Menu>
          </Paper>
          <Link to="/projects/1" className="back-to-project">
            <FiChevronLeft />
            Voltar para o projeto
          </Link>
        </SettingsSidebarContainer>
        <SettingsContentContainer>
          <Tab />
        </SettingsContentContainer>
      </SettingsContainer>
    </Container>
  );
};

export default Settings;
