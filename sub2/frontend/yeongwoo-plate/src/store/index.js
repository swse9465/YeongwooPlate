import createSagaMiddleware, { END } from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../modules";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";

const customHistory = createBrowserHistory();
const saga = createSagaMiddleware({
  context: {
    history: customHistory,
  },
});

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        ReduxThunk.withExtraArgument({ history: customHistory }),
        saga,
        logger
      )
    )
  );
  store.runSaga = saga.run;
  store.close = () => store.dispatch(END);

  return store;
}
