import React, { useState } from "react"
import {useSpring, animated} from "react-spring"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import "./styles/modal.css";


const Modal = () => {
  const [modal, setModal] = useState(false);

  const fadeDown = useSpring({
    opacity: modal ? 1 : 0,
    top: modal ? '50%' : '10%',
    config: { 
      duration: 600, 
    },
});

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

    return (
      <>
  <button className="modal-button" onClick={toggleModal}>Learn the 7 essential elements of a submission-ready manuscript.</button>

  {modal && (
        <div className="modal">
          <div role = "button" aria-label="overlay" tabIndex={0} onClick={toggleModal} onKeyDown={toggleModal} className="overlay"></div>
          <animated.div style={fadeDown} className="modal-content">
  <form className="modal-form">
  <h3 className="modal-title">Submit to receive yours!</h3>
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
    </form>
    <button className="closeBtn" onClick={toggleModal}>
    <FontAwesomeIcon icon={faTimes} size="1x" />
    </button>
    </animated.div>
</div>
    )}
  </>
)
    }

export default Modal