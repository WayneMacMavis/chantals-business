import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `pink`,
      height: `60px`,
      opacity: `0.8`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0rem 1rem`,
        marginLeft: `27%`,
      }}
    >
      <h1 style={{ margin: 0, }}>
        <Link
          to="/"
          style={{
            verticalAlign: `text-top`,
            color: `black`,
            textDecoration: `none`,
            fontSize: `28px`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <h2 style={{
      verticalAlign: `text-top`,
      textAlign: `center`,
            marginTop: `-12px`,
            fontSize: `15px`,
            textDecoration: `underline`,
          }}>Learn the 7 essential elements of a submission-ready manuscript.</h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
