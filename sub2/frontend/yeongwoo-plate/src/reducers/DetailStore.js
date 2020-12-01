import { CALL_DETAIL_STORE_DATA, FETCH_DETAIL_STORE_DATA_SUCCEEDED, FETCH_DETAIL_STORE_DATA_FAILED } from "../actions";

const initialState = {
  detailStore: [],
  isLoading: false,
  error: null,
};

export default function detailStore(state = initialState, action) {
  switch (action.type) {
    case CALL_DETAIL_STORE_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_DETAIL_STORE_DATA_SUCCEEDED: {
      return {
        ...state,
        detailStore: action.payload.data,
        isLoading: false,
      };
    }
    case FETCH_DETAIL_STORE_DATA_FAILED: {
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
