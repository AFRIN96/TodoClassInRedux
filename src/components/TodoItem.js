import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions/index";

const TodoItem = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <li className="li-items">
        <input type="text" value={text} onClick={handleDelete} />
      </li>
    </div>
  );
};
export default TodoItem;
