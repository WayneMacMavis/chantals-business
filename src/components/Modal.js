import React, { useState } from "react"
import ReactModal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import "./styles/modal.css";


const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);


    return (
      <div>
  <button className="modal-button" onClick={() => setModalIsOpen(true)}>Learn the 7 essential elements of a submission-ready manuscript.</button>
  <ReactModal className="modal" overlayClassName="overlay" isOpen={modalIsOpen} ariaHideApp={false}>
  <form>
  <h3 className="modal-title">Submit to receive yours!</h3>
  <div className="frame">
          <div>
            <li className="item">
              <input className="modal-box" type="text" name="name" placeholder="NAME AND SURNAME" />
            </li>
            <li className="item">
              <input className="modal-box" type="email" name="email" rel="reply-to" placeholder="EMAIL" autoComplete="email"/>
            </li>
            <div className="submitBtn">
              <button className="btn" type="submit">SUBMIT</button>
            </div>
          </div>
        </div>
    </form>
    <div>
    <button className="closeBtn" onClick={() => setModalIsOpen(false)}>
    <FontAwesomeIcon icon={faTimes} size="1x" />
    </button>
    </div>
  </ReactModal>

  </div>
)
    }

export default Modal