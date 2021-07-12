import * as React from "react"
import { Link } from "gatsby"

import "../components/styles/navigation.css"

const Navigation = ({ menuLinks }) => {

  return (
  <nav className="navigation">
    <div className="container">
      <div>
          <nav>
            <ul>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                >
                  <Link className="nav-links" to={link.link} activeStyle={{color: 'rgb(0, 123, 160)', textDecoration: 'underline'}}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </div>
  </nav>
  )
              }
            

export default Navigation
