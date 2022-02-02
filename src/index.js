import { StrictMode } from "react";
import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import configureStore from "./store/store";

import rootReducer from "./reducers/index";
import App from "./App";
import TodoAppClass from "./TodoAppClass";

let initialState = {
  list: []
};
let store = configureStore(initialState);
// const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <TodoAppClass />
    </Provider>
  </StrictMode>,
  rootElement
);
