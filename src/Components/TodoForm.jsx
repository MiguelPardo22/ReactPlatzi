import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import "../Css/TodoForm.css";

function TodoForm() {
  const { closeModal, addTodo, ok } = useContext(TodoContext);
  const [newTodosValue, setTodosValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodosValue);
    ok("TODO creado", "success");
    closeModal();
  }

  const onChange = (e) => {
    setTodosValue(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="todoName">Nombre del TODO:</label>
        <textarea
          id="todoName"
          name="todoName"
          value={newTodosValue}
          onChange={onChange}
          placeholder="Nombre del TODO"
        ></textarea>
      </div>
      <div className="containerButton">
        <button type="button" className="btn danger" onClick={closeModal}>
          Cancelar <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </button>
        <button type="submit" className="btn success">
          Guardar <FontAwesomeIcon icon="fa-solid fa-check" />
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
