import { takeLatest, call, fork, put } from 'redux-saga/effects';

import * as actions from '../actions/search';
import * as api from '../api/search';
import { addAlert } from '../actions/alerts';
import { getUsersCount } from '../actions/users';
import { getUsersRelationsips } from '../actions/relationships';

function* searchTerm(action) {
  try {
    const response = yield call(api.searchTerm, action.payload);

    // Count relationships
    yield put(getUsersCount(response.data.users));

    // Send relationships to reducer
    yield put(getUsersRelationsips(response.data.users));

    // Store search results
    yield put(actions.searchTermSuccess(response.data));
  } catch (e) {
    yield put(addAlert('error', e.message || 'Error performing search.'));
  }
}

function* watchSearchTerm() {
  yield takeLatest(actions.Types.SEARCH_TERM_REQUEST, searchTerm);
}

function* searchNearbyUsers(action) {
  try {
    const response = yield call(api.serachNearbyUsers, action.payload);
    yield put(getUsersCount(response.data));
    yield put(getUsersRelationsips(response.data));
    yield put(actions.searchNearbyUserSuccess(response.data));
  } catch (e) {
    yield put(addAlert('error', e.message || 'Error performing search.'));
  }
}

function* watchSearchNearbyUsers() {
  yield takeLatest(
    actions.Types.SEARCH_NEARBY_USERS_REQUEST,
    searchNearbyUsers
  );
}

export default [fork(watchSearchTerm), fork(watchSearchNearbyUsers)];
