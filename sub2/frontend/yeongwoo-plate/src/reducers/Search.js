import { CALL_DATA, FETCH_DATA_SUCCEEDED, FETCH_DATA_FAILED } from "../actions";

const initialState = {
  stores: [],
  isLoading: false,
  error: null,
};

export default function stores(state = initialState, action) {
  switch (action.type) {
    case CALL_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_DATA_SUCCEEDED: {
      return {
        ...state,
        stores: action.payload.data,
        isLoading: false,
      };
    }
    case FETCH_DATA_FAILED: {
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
