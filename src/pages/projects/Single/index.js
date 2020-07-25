import React, { Suspense, lazy } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FiSettings } from 'react-icons/fi';
import TwitterLogo from 'react-ionicons/lib/LogoTwitter';
import FacebookLogo from 'react-ionicons/lib/LogoFacebook';
import InstagramLogo from 'react-ionicons/lib/LogoInstagram';
import YoutubeLogo from 'react-ionicons/lib/LogoYoutube';
import EmailLogo from 'react-ionicons/lib/IosMail';
import SiteLogo from 'react-ionicons/lib/IosLink';
import ShareButton from 'react-ionicons/lib/MdShareAlt';

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
} from '../../../components/ui';

import { ProjectBanner, ProjectSocialMedia } from './styles';

const ProjectFeed = lazy(() => import('./ProjectFeed'));
const ProjectFAQ = lazy(() => import('./ProjectFAQ'));
const ProjectAbout = lazy(() => import('./ProjectAbout'));
const ProjectDonations = lazy(() => import('./ProjectDonations'));

const SingleProject = () => {
  const { page: projectPage, projectId } = useParams();
  const [page, setPage] = React.useState();
  const pages = {
    undefined: <ProjectFeed />,
    faq: <ProjectFAQ />,
    about: <ProjectAbout />,
    donate: <ProjectDonations />,
  };

  React.useEffect(() => {
    setPage(pages[projectPage]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectPage]);

  return (
    <>
      <ProjectBanner cover="https://pbs.twimg.com/profile_banners/1094252234915962881/1594566074/1500x500">
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
                src="https://pbs.twimg.com/profile_images/1282328964363583488/pZ3r5Pv8_400x400.jpg"
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
                  <h2>AncapHub</h2>
                  <Link to="/projects/1/manage">
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
                toggle={<IconButton icon={<ShareButton color="white" />} />}
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
          spacing={2}
        >
          <div xs={3}>
            <ProjectSocialMedia
              padding
              style={{ width: '100%', position: 'sticky', top: 80 }}
            >
              <CardHeader
                title={<FormattedMessage id="projects.usefulLinks" />}
              />

              <ul>
                <li>
                  <TwitterLogo />
                  <a
                    href="http://twitter.com/ancap_hub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <FacebookLogo />
                  <a
                    href="http://facebook.com/ancaphub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <InstagramLogo />
                  <a
                    href="http://instagram.com/ancaphub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <YoutubeLogo />
                  <a
                    href="http://youtube.com/ancaphub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <SiteLogo />
                  <a
                    href="http://ancaphub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="common.website" />
                  </a>
                </li>
                <li>
                  <EmailLogo />
                  <span>contato@ancaphub.com</span>
                </li>
              </ul>
            </ProjectSocialMedia>
          </div>
          <div xs={9}>
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
              <Suspense fallback={<Spinner size={96} />}>{page}</Suspense>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProject;
