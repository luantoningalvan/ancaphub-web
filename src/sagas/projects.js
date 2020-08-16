import { takeLatest, call, fork, put } from 'redux-saga/effects';

import * as actions from '../actions/projects';
import * as api from '../api/projects';
import { addAlert } from '../actions/alerts';

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

function* createProject({ payload }) {
  try {
    const item = yield call(api.createProject, payload.data);
    yield put(actions.createProjectSuccess(item.data));

    yield put(
      addAlert({
        title: 'Suceso',
        description: 'Projeto criado com sucesso',
        type: 'success',
      })
    );
    yield call(payload.history.push(`/projects/${item.data._id}`));
  } catch (e) {
    yield put(actions.projectsError({ errorMessage: e.message }));
  }
}

function* updateProject({ payload }) {
  try {
    const item = yield call(api.updateProject, payload);
    yield put(actions.updateProjectSuccess(item.data));
  } catch (e) {
    yield put(actions.projectsError({ errorMessage: e.response.data.message }));
  }
}

function* updateProjectAvatar({ payload }) {
  try {
    const item = yield call(api.updateProjectAvatar, payload);
    yield put(actions.updateProjectAvatarSuccess(item.data));
  } catch (e) {
    yield put(actions.projectsError({ errorMessage: e.response.data.message }));
  }
}

function* removeProjectAvatar({ payload }) {
  try {
    const item = yield call(api.removeProjectAvatar, payload);
    yield put(actions.removeProjectAvatarSuccess(item.data));
  } catch (e) {
    yield put(actions.projectsError({ errorMessage: e.response.data.message }));
  }
}

function* updateProjectCover({ payload }) {
  try {
    const item = yield call(api.updateProjectCover, payload);
    yield put(actions.updateProjectCoverSuccess(item.data));
  } catch (e) {
    yield put(actions.projectsError({ errorMessage: e.response.data.message }));
  }
}

function* removeProjectCover({ payload }) {
  try {
    const item = yield call(api.removeProjectCover, payload);
    yield put(actions.removeProjectCoverSuccess(item.data));
  } catch (e) {
    yield put(actions.projectsError({ errorMessage: e.response.data.message }));
  }
}

function* getProjectPosts({ payload }) {
  try {
    const items = yield call(api.getProjectPosts, payload);
    yield put(actions.getProjectPostsSuccess(items.data));
  } catch (e) {
    yield put(actions.projectsError({ errorMessage: e.message }));
  }
}

function* createProjectPost({ payload }) {
  try {
    const item = yield call(api.createProjectPost, {
      data: payload.data,
      project: payload.project,
    });
    yield put(
      addAlert({
        title: 'Suceso',
        description: 'Publicação realizada com sucesso',
        type: 'success',
      })
    );
    yield call(
      payload.history.push(`/projects/${payload.project}/manage/posts`)
    );
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

function* watchGetProjectPostsRequest() {
  yield takeLatest(actions.Types.GET_PROJECT_POSTS_REQUEST, getProjectPosts);
}

function* watchCreateProjectPostRequest() {
  yield takeLatest(
    actions.Types.CREATE_PROJECT_POST_REQUEST,
    createProjectPost
  );
}

function* watchUpdateProjectRequest() {
  yield takeLatest(actions.Types.UPDATE_PROJECT_REQUEST, updateProject);
}

function* watchUpdateProjectAvatarRequest() {
  yield takeLatest(
    actions.Types.UPDATE_PROJECT_AVATAR_REQUEST,
    updateProjectAvatar
  );
}

function* watchRemoveProjectAvatarRequest() {
  yield takeLatest(
    actions.Types.REMOVE_PROJECT_AVATAR_REQUEST,
    removeProjectAvatar
  );
}

function* watchUpdateProjectCoverRequest() {
  yield takeLatest(
    actions.Types.UPDATE_PROJECT_COVER_REQUEST,
    updateProjectCover
  );
}

function* watchRemoveProjectCoverRequest() {
  yield takeLatest(
    actions.Types.REMOVE_PROJECT_COVER_REQUEST,
    removeProjectCover
  );
}

export default [
  fork(watchGetProjectsRequest),
  fork(watchCreateProjectRequest),
  fork(watchUpdateProjectRequest),
  fork(watchUpdateProjectAvatarRequest),
  fork(watchRemoveProjectAvatarRequest),
  fork(watchUpdateProjectCoverRequest),
  fork(watchRemoveProjectCoverRequest),
  fork(watchGetSingleProjectRequest),
  fork(watchGetProjectPostsRequest),
  fork(watchCreateProjectPostRequest),
];
