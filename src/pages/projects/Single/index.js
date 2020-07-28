import React, { Suspense, lazy, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FiSettings, FiShare2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import LinksList from '../../../components/projects/LinksList';
import defaultProjectAvatar from '../../../assets/default-project-avatar.png';
import {
  Container,
  CardHeader,
  IconButton,
  Button,
  Paper,
  Spinner,
  Dropdown,
  DropdownListContainer,
  DropdownListItem,
  Tabs,
  Tab,
  LoadContent,
} from '../../../components/ui';

import { ProjectBanner, ProjectSocialMedia } from './styles';
import { getSingleProjectRequest } from '../../../actions/projects';

const ProjectFeed = lazy(() => import('./ProjectFeed'));
const ProjectFAQ = lazy(() => import('./ProjectFAQ'));
const ProjectAbout = lazy(() => import('./ProjectAbout'));
const ProjectDonations = lazy(() => import('./ProjectDonations'));

const SingleProject = () => {
  const dispatch = useDispatch();
  const { loading, project } = useSelector((state) => state.projects);

  const { page: projectPage, projectId } = useParams();

  const pages = {
    undefined: ProjectFeed,
    faq: ProjectFAQ,
    about: ProjectAbout,
    donate: ProjectDonations,
  };

  useEffect(() => {
    dispatch(getSingleProjectRequest(projectId));
  }, [dispatch, projectId]);

  const Template = pages[projectPage];

  return (
    <LoadContent loading={loading}>
      <ProjectBanner cover={project.cover}>
        <Container>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                className="icon"
                src={project.avatar || defaultProjectAvatar}
                alt="profile pic"
              />
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 8,
                  }}
                >
                  <h2>{project.name}</h2>
                  <Link to={`/projects/${projectId}/manage`}>
                    {project.isAdmin && (
                      <IconButton
                        icon={
                          <FiSettings
                            style={{ margin: 0 }}
                            size={18}
                            color="#fff"
                          />
                        }
                        style={{ marginLeft: 8 }}
                        color="primary"
                      />
                    )}
                  </Link>
                </div>

                <Link
                  className="category"
                  href="http://ancaphub.com"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="common.website" />
                </Link>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button color="primary" style={{ marginRight: 8 }}>
                <FormattedMessage id="projects.enroll" />
              </Button>
              <Dropdown
                toggle={<IconButton icon={<FiShare2 color="white" />} />}
              >
                <DropdownListContainer>
                  <DropdownListItem>
                    <FormattedMessage id="common.publish" />
                  </DropdownListItem>
                  <DropdownListItem>
                    <FormattedMessage id="common.sendMessage" />
                  </DropdownListItem>
                </DropdownListContainer>
              </Dropdown>
            </div>
          </div>
        </Container>
      </ProjectBanner>
      <Container>
        <div
          style={{
            marginTop: 16,
            display: 'grid',
            gridTemplateColumns: '30% 70%',
            gap: '16px',
          }}
        >
          <div>
            <ProjectSocialMedia
              padding
              style={{ width: '100%', position: 'sticky', top: 80 }}
            >
              <CardHeader
                title={<FormattedMessage id="projects.usefulLinks" />}
              />

              <LinksList links={project.links} />
            </ProjectSocialMedia>
          </div>
          <div>
            <Paper style={{ width: '100%' }}>
              <Tabs>
                <Tab
                  current={projectPage === undefined}
                  label={<FormattedMessage id="projects.news" />}
                  link={`/projects/${projectId}`}
                />
                <Tab
                  current={projectPage === 'faq'}
                  label={<FormattedMessage id="projects.faq" />}
                  link={`/projects/${projectId}/faq`}
                />
                <Tab
                  current={projectPage === 'about'}
                  label={<FormattedMessage id="projects.about" />}
                  link={`/projects/${projectId}/about`}
                />
                <Tab
                  current={projectPage === 'donate'}
                  label={<FormattedMessage id="projects.donate" />}
                  link={`/projects/${projectId}/donate`}
                />
              </Tabs>
            </Paper>
            <div style={{ width: '100%', margin: '16px 0' }}>
              <Suspense fallback={<Spinner size={96} />}>
                <Template project={project} />
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </LoadContent>
  );
};

export default SingleProject;
