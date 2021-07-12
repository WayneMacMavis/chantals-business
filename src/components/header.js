import React, { useState, useEffect } from "react"
import {useSpring, animated} from "react-spring"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import "../components/styles/header.css"
import Modal from './Modal';

const useLocalState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = typeof window !== 'undefined' && sessionStorage.getItem(key);
    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  useEffect(() => {
    const listener = (e) => {
      if (e.storageArea === sessionStorage && e.key === key) {
        setValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key]);

  const setValueInLocalStorage = (newValue) => {
    setValue((currentValue) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;
      sessionStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };

  return [value, setValueInLocalStorage];
};



const Header = () => {
  const [isToggled, setToggle] = useLocalState("isToggled");
  const [selected, setSelected] = useLocalState("selected");
  const [modal, setModal] = useState(false);
  const toggle = () => setSelected(selected => !selected);
  const fade = useSpring({
      opacity: isToggled ? 0 : 0.7,
      height: isToggled ? '0px' : '70px',
      config: { 
        duration: 200, 
      },
  });

    return (
      <>
      <button style={{position: `absolute`, top: `5px`, zIndex: `100000000000000000000`, border: 'none', background: 'transparent'}} onClick={() => setToggle((cur) => (cur === !isToggled ? isToggled : !isToggled))}>
        <FontAwesomeIcon style={{position: `absolute`}} className="header-fas" icon={selected ? faAngleDown : faAngleUp} onClick={() => setToggle(toggle)} size="1x"></FontAwesomeIcon>
      </button>
            <animated.header config={{duration: 1000000}} style={fade} className='head'>
            <button className="modal-button" onClick={() => {setModal(true)}}>Learn the 7 essential elements of a submission-ready manuscript.</button>
              {modal && <Modal closeModal={setModal} />}
                <h1 className='head-h1'>So you want better results for your writing?</h1>
            </animated.header>

  </>
)
    }

export default Header;
