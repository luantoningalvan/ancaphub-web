import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { parseISO, addDays } from 'date-fns';
import {
  FiGlobe as SiteIcon,
  FiCalendar as BirthIcon,
  FiMapPin as LocationIcon,
  FiEdit as EditIcon,
} from 'react-icons/fi';

import defaultProfilePicture from '../../assets/default-profile-picture.jpg';
import defaultProfileCover from '../../assets/default-profile-cover.jpg';

import {
  Paper,
  Button,
  Spinner,
  Container,
  Tabs,
  Tab,
} from '../../components/ui';

import FollowButton from '../../components/users/FollowButton';
import EditProfile from '../../components/users/EditProfile';
import EditAvatar from '../../components/users/EditAvatar';

import { getSingleUserRequest } from '../../actions/users';
import {
  ProfileHeader,
  ProfilePicture,
  ProfileInfo,
  UserAbout,
  ProfileContent,
} from './styles';

const Feed = lazy(() => import('./Feed'));
const Lists = lazy(() => import('./Lists'));
const Contributions = lazy(() => import('./Contributions'));
const Followers = lazy(() => import('./Followers'));
const Following = lazy(() => import('./Following'));

const Profiles = () => {
  const { user, loading } = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);

  const [Page, setPage] = useState();
  const [editProfile] = useState(false);
  const [editAvatar, setEditAvatar] = useState(false);

  const { handle, page: pageParam } = useParams();
  const dispatch = useDispatch();

  const verifyIfIsOwnProfile =
    auth.isAuthenticated && auth.user.username === handle;

  const pages = {
    undefined: <Feed user={handle} />,
    lists: <Lists />,
    contributions: <Contributions />,
    followers: <Followers user={handle} />,
    following: <Following user={handle} />,
  };

  useEffect(() => {
    dispatch(getSingleUserRequest(handle));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handle, getSingleUserRequest]);

  useEffect(() => {
    setPage(() => pages[pageParam]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageParam]);

  return (
    <Container>
      {loading ? (
        <div
          style={{
            display: 'flex',
            flexBasis: '100%',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner size={128} />
        </div>
      ) : (
        <>
          {verifyIfIsOwnProfile && (
            <EditAvatar
              open={editAvatar}
              onClose={() => setEditAvatar(false)}
            />
          )}

          <ProfileHeader>
            <div className="profile-cover">
              <img src={defaultProfileCover} alt="default cover pic" />
            </div>
            <ProfilePicture isOwn={verifyIfIsOwnProfile}>
              <div className="avatar">
                <img
                  alt="user avatar"
                  src={
                    user.avatar && user.avatar !== ''
                      ? user.avatar
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
                <h3>{user.name}</h3>
                <span>@{user.username}</span>
              </div>

              <div className="user-action-buttons">
                <FollowButton user={handle} />
                {verifyIfIsOwnProfile && <EditProfile open={editProfile} />}

                {!verifyIfIsOwnProfile && (
                  <Button color="primary">
                    <FormattedMessage
                      id="common.sendMessage"
                      description="Enviar Mensagem"
                    />
                  </Button>
                )}
              </div>
            </ProfileInfo>
          </ProfileHeader>
          <ProfileContent>
            <UserAbout>
              <Paper>
                <h3>
                  <FormattedMessage id="common.about" description="Sobre" />
                </h3>
                {user.bio && <p>{user.bio}</p>}

                <ul>
                  {user.currentCity && (
                    <li>
                      <LocationIcon />
                      <span>{user.currentCity}</span>
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

                  {user.site && (
                    <li>
                      <SiteIcon />
                      <span>
                        <a
                          href={user.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {user.site}
                        </a>
                      </span>
                    </li>
                  )}
                </ul>
              </Paper>
            </UserAbout>
            <div>
              <Paper className="profile-menu">
                <Tabs>
                  <Tab
                    current={pageParam === undefined}
                    label={<FormattedMessage id="common.feed" />}
                    link={`/${handle}`}
                  />
                  <Tab
                    current={pageParam === 'following'}
                    label={<FormattedMessage id="common.following" />}
                    link={`/${handle}/following`}
                  />
                  <Tab
                    current={pageParam === 'followers'}
                    label={<FormattedMessage id="common.followers" />}
                    link={`/${handle}/followers`}
                  />
                </Tabs>
              </Paper>

              <div className="profile-content">
                <Suspense fallback={<Spinner size={96} />}>{Page}</Suspense>
              </div>
            </div>
          </ProfileContent>
        </>
      )}
    </Container>
  );
};

export default Profiles;
