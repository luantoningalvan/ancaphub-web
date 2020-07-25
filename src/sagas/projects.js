import { takeLatest, call, fork, put } from 'redux-saga/effects';

import * as actions from '../actions/projects';
import * as api from '../api/projects';

function* getProjects() {
  try {
    const items = yield call(api.getProjects);
    yield put(actions.getProjectsSuccess(items.data));
  } catch (e) {
    yield put(actions.projectsError({ errorMessage: e.message }));
  }
}

function* getSingleProject(action) {
  try {
    const item = yield call(api.getSingleProject, action.payload);
    yield put(actions.getSingleProjectSuccess(item.data));
  } catch (e) {
    yield put(actions.projectsError({ errorMessage: e.message }));
  }
}

function* createProject(action) {
  try {
    const item = yield call(api.createProject, action.payload);
    yield put(actions.createProjectSuccess(item.data));
  } catch (e) {
    yield put(actions.projectsError({ errorMessage: e.message }));
  }
}

// Watchers
function* watchGetProjectsRequest() {
  yield takeLatest(actions.Types.GET_PROJECTS_REQUEST, getProjects);
}

function* watchGetSingleProjectRequest() {
  yield takeLatest(actions.Types.GET_SINGLE_PROJECT_REQUEST, getSingleProject);
}

function* watchCreateProjectRequest() {
  yield takeLatest(actions.Types.CREATE_PROJECT_REQUEST, createProject);
}

export default [
  fork(watchGetProjectsRequest),
  fork(watchCreateProjectRequest),
  fork(watchGetSingleProjectRequest),
];
