import { combineReducers } from 'redux';
import alerts from './alerts';
import users from './users';
import usersCount from './usersCount';
import auth from './auth';
import posts from './posts';
import profile from './profile';
import comments from './comments';
import library from './library';
import relationships from './relationships';
import notifications from './notifications';
import search from './search';
import settings from './settings';
import categories from './categories';
import ads from './ads';
import projects from './projects';

export default combineReducers({
  ads,
  alerts,
  users,
  usersCount,
  auth,
  posts,
  profile,
  comments,
  library,
  relationships,
  notifications,
  search,
  settings,
  categories,
  projects,
});
