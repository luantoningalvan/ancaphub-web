import React, { useEffect } from 'react';

import {
  FiGrid,
  FiSliders,
  // FiUsers,
  FiChevronLeft,
  FiEdit,
} from 'react-icons/fi';

import { useParams, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoadContent } from '../../../components';
import { Container, Paper, List, ListItem } from 'snake-ui';
import {
  SettingsContainer,
  SettingsSidebarContainer,
  SettingsContentContainer,
} from './styles';
import defaultProjectAvatar from '../../../assets/default-project-avatar.png';

import { getSingleProjectRequest } from '../../../redux/actions/projects';

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
  const { push } = useHistory();

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
                  src={project.avatar_url || defaultProjectAvatar}
                  alt="profile pic"
                />
                <h2>{project.name}</h2>
              </div>
              <List>
                <ListItem
                  current={
                    page === 'generals' ||
                    page === null ||
                    settingsMap[page] === undefined
                  }
                  label="Gerais"
                  onClick={() => push(BASE_URL)}
                  icon={<FiSliders />}
                />
                <ListItem
                  current={page === 'posts'}
                  label="Publicaçoes"
                  onClick={() => push(`${BASE_URL}/posts`)}
                  icon={<FiEdit />}
                />
                <ListItem
                  current={page === 'sections'}
                  label="Seções"
                  icon={<FiGrid />}
                  options={[
                    {
                      label: 'Sobre',
                      onClick: () => push(`${BASE_URL}/sections/about`),
                      current: page === 'sections' && subpage === 'about',
                    },
                    {
                      label: 'Doações',
                      onClick: () => push(`${BASE_URL}/sections/donations`),
                      current: page === 'sections' && subpage === 'donations',
                    },
                    {
                      label: 'FAQ',
                      onClick: () => push(`${BASE_URL}/sections/faq`),
                      current: page === 'sections' && subpage === 'faq',
                    },
                  ]}
                />
              </List>
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
