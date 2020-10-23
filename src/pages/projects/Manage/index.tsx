import React, { useEffect } from 'react';

import {
  FiGrid,
  FiSliders,
  // FiUsers,
  FiChevronLeft,
  FiEdit,
} from 'react-icons/fi';

import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuItem, MenuTree, LoadContent } from '../../../components/ui';
import { Container, Paper } from 'snake-ui';
import {
  SettingsContainer,
  SettingsSidebarContainer,
  SettingsContentContainer,
} from './styles';
import defaultProjectAvatar from '../../../assets/default-project-avatar.png';

import { getSingleProjectRequest } from '../../../actions/projects';

import Generals from './Generals';
import Posts from './Posts';
import Sections from './Sections';
import Roles from './Roles';

const Settings = () => {
  const {
    projectId,
    page,
    subpage,
  }: { projectId: string; page: string; subpage: string } = useParams();
  const BASE_URL = `/projects/${projectId}/manage`;

  const dispatch = useDispatch();
  const { project, loading } = useSelector((state: any) => state.projects);

  const settingsMap: { [key: string]: React.ReactNode } = {
    undefined: Generals,
    posts: Posts,
    sections: Sections,
    roles: Roles,
  };

  useEffect(() => {
    dispatch(getSingleProjectRequest(projectId));
  }, [dispatch, projectId]);

  const Template: any = settingsMap[page];

  return (
    <Container>
      <LoadContent loading={loading}>
        <SettingsContainer>
          <SettingsSidebarContainer>
            <Paper>
              <div className="group-name">
                <img
                  className="icon"
                  src={project.avatar || defaultProjectAvatar}
                  alt="profile pic"
                />
                <h2>{project.name}</h2>
              </div>
              <Menu>
                <MenuItem
                  current={
                    page === 'generals' ||
                    page === null ||
                    settingsMap[page] === undefined
                  }
                  label="Gerais"
                  link={BASE_URL}
                  icon={<FiSliders />}
                />
                <MenuItem
                  current={page === 'posts'}
                  label="Publicaçoes"
                  link={`${BASE_URL}/posts`}
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
                    link={`${BASE_URL}/sections/about`}
                    current={page === 'sections' && subpage === 'about'}
                  />
                  <MenuItem
                    label="Doações"
                    nested
                    link={`${BASE_URL}/sections/donations`}
                    current={page === 'sections' && subpage === 'donations'}
                  />
                  <MenuItem
                    nested
                    label="FAQ"
                    link={`${BASE_URL}/sections/faq`}
                    current={page === 'sections' && subpage === 'faq'}
                  />
                </MenuTree>
                {/*
                <MenuItem
                  current={page === 'roles'}
                  label="Funções Administrativas"
                  link={`${BASE_URL}/roles`}
                  icon={<FiUsers />}
                />
                 */}
              </Menu>
            </Paper>
            <Link to={`/projects/${projectId}`} className="back-to-project">
              <FiChevronLeft />
              Voltar para o projeto
            </Link>
          </SettingsSidebarContainer>
          <SettingsContentContainer>
            <Template project={project} />
          </SettingsContentContainer>
        </SettingsContainer>
      </LoadContent>
    </Container>
  );
};

export default Settings;
