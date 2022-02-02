import "./styles.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoInputClass from "./components/TodoInputClass";
import TodoListClass from "./components/TodoListClass";
import action from "./actions/action";
import { addTodo, deleteTodo } from "./actions/index";
import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class TodoAppClass extends Component {
  render() {
    return (
      <div className="App">
        <TodoInputClass addTodo={this.props.action.addTodo} />
        <TodoListClass action={this.props.action} list={this.props.list} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(action, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAppClass);
