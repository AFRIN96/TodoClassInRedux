import { ADD_TODO, DELETE_TODO } from "../actions/action.types";

const initialState = {
  counter: 0,
  list: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
        list: [...state.list, { id: state.counter + 1, text: action.text }]
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id)
      };
    default:
      return state;
  }
};

export default todoReducer;
