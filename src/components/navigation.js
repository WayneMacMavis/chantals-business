import * as React from "react"
import { Link } from "gatsby"

const Navigation = ({ menuLinks }) => (
  <header
    style={{
      textAlign:`center`,
      position: `sticky`,
      height: `50px`,
      background: `aqua`,
      opacity: `0.8`,
      boxShadow: `1px 2px 20px black`,
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        padding: `5px`,
      }}
    >
      <h1 style={{ margin: 0, top: `10px`, }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        </Link>
      </h1>
      <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `0.3rem`,
                  }}
                >
                  <Link style={{ color: `black` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </div>
  </header>
)

export default Navigation
