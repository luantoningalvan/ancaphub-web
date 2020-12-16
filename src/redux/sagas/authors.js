import { takeLatest, call, fork, put } from 'redux-saga/effects';

import * as actions from '../actions/authors';
import * as api from '../../api/authors';
import { addAlert } from '../actions/alerts';

function* getAuthors() {
  try {
    const authors = yield call(api.getAuthors);
    yield put(actions.getAuthorsSuccess(authors.data));
  } catch (e) {
    yield put(addAlert('error', e.message));
  }
}

function* getSingleAuthor({ payload }) {
  try {
    const author = yield call(api.getSingleAuthor, payload);
    yield put(actions.getSingleAuthorSuccess(author.data));
  } catch (e) {
    yield put(addAlert('error', e.message));
  }
}

function* createAuthor({ payload, callback }) {
  try {
    const author = yield call(api.createAuthor, payload);
    yield put(actions.createAuthorSuccess(author.data));
    yield put(
      addAlert({
        title: 'Sucesso',
        description: 'Autor criado com sucesso',
        type: 'success',
      })
    );
    callback && callback();
  } catch (e) {
    yield put(addAlert('error', e.message));
  }
}

function* watchGetSingleAuthor() {
  yield takeLatest(actions.Types.GET_AUTHORS_REQUEST, getAuthors);
}

function* watchGetAuthors() {
  yield takeLatest(actions.Types.GET_SINGLE_AUTHOR_REQUEST, getSingleAuthor);
}

function* watchCreateAuthor() {
  yield takeLatest(actions.Types.CREATE_AUTHORS_REQUEST, createAuthor);
}

export default [
  fork(watchGetAuthors),
  fork(watchGetSingleAuthor),
  fork(watchCreateAuthor),
];
