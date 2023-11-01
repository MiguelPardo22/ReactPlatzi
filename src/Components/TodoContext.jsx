import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const [closing, setClosing] = useState(false);

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setOpenModal(!openModal);
      setClosing(false);
    }, 300); // Ajusta la duración de la animación (en milisegundos) para que coincida con la animación CSS
  };

  const modalClasses = ["ModalContent"];
  if (closing) {
    modalClasses.push("closing");
  }

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchTodos = todos.filter((todo) => {
    // función texto sin tildes
    const noTildes = (text) => {
      return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const todoText = noTildes(todo.text.toLowerCase());
    const searchText = noTildes(searchValue.toLowerCase());
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ id: uuidv4(), text, completed: false });
    saveTodos(newTodos);
  };

  const completedTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // Alternar el valor de completed
    saveTodos(newTodos);
  };

  const deleteTodo = (id, name) => {
    Swal.fire({
      title: "¿Está seguro de eliminar " + name + "?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-check"></i> Si, eliminar',
      cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === id);
        newTodos.splice(todoIndex, 1);
        // newTodos.pop(todoIndex); Mi forma de eliminar un dato de un array
        saveTodos(newTodos);
        ok("TODO Eliminado", "error");
      }
    });
  };

  // const deleteTodo = (id) => {
  //   const newTodos = [...todos];
  //   const todoIndex = newTodos.findIndex((todo) => todo.id === id);
  //   newTodos.splice(todoIndex, 1);
  //   // newTodos.pop(todoIndex); Mi forma de eliminar un dato de un array
  //   saveTodos(newTodos);
  //   ok("TODO Eliminado", "error");
  // };

  const ok = (msj, icon) => {
    Swal.fire({
      title: msj,
      icon: icon,
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      position: "bottom-end",
      toast: true,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchTodos,
        completedTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        closeModal,
        modalClasses,
        addTodo,
        ok,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
