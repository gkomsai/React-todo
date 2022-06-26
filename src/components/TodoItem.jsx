import React, { useState } from "react";
import { ImRadioUnchecked, ImRadioChecked } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
const TodoItem = ({ item, deleteTodo }) => {
  const [state, setState] = useState(false);

  return (
    <div className="individual-item-box">
      <button className="btn" id={!state ? "normal": "green"} onClick={() => setState(!state)}>
        {!state ? (
          <ImRadioUnchecked title="Mark as Completed" />
        ) : (
          <ImRadioChecked title="mark as Pending" />
        )}{" "}
      </button>
      <li className={!state ? "normal" : "striked"}>{item.value}</li>

      <button className="btn" onClick={() => deleteTodo(item.id)}>
        <FaTrash className="trash-icon" title="Delete Todo" />
      </button>
    </div>
  );
};

export default TodoItem;
