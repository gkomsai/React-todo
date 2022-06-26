import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data, deleteTodo }) => {
  // this is called unnessary propdrilling , there is need of deleteTodo function in this component but since, our TodoItem is not present in the parent component so we have to do this.
  // to solve the issue of prop drilling we use the context api.
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((el) => (
          <TodoItem key={el.id} deleteTodo={deleteTodo} item={el} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
