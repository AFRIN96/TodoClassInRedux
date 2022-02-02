import React, { Component } from "react";
import { deleteTodo } from "../actions/index";

class TodoItemClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.todo.text,
      completed: this.props.todo.completed
    };
  }
  handleTitleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleDelete() {
    this.props.action.deleteTodo(this.props.todo.id);
  }

  render() {
    return (
      <div>
        <li className="li-items">
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleTitleChange.bind(this)}
          />
        </li>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
      </div>
    );
  }
}
export default TodoItemClass;
