import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage, FormattedDate } from "react-intl";
import { parseISO, addDays } from "date-fns";
import {
  FiGlobe as SiteIcon,
  FiCalendar as BirthIcon,
  FiMapPin as LocationIcon,
  FiEdit as EditIcon,
  FiMessageCircle as MessageIcon,
} from "react-icons/fi";

import defaultProfilePicture from "../../assets/default-profile-picture.jpg";
import defaultProfileCover from "../../assets/default-profile-cover.jpg";
import { LoadContent } from "../../components";
import {
  Paper,
  CircularLoader,
  Container,
  Tabs,
  Tab,
  Button,
  Grid,
} from "snake-ui";

import FollowButton from "../../components/users/FollowButton";
import EditProfile from "../../components/users/EditProfile";
import EditAvatar from "../../components/upload/CropImage";
import UserName from "../../components/users/UserName";

import {
  getSingleUserRequest,
  updateProfilePictureRequest,
  updateProfileCoverRequest,
} from "../../redux/actions/users";
import {
  ProfileHeader,
  ProfilePicture,
  ProfileInfo,
  UserAbout,
  ProfileContent,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Feed = lazy(() => import("./Feed"));
const Lists = lazy(() => import("./Lists"));
const Contributions = lazy(() => import("./Contributions"));
const Followers = lazy(() => import("./Followers"));
const Following = lazy(() => import("./Following"));

const Profiles = () => {
  const { user, loading } = useSelector((state: any) => state.profile);
  const auth = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const [editAvatar, setEditAvatar] = useState(false);
  const [editCover, setEditCover] = useState(false);

  const { handle, page: pageParam } =
    useParams<{ handle: string; page: string }>();
  const dispatch = useDispatch();

  const verifyIfIsOwnProfile =
    auth.isAuthenticated && auth.user.username === handle;

  const pages: { [key: string]: React.ReactNode } = {
    undefined: Feed,
    lists: Lists,
    contributions: Contributions,
    followers: Followers,
    following: Following,
  };

  useEffect(() => {
    dispatch(getSingleUserRequest(handle));
  }, [handle, getSingleUserRequest]);

  const Template: React.ReactNode = pages[pageParam as string];

  return (
    <Container>
      <LoadContent loading={loading}>
        {verifyIfIsOwnProfile && (
          <>
            <EditAvatar
              open={editAvatar}
              dialogTitle="Alterar foto de perfil"
              onClose={() => setEditAvatar(false)}
              onUpdate={(data: any) =>
                dispatch(updateProfilePictureRequest(data))
              }
            />

            <EditAvatar
              open={editCover}
              dialogTitle="Alterar capa de perfil"
              onClose={() => setEditCover(false)}
              aspect={3 / 1}
              shape="rect"
              onUpdate={(data: any) =>
                dispatch(updateProfileCoverRequest(data))
              }
            />
          </>
        )}

        <ProfileHeader>
          <div className="profile-cover">
            <img
              src={
                user.cover_url && user.cover_url !== ""
                  ? user.cover_url
                  : defaultProfileCover
              }
              alt="default cover pic"
            />
            {verifyIfIsOwnProfile && (
              <div
                role="presentation"
                className="edit-profile-cover"
                onClick={() => setEditCover(true)}
              >
                <EditIcon size={22} />
              </div>
            )}
          </div>
          <ProfilePicture isOwn={verifyIfIsOwnProfile}>
            <div className="avatar">
              <img
                alt="user avatar"
                src={
                  user.avatar_url && user.avatar_url !== ""
                    ? user.avatar_url
                    : defaultProfilePicture
                }
              />
              {verifyIfIsOwnProfile && (
                <div
                  role="presentation"
                  className="edit-profile-picture"
                  onClick={() => setEditAvatar(true)}
                >
                  <EditIcon />
                </div>
              )}
            </div>
          </ProfilePicture>
          <ProfileInfo>
            <div className="follower-count">
              <ul>
                <li>
                  <Link to={`/${handle}/followers`} className="counter">
                    {user.followersCount}
                  </Link>
                  <span>
                    <FormattedMessage
                      id="common.followers"
                      description="Info quantidade de seguidores"
                    />
                  </span>
                </li>
                <li>
                  <Link to={`/${handle}/following`} className="counter">
                    {user.followingCount}
                  </Link>
                  <span>
                    <FormattedMessage
                      id="common.following"
                      description="Info quantidade de usuário seguidos"
                    />
                  </span>
                </li>
              </ul>
            </div>

            <div className="user-name">
              <h3>
                <UserName user={user} fontSize={24} />
              </h3>
              <span>
                @{user.username}{" "}
                {user.followed_by && (
                  <em>
                    {" "}
                    - <FormattedMessage id="common.followsYou" />
                  </em>
                )}
              </span>
            </div>
            <div className="user-action-buttons">
              {!verifyIfIsOwnProfile && (
                <Button color="neutral">
                  <MessageIcon /> Mensagem
                </Button>
              )}
              <FollowButton user={handle} />
              {verifyIfIsOwnProfile && <EditProfile />}
            </div>
          </ProfileInfo>
        </ProfileHeader>
        <ProfileContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <UserAbout>
                <Paper>
                  <h3>
                    <FormattedMessage id="common.about" description="Sobre" />
                  </h3>
                  {user.bio && <p>{user.bio}</p>}

                  <ul>
                    {user.location && (
                      <li>
                        <LocationIcon />
                        <span>{user.location}</span>
                      </li>
                    )}

                    {user.birthday && (
                      <li>
                        <BirthIcon />
                        <span>
                          <FormattedDate
                            // DISCLAIMER: this is a temporary solution since
                            // we still don't know why this bug is happening
                            value={addDays(parseISO(user.birthday), 1)}
                            year="numeric"
                            month="long"
                            day="2-digit"
                          />
                        </span>
                      </li>
                    )}

                    {user.url && (
                      <li>
                        <SiteIcon />
                        <span>
                          <a
                            href={user.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {user.url.length > 28
                              ? `${user.url.substring(0, 28)}..`
                              : user.url}
                          </a>
                        </span>
                      </li>
                    )}
                  </ul>
                </Paper>
              </UserAbout>
            </Grid>
            <Grid item xs={12} md={7}>
              <Paper className="profile-menu">
                <Tabs style={{ height: 48, padding: "0px 8px" }}>
                  <Tab
                    current={pageParam === undefined}
                    label={<FormattedMessage id="common.feed" />}
                    onClick={() => navigate(`/${handle}`)}
                  />
                  <Tab
                    current={pageParam === "following"}
                    label={<FormattedMessage id="common.following" />}
                    onClick={() => navigate(`/${handle}/following`)}
                  />
                  <Tab
                    current={pageParam === "followers"}
                    label={<FormattedMessage id="common.followers" />}
                    onClick={() => navigate(`/${handle}/followers`)}
                  />
                </Tabs>
              </Paper>

              <div className="profile-content">
                <Suspense fallback={<CircularLoader size={96} />}>
                  {/* @ts-ignore */}
                  <Template user={handle} />
                </Suspense>
              </div>
            </Grid>
          </Grid>
        </ProfileContent>
      </LoadContent>
    </Container>
  );
};

export default Profiles;
