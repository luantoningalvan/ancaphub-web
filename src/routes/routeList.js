import Home from '../pages/home';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';

import Feed from '../pages/feed';

import Library from '../pages/library';
import Contribute from '../pages/library/Contribute';
import SingeBook from '../pages/library/SingleBook';
import SingleArticle from '../pages/library/SingleArticle';
import SingleVideo from '../pages/library/SingleVideo';

import Groups from '../pages/groups';
import SingleGroup from '../pages/groups/SingleGroup';

import Users from '../pages/users';

import Events from '../pages/events';
import SingleEvent from '../pages/events/SingleEvent';

import Projects from '../pages/projects';
import SingleProject from '../pages/projects/Single';
import SingleProjectPost from '../pages/projects/Post';
import NewProject from '../pages/projects/NewProject';
import ManageProject from '../pages/projects/Manage';

import Profile from '../pages/profiles';
import Notifications from '../pages/notifications';

import Messages from '../pages/messages';

import Contributions from '../pages/account/Contributions';
import Bookmarks from '../pages/account/Bookmarks';
import Settings from '../pages/account/settings';

import SearchData from '../pages/search/SearchData';
import NearbyUsers from '../pages/search/SearchNearbyUsers';

export default [
  {
    isOpen: true,
    exact: true,
    path: '/',
    component: Home,
  },
  {
    isOpen: true,
    exact: true,
    path: '/auth/forgot',
    component: ForgotPassword,
  },
  {
    isOpen: true,
    exact: true,
    path: '/auth/reset/:user/:token',
    component: ResetPassword,
  },
  {
    exact: true,
    path: '/home',
    component: Feed,
  },
  {
    exact: true,
    path: '/library/contribute',
    component: Contribute,
  },
  {
    exact: true,
    path: '/library/:type?',
    component: Library,
  },
  {
    path: '/library/books/:id',
    component: SingeBook,
  },
  {
    path: '/library/articles/:id',
    component: SingleArticle,
  },
  {
    path: '/library/videos/:id',
    component: SingleVideo,
  },
  {
    exact: true,
    path: '/groups',
    component: Groups,
  },
  {
    exact: true,
    path: '/users',
    component: Users,
  },
  {
    path: '/groups/:id/:page?',
    component: SingleGroup,
  },
  {
    exact: true,
    path: '/events',
    component: Events,
  },
  {
    exact: true,
    path: '/events/:id',
    component: SingleEvent,
  },
  {
    exact: true,
    path: '/projects',
    component: Projects,
  },
  {
    exact: true,
    path: '/projects/new',
    component: NewProject,
  },
  {
    exact: true,
    path: '/projects/:projectId/manage/:page?/:subpage?',
    component: ManageProject,
  },
  {
    exact: true,
    path: '/projects/:projectId/posts/:postId',
    component: SingleProjectPost,
  },
  {
    exact: true,
    path: '/projects/:projectId/:page?',
    component: SingleProject,
  },
  {
    exact: true,
    path: '/contributions',
    component: Contributions,
  },
  {
    exact: true,
    path: '/bookmarks',
    component: Bookmarks,
  },
  {
    exact: true,
    path: '/settings',
    component: Settings,
  },
  {
    exact: true,
    path: '/notifications',
    component: Notifications,
  },
  {
    exact: true,
    path: '/messages/:id?',
    component: Messages,
  },
  {
    exact: true,
    path: '/search',
    component: SearchData,
  },
  {
    exact: true,
    path: '/nearby',
    component: NearbyUsers,
  },
  {
    exact: true,
    path: '/:handle/:page?',
    component: Profile,
  },
];
