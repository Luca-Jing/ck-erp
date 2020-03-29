import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "./types";
import * as fakeData from "../../fake-data";

function* loadHierarchyAsync(action: types.ReqHierarchyAction) {
  const hierarchy = yield call(fetchHierarchyAsync, action.UID);
  yield put<types.LoadHierarchyAction>({
    type: types.LOAD_HIERARCHY,
    payload: hierarchy
  });
}

function fetchHierarchyAsync(UID: string) {
  return fakeData.hierarchyList;
}

export function* watchLoadHierarchyAsync() {
  yield takeLatest(types.REQUEST_HIERARCHY, loadHierarchyAsync);
}
