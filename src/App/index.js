import "./App.css";
import { TodoItem } from "../Components/TodoItem";
import { TodoFilter } from "../Components/TodoFilter";
import { TodoCount } from "../Components/TodoCount";
import { TodoCreate } from "../Components/TodoCreate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoContext } from "../Components/TodoContext";
import { Modal } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm";
import { useContext } from "react";

function App() {
  const { loading, error, searchTodos, completedTodo, deleteTodo, openModal } =
    useContext(TodoContext);

  return (
    <div className="App">
      <TodoCount />

      <br></br>

      <TodoFilter />

      <br />
      {loading && (
        <p>
          <FontAwesomeIcon
            className="icon-G"
            icon="fa-solid fa-rotate-right"
            spin
          />
        </p>
      )}
      {error && (
        <p>
          <FontAwesomeIcon icon="fa-solid fa-bug" fade />
        </p>
      )}
      {!loading && searchTodos.length <= 0 && (
        <p>Debes de crear tu primera tarea</p>
      )}

      {searchTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          value={todo.text}
          completed={todo.completed}
          onComplete={() => completedTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id, todo.text)}
        />
      ))}
      <br />

      <TodoCreate />

      {openModal && (
        <Modal tittle={"Crear TODOs"}>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
}

export default App;
