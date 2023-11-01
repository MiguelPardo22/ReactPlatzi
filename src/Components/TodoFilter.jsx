import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import "../Css/TodoFilter.css";

function TodoFilter(props) {
  const [isFocused, setIsFocused] = useState(false);
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (searchValue.trim() === "") {
      setIsFocused(false);
    }
  };

  const changeFilter = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={`input-container ${isFocused ? "focused" : ""}`}>
      <h4>Filtrado de Tareas:</h4>
      <input
        id="searchTodo"
        name="searchTodo"
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={searchValue}
        onChange={(e) => changeFilter(e)}
      />
    </div>
  );
}

export { TodoFilter };
