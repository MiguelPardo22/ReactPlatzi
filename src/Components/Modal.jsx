import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import ReactDOM from "react-dom";
import "../Css/Modal.css";

function Modal({ children, tittle }) {
  const { modalClasses, closeModal } =
    useContext(TodoContext);

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className={modalClasses.join(" ")}>
        <button className="CloseButton" onClick={closeModal}>
          &times;
        </button>
        <div className="ModalHeader">
          <h2>{tittle}</h2>
        </div>
        <div className="ModalCard">{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
