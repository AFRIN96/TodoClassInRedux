import React, { Component } from "react";
import TodoItemClass from "./TodoItemClass";
class TodoListClass extends Component {
  render() {
    return (
      <ul className="todo__list">
        {this.props.list.map((todo) => {
          return (
            <TodoItemClass
              key={todo.id}
              todo={todo}
              action={this.props.action}
            />
          );
        })}
      </ul>
    );
  }
}
export default TodoListClass;
