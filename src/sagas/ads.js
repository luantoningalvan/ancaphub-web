import { takeLatest, call, fork, put } from 'redux-saga/effects';

import * as actions from '../actions/ads';
import * as api from '../api/ads';
import { addAlert } from '../actions/alerts';

function* getRandomAd() {
  try {
    const categories = yield call(api.getRandomAdd);
    yield put(actions.getAddSuccess(categories.data));
  } catch (e) {
    yield put(addAlert('error', e.message));
  }
}

function* watchGetRandomAd() {
  yield takeLatest(actions.Types.GET_RANDOM_AD_REQUEST, getRandomAd);
}

export default [fork(watchGetRandomAd)];
