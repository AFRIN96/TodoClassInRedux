import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const { list } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <h3>Todo list</h3>
        {list.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
