import React, { useContext } from "react";
import "../Css/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoContext } from "./TodoContext";

function TodoItem(props) {
  const { ok } = useContext(TodoContext);

  const handleCompleteToggle = () => {
    // Llama a la función onComplete pasando el ID del elemento actual
    props.onComplete(props.id);
    ok("TODO Actualizado", "info");
  };

  return (
    <div className="TodoItemContainer">
      <span
        className={`TodoItemIcon TodoItemIconLeft ${
          props.completed && "Icon-check--active"
        }`}
        onClick={handleCompleteToggle}
      >
        {props.completed ? (
          <FontAwesomeIcon icon="fa-solid fa-square-check" />
        ) : (
          <FontAwesomeIcon icon="fa-regular fa-square-check" />
        )}
        {/* Cambia el icono en función del estado */}
      </span>
      <p className={`${props.completed && "TodoItem-p--completed"}`}>
        {props.value}
      </p>
      <span className="TodoItemIcon TodoItemIconRight" onClick={props.onDelete}>
        <FontAwesomeIcon icon="fa-regular fa-trash-can" />
      </span>
    </div>
  );
}

export { TodoItem };
