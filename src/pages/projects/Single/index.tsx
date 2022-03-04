import React, { Suspense, lazy, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import LinksList from "../../../components/projects/LinksList";
import defaultProjectAvatar from "../../../assets/default-project-avatar.png";
import { LoadContent } from "../../../components";
import {
  Container,
  IconButton,
  Paper,
  CircularLoader,
  Tabs,
  Tab,
  Grid,
} from "snake-ui";

import { ProjectBanner } from "./styles";
import { getSingleProjectRequest } from "../../../redux/actions/projects";
import FollowProjectButton from "../../../components/projects/FollowProjectButton";
import projectCategories from "../../../assets/project-categories";

const ProjectFeed = lazy(() => import("./Feed"));
const ProjectFAQ = lazy(() => import("./FAQ"));
const ProjectAbout = lazy(() => import("./About"));
const ProjectDonations = lazy(() => import("./Donations"));

const SingleProject = () => {
  const dispatch = useDispatch();
  const { loading, project } = useSelector((state: any) => state.projects);
  const navigate = useNavigate();

  const { page: projectPage, projectId } =
    useParams<{ projectId: string; page: string }>();

  const pages: { [key: string]: React.ReactNode } = {
    undefined: ProjectFeed,
    faq: ProjectFAQ,
    about: ProjectAbout,
    donate: ProjectDonations,
  };

  useEffect(() => {
    dispatch(getSingleProjectRequest(projectId));
  }, [dispatch, projectId]);

  const Template: any = pages[projectPage as string];

  return (
    <LoadContent loading={loading}>
      <ProjectBanner cover={project.cover_url}>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                className="icon"
                src={project.avatar_url || defaultProjectAvatar}
                alt="profile pic"
              />
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
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
                  to="http://ancaphub.com"
                  rel="noopener noreferrer"
                >
                  {project.category}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </ProjectBanner>
      <Container style={{ marginTop: 16 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <h3>
              <FormattedMessage id="projects.usefulLinks" />
            </h3>

            <LinksList links={project.links} />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Paper style={{ width: "100%" }}>
              <Tabs style={{ height: 48, padding: "0px 8px" }}>
                <Tab
                  current={projectPage === undefined} //@ts-ignore
                  label={<FormattedMessage id="projects.news" />}
                  onClick={() => navigate(`/projects/${projectId}`)}
                />
                <Tab
                  current={projectPage === "faq"} //@ts-ignore
                  label={<FormattedMessage id="projects.faq" />}
                  onClick={() => navigate(`/projects/${projectId}/faq`)}
                />
                <Tab
                  current={projectPage === "about"} //@ts-ignore
                  label={<FormattedMessage id="projects.about" />}
                  onClick={() => navigate(`/projects/${projectId}/about`)}
                />
                <Tab
                  current={projectPage === "donate"} //@ts-ignore
                  label={<FormattedMessage id="projects.donate" />}
                  onClick={() => navigate(`/projects/${projectId}/donate`)}
                />
              </Tabs>
            </Paper>
            <div style={{ width: "100%", margin: "16px 0" }}>
              <Suspense fallback={<CircularLoader size={96} />}>
                <Template project={project} />
              </Suspense>
            </div>
          </Grid>
        </Grid>
      </Container>
    </LoadContent>
  );
};

export default SingleProject;
