import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 } from "uuid";
import { FaPlus } from "react-icons/fa";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (el) => {
    setTodos([...todos, { id: v4(), value: el }]);
    setText("");
  };
  const deleteTodo = (id) => {
    // console.log(id);
    let newTodo = todos.filter((el) => el.id !== id);
    setTodos(newTodo);
  };
  return (
    <div className="main-cotainer">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn" disabled={!text} onClick={() => addTodo(text)}>
          <FaPlus title=" Add Todo" />
        </button>
      </div>

      <TodoList data={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
