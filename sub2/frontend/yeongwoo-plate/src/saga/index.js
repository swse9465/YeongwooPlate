import { spawn, put, takeEvery } from "redux-saga/effects";
import * as api from "../api";
import {
  fetchDataSucceeded,
  fetchDataFailed,
  CALL_DATA,
  fetchDetailStoreDataSucceeded,
  fetchDetailStoreDataFailed,
  CALL_DETAIL_STORE_DATA,
  fetchDetailReviewDataSucceeded,
  fetchDetailReviewDataFailed,
  CALL_DETAIL_REVIEW_DATA,
} from "../actions";
// 검색
function* fetchStoresData(params) {
  const { data } = yield api.fetchStores(params.params);
  try {
    yield put(fetchDataSucceeded(data));
  } catch (error) {
    yield put(fetchDataFailed(error.message));
  }
}
// 상세 가게
function* fetchDetailStoreData(params) {
  const { data } = yield api.fetchDetailStore(params.params);
  try {
    yield put(fetchDetailStoreDataSucceeded(data));
  } catch (error) {
    yield put(fetchDetailStoreDataFailed(error.message));
  }
}
// 상세 리뷰
function* fetchDetailReviewData(params) {
  const { data } = yield api.fetchDetailReview(params.params);
  try {
    yield put(fetchDetailReviewDataSucceeded(data));
  } catch (error) {
    yield put(fetchDetailReviewDataFailed(error.message));
  }
}

// function* fetchfetchCategoriContentsData(params) {
//   const { data } = yield api.fetchCategoriContents(params.params);
//   try {
//     yield put(fetchDataSucceeded(data));
//   } catch (error) {
//     yield put(fetchDataFailed(error.message));
//   }
// }

function* watchCall() {
  yield takeEvery(CALL_DATA, fetchStoresData);
  yield takeEvery(CALL_DETAIL_STORE_DATA, fetchDetailStoreData);
  yield takeEvery(CALL_DETAIL_REVIEW_DATA, fetchDetailReviewData);
}

export default function* root() {
  yield spawn(watchCall);
}
