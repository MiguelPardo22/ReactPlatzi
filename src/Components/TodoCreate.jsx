import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import "../Css/TodoCreate.css"

function TodoCreate() {
  
  const {setOpenModal, openModal} = useContext(TodoContext);

  const Createtask = () => {
    setOpenModal(!openModal)
  }

  return <button className="CreateButton" onClick={Createtask}>+</button>;
}

export { TodoCreate };
