import { all } from 'redux-saga/effects';

import AdsSagas from './ads';
import UserSagas from './users';
import AuthSagas from './auth';
import PostSagas from './posts';
import SettingsSagas from './settings';
import CommentSagas from './comments';
import LibrarySagas from './library';
import RelationshipsSagas from './relationships';
import NotificationsSagas from './notifications';
import SearchSagas from './search';
import CategoriesSagas from './categories';
import ProjectsSagas from './projects';
import ChatsSagas from './chats';

export default function* rootSaga() {
  yield all([
    ...AdsSagas,
    ...UserSagas,
    ...AuthSagas,
    ...PostSagas,
    ...SettingsSagas,
    ...CommentSagas,
    ...LibrarySagas,
    ...RelationshipsSagas,
    ...NotificationsSagas,
    ...SearchSagas,
    ...CategoriesSagas,
    ...ProjectsSagas,
    ...ChatsSagas,
  ]);
}
