import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"


const footer = () => (
  <div>
  <div style={{
    position: `absolute`,
    width: `100vw`,
    height: `3.5vw`,
    // top: `0px`,
    margin: `0`,
    marginTop: `30px`,
    marginBottom: `0px`,
    // height: `20px`,
    textAlign: `left`,
    background: `rgba(43, 164, 172, 0.692)`,
    paddingTop: `15px`,
    zIndex: `1000000000000000000`,
  }}>
     Built by
          {` `}
          <a href="https://web.facebook.com/Wayne.mac.mavis/">Wayne Mac Mavis</a>,
          © {new Date().getFullYear()}
          <div className="icons">
          <a className="icon" href="https://web.facebook.com/ChantalJosephEditor" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} color="rgb(59,89,153)" size="2x" />
          </a>
          <a className="icon" href="/">
          <FontAwesomeIcon icon={faInstagram} color="rgb(228,64,95)" size="2x" />
          </a>
          <a className="icon" href="/">
          <FontAwesomeIcon icon={faLinkedin} color="rgb(0,119,181)" size="2x" />
          </a>
          <a className="icon" href="/">
          <FontAwesomeIcon icon={faYoutube} color="rgb(205,32,31)" size="2x" />
          </a>
          </div>
          </div>
  </div>
)

export default footer