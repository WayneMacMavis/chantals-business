/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Navigation from "./navigation"
import Overlay from "./overlay"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Navigation menuLinks={data.site.siteMetadata.menuLinks} />
      <Overlay />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
              <main>{children}</main>
              <footer
          style={{
            position: `absolute`,
            width: `99%`,
            textAlign: `left`,
            left: `10px`,
            bottom: `0.1rem`,
          }}
        >
          Built by
          {` `}
          <a href="https://web.facebook.com/Wayne.mac.mavis/">Wayne Mac Mavis</a>,
          © {new Date().getFullYear()}
          <div className="icons">
          <a className="icon" href="https://web.facebook.com/ChantalJosephEditor">
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
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
