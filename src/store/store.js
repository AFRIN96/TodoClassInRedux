import { createStore } from "redux";
import reducerClass from "../reducers/reducerClass";
let finalCreateStore = createStore;
export default function configureStore(initialState = { list: [] }) {
  return finalCreateStore(reducerClass, initialState);
}
