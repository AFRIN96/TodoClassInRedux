let action = {
  addTodo: function (title) {
    return {
      type: "ADD_TODO",
      title: title
    };
  },
  deleteTodo: function (id) {
    return {
      type: "DELETE_TODO",
      id: id
    };
  }
};
export default action;
