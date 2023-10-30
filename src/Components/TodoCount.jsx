import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import "../Css/TodoCount.css";

function TodoCount() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return completedTodos === totalTodos ? (
    <h1 className="TodoCountContainer">Has completado todos tus TODOS 🥳</h1>
  ) : (
    <h1 className="TodoCountContainer">
      Has completado <span> {completedTodos} </span>de <span>{totalTodos}</span>{" "}
      TODOS
    </h1>
  );
}

export { TodoCount };
