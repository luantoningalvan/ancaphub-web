import { takeLatest, call, fork, put } from 'redux-saga/effects';

import * as actions from '../actions/chats';
import * as api from '../api/chats';
import { addAlert } from '../actions/alerts';

function* getLastChats() {
  try {
    const chats = yield call(api.getLastChats);
    yield put(actions.getLastChatsSuccess(chats.data));
  } catch (e) {
    yield put(addAlert('error', e.message));
  }
}

function* watchGetLastChatsRequest() {
  yield takeLatest(actions.Types.GET_LAST_CHATS_REQUEST, getLastChats);
}

export default [fork(watchGetLastChatsRequest)];
