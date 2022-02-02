import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/index";

const TodoInput = () => {
  const [text, setText] = useState("");
  const todoReducer = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    } else {
      // alert("cant not to empty text");
    }
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a todo item"
          name="todo"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button onClick={handleSubmit}>ADD</button>
      </form>
    </div>
  );
};
export default TodoInput;
