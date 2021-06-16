import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Header from './header'
import '../components/styles/header.css';

class HeaderBtn extends Component {
  constructor( props ) {
    super( props );
    this.state = { 
      show: true, 
      isToggleOn: true
    };
  }

  toggleDiv = () => {
    const{ show } = this.state;
    this.setState({ show: !show });
  };

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
  <>
  
    <FontAwesomeIcon icon={this.state.isToggleOn ? faAngleUp : faAngleDown} type='button' style={{position: `absolute`, zIndex: `10000000`}} onClick={ () => {
      this.toggleDiv(); 
      this.handleClick();}} size="1x">
    </FontAwesomeIcon>
    {this.state.show && <Header />}
  </>
)
    }
      }

export default HeaderBtn;