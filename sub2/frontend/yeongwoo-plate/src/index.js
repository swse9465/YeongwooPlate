import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "./store";
import saga from "./saga";
import { CookiesProvider } from "react-cookie";

const store = configureStore();
store.runSaga(saga);

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById("root")
);
