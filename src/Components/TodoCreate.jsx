import React from "react";
import "../Css/TodoCreate.css"

function TodoCreate() {
  
  const Createtask = (event) => {
    console.log("Dele funcionalidad caremonda");
  }

  return <button className="CreateButton" onClick={Createtask}>+</button>;
}

export { TodoCreate };
