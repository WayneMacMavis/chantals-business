import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"

import Background from "../assets/images/contactbg.jpg"
import "../components/styles/contact.css"


const contactPage = () => (
  <Layout>
    <Seo title="Page five" />
    <div style={{backgroundImage: `url(${Background})`, overflowY: `hidden`,
      position: `absolute`,
      backgroundSize: `cover`,
      left: `0px`,
      top: `0px`,
      minWidth: `100%`,
      minHeight: `100%`,
      zIndex: `-10`,}}></div>
    {/* <div className="modal">
    <form method="post" action="https://formspree.io/f/mvodawpn">
    <label>
    <input type="text" name="name" placeholder="Name and Surname" />
  </label>
    <label>
    <input type="email" name="email" placeholder="Email" />
  </label>
  <label>
    <input type="country" name="country" placeholder="Country" />
  </label>
  <label>
    <input type="text" name="subject" placeholder="Subject"/>
  </label>
  <label>
  <textarea type="text" name="message" placeholder="Type your message..."/> 
  </label>
  <input type="submit" value="Send"/>
  <input type="reset" value="Clear" />
  <div className="contact-icons">
    <FontAwesomeIcon className="phone" icon={faPhoneAlt} size="2x" color="#b6b6b6"/>
    <h3>0761234567</h3>
    <a href="mailto:chantaljosepheditor@gmail.com">
    <FontAwesomeIcon className="email" icon={faEnvelope} size="2x" color="#b6b6b6"/>
    <h3>chantaljosepheditor@gmail.com</h3>
    </a>
    </div>
  <div className="icons-container">
    <a className="icon" href="https://web.facebook.com/ChantalJosephEditor">
    <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
    </a>
    <a className="icon" href="/">
    <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
    </a>
    <a className="icon" href="/">
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a className="icon" href="/">
    <FontAwesomeIcon icon={faYoutubeSquare} size="2x" />
    </a>
    </div>
</form>
</div> */}


<div className="background">
  <div className="container">
    <form className="screen" method="post" action="https://formspree.io/f/mvodawpn">
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>GET IN</span>
            <span>TOUCH</span>
          </div>
          <div className="icons-container">
          <a className="icon" href="https://web.facebook.com/ChantalJosephEditor">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a className="icon" href="/">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a className="icon" href="/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a className="icon" href="/">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          </div>
          <div className="app-contact"><FontAwesomeIcon className="phone" icon={faPhoneAlt} size="1x" /> +27761234567
          <a href="mailto:chantaljosepheditor@gmail.com"><FontAwesomeIcon className="email" icon={faEnvelope} size="1x" /> chantaljosepheditor</a>
          </div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <li className="app-form-group">
              <input className="app-form-control" type="text" name="name" placeholder="NAME AND SURNAME" />
            </li>
            <li className="app-form-group">
              <input className="app-form-control" type="email" name="email" placeholder="EMAIL" autocomplete="email"/>
            </li>
            <li className="app-form-group">
              <input className="app-form-control" type="tel" name="phone" placeholder="PHONE" />
            </li>
            <li className="app-form-group">
              <input className="app-form-control" type="country" name="country" placeholder="COUNTRY" />
            </li>
            <li className="app-form-group">
              <input className="app-form-control" type="text" name="subject" placeholder="SUBJECT" />
            </li>
            <li className="app-form-group message">
              <textarea className="app-form-control" type="text" name="message" placeholder="TYPE YOUR MESSAGE" />
            </li>
            <div className="app-form-group buttons">
              <button className="app-form-button" type="reset">CANCEL</button>
              <button className="app-form-button" type="submit">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  </div>
  </Layout>
)

export default contactPage