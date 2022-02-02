import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import reducerClass from "./reducerClass";
const rootReducer = combineReducers({
  reducerClass,
  todoReducer
});

export default rootReducer;
