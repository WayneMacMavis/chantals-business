import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="closeBtn" type="button" onClick={handleClose}>
        <FontAwesomeIcon icon={faTimes} size="1x" />
        </button>
      </section>
    </div>
  );
};

export default Modal;