export const CALL_DATA = "CALL_DATA";
export const FETCH_DATA_SUCCEEDED = "FETCH_DATA_SUCCEEDED";
export const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";
export const CALL_DETAIL_STORE_DATA = "CALL_DETAIL_STORE_DATA";
export const FETCH_DETAIL_STORE_DATA_SUCCEEDED = "FETCH_DETAIL_STORE_DATA_SUCCEEDED";
export const FETCH_DETAIL_STORE_DATA_FAILED = "FETCH_DETAIL_STORE_DATA_FAILED";
export const CALL_DETAIL_REVIEW_DATA = "CALL_DETAIL_REVIEW_DATA";
export const FETCH_DETAIL_REVIEW_DATA_SUCCEEDED = "FETCH_DETAIL_REVIEW_DATA_SUCCEEDED";
export const FETCH_DETAIL_REVIEW_DATA_FAILED = "FETCH_DETAIL_REVIEW_DATA_FAILED";

export function fetchDataSucceeded(data) {
  return {
    type: FETCH_DATA_SUCCEEDED,
    payload: {
      data,
    },
  };
}

export function fetchDataFailed(error) {
  return {
    type: FETCH_DATA_FAILED,
    payload: {
      error,
    },
  };
}

export function fetchDataStarted(params) {
  return {
    type: CALL_DATA,
    params: params,
  };
}
// 가게 상세 페이지
export function fetchDetailStoreDataSucceeded(data) {
  return {
    type: FETCH_DETAIL_STORE_DATA_SUCCEEDED,
    payload: {
      data,
    },
  };
}

export function fetchDetailStoreDataFailed(error) {
  return {
    type: FETCH_DETAIL_STORE_DATA_FAILED,
    payload: {
      error,
    },
  };
}

export function fetchDetailStoreDataStarted(params) {
  return {
    type: CALL_DETAIL_STORE_DATA,
    params: params,
  };
}
// 리뷰 상세 페이지
export function fetchDetailReviewDataSucceeded(data) {
  return {
    type: FETCH_DETAIL_REVIEW_DATA_SUCCEEDED,
    payload: {
      data,
    },
  };
}

export function fetchDetailReviewDataFailed(error) {
  return {
    type: FETCH_DETAIL_REVIEW_DATA_FAILED,
    payload: {
      error,
    },
  };
}

export function fetchDetailReviewDataStarted(params) {
  return {
    type: CALL_DETAIL_REVIEW_DATA,
    params: params,
  };
}
