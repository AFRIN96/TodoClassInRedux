import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, deleteTodo } from "../actions/index";
class TodoInputClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleChange(event) {
    console.log(event);
    this.setState({
      text: event.target.value
    });
  }
  handleSubmit(event) {
    if (this.state.text !== "") {
      this.props.addTodo(this.state.text);
      this.setState({
        text: ""
      });
    }
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="add a todo item"
            name="todo"
            value={this.state.text}
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={this.handleSubmit.bind(this)}>ADD</button>
        </form>
      </div>
    );
  }
}
export default connect(
  TodoInputClass.mapStateToProps,
  TodoInputClass.mapDispatchToProps
)(TodoInputClass);
