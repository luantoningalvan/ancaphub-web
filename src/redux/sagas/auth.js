import { takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import {} from '../actions/notifications';
import { addAlert } from '../actions/alerts';
import * as api from '../../api/auth';

function* authUser(action) {
  try {
    const data = action.payload;
    const response = yield call(api.authUser, data);
    localStorage.setItem('token', response.data.token);
    document.location.reload();
  } catch (e) {
    yield put(actions.authError({ errorMessage: e.message }));
    yield put(
      addAlert({
        type: 'error',
        title: 'Erro na autenticação',
        description: e.message,
      })
    );
  }
}

function* loadUser() {
  try {
    const userData = yield call(api.loadUser);
    const settingsData = yield call(api.loadSettings);

    yield put(
      actions.loadUserSuccess({ ...userData.data, settings: settingsData.data })
    );
  } catch (e) {
    yield put(actions.authError({ errorMessage: e.message }));
  }
}

function logout() {
  localStorage.removeItem('token');
  document.location.reload();
}

function* watchAuthUserRequest() {
  yield takeLatest(actions.Types.AUTH_USER_REQUEST, authUser);
}

function* watchLoadUserRequest() {
  yield takeLatest(actions.Types.LOAD_USER_REQUEST, loadUser);
}

function* watchLogout() {
  yield takeLatest(actions.Types.LOGOUT_REQUEST, logout);
}

export default [
  fork(watchAuthUserRequest),
  fork(watchLogout),
  fork(watchLoadUserRequest),
];
