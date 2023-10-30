import "./App.css";
import { TodoItem } from "../Components/TodoItem";
import { TodoFilter } from "../Components/TodoFilter";
import { TodoCount } from "../Components/TodoCount";
import { TodoCreate } from "../Components/TodoCreate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoContext } from "../Components/TodoContext";
import { TodoProvider } from "../Components/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        {/* <TodoCount completed={completedTodos} total={totalTodos} /> */}
        <TodoCount />

        <br></br>

        {/* <TodoFilter inputText={searchValue} setInputText={setSearchValue} /> */}
        <TodoFilter />

        <TodoContext.Consumer>
          {({ loading, error, searchTodos, completedTodo, deleteTodo }) => (
            <>
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
                  onDelete={() => deleteTodo(todo.id)}
                />
              ))}
              <br />
            </>
          )}
        </TodoContext.Consumer>
        <TodoCreate />
      </TodoProvider>
    </div>
  );
}

export default App;
