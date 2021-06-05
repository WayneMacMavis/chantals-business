import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Background from "../assets/images/contactbg.jpg"
import "../assets/stylesheets/contact.css"
import { faFacebookSquare, faInstagramSquare, faLinkedin, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"

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
    <div className="modal">
    <div className="contact-icons">
    <h3>0761234567</h3>
    <FontAwesomeIcon className="phone" icon={faPhoneAlt} size="2x" color="#b6b6b6"/>
    <a href="mailto:chantalj12@gmail.com">
    <FontAwesomeIcon className="email" icon={faEnvelope} size="2x" color="#b6b6b6"/>
    <h3>chantalj12@gmail.com</h3>
    </a>
    </div>
    <div className="icons-container">
    <a className="icon" href="https://web.facebook.com/ChantalJosephEditor">
    <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#1bbacf"/>
    </a>
    <a className="icon" href="/">
    <FontAwesomeIcon icon={faInstagramSquare} size="2x" color="#1bbacf"/>
    </a>
    <a className="icon" href="/">
    <FontAwesomeIcon icon={faLinkedin} size="2x" color="#1bbacf"/>
    </a>
    <a className="icon" href="/">
    <FontAwesomeIcon icon={faYoutubeSquare} size="2x" color="#1bbacf"/>
    </a>
    </div>
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
</form>
</div>
  </Layout>
)

export default contactPage