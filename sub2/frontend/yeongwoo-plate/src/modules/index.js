import { combineReducers } from "redux";
import stores from "../reducers/Search";
import detailStore from "../reducers/DetailStore";
import detailReview from "../reducers/DetailReview";

const rootReducer = combineReducers({ stores,detailStore,detailReview });

export default rootReducer;
