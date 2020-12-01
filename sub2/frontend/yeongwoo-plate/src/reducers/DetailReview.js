import { CALL_DETAIL_REVIEW_DATA, FETCH_DETAIL_REVIEW_DATA_SUCCEEDED, FETCH_DETAIL_REVIEW_DATA_FAILED } from "../actions";

const initialState = {
  detailReview: [],
  isLoading: false,
  error: null,
};

export default function detailStore(state = initialState, action) {
  switch (action.type) {
    case CALL_DETAIL_REVIEW_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_DETAIL_REVIEW_DATA_SUCCEEDED: {
      return {
        ...state,
        detailReview: action.payload.data,
        isLoading: false,
      };
    }
    case FETCH_DETAIL_REVIEW_DATA_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
