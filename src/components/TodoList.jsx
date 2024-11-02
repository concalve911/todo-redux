import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/actions";

export default () => {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo({ id: Date.now(), text: inputValue.trim() }));
      setInputValue("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todo">
      <h1 className="todo__title">TODO List</h1>
      <input
        className="todo__input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="todo__button" onClick={handleAddTodo}>
        Add
      </button>
      <ul className="todo__list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo__item">
            {todo.text}
            <button
              className="todo__remove-button"
              onClick={() => handleRemoveTodo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
