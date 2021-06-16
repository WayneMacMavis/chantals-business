import React, { Component } from "react"
import "../components/styles/header.css"
import Modal from './Modal';
// import HeaderBtn from './header-btn';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      buttonClicked: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleClick = () => {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    });
  };
  render() {
    return (
  <header className='head'>
    <h1 className='head-h1'>So you want better results for your writing?</h1>
    <Modal show={this.state.show} handleClose={this.hideModal}>
    <h3>Submit to receive your's!</h3>
    <form>
        <div>
          <div>
            <li>
              <input type="text" name="name" placeholder="NAME AND SURNAME" />
            </li>
            <li>
              <input type="email" name="email" rel="reply-to" placeholder="EMAIL" autoComplete="email"/>
            </li>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </div>
        </div>
    </form>
    </Modal>
    <button href={{Modal}} className='head-h2' onClick={this.showModal}>Learn the 7 essential elements of a submission-ready manuscript.</button>
  </header>
)
    }
      }

export default Header;
