let initialState = {
  list: []
};

function getId(state) {
  return (
    state.list.reduce((maxId, todo) => {
      return Math.max(todo.id, maxId);
    }, -1) + 1
  );
}
let reducerClass = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return Object.assign({}, state, {
        list: [
          {
            text: action.title,
            completed: false,
            id: getId(state)
          },
          ...state.list
        ]
      });
    case "COMPLETE_TODO":
      return Object.assign({}, state, {
        list: state.list.map((todo) => {
          return todo.id === action.id
            ? Object.assign({}, todo, {
                updated: false,
                completed: !todo.completed
              })
            : todo;
        })
      });
    case "DELETE_TODO":
      return Object.assign({}, state, {
        list: state.list.filter((todo) => {
          return todo.id !== action.id;
        })
      });
    default:
      return state;
  }
};
export default reducerClass;
