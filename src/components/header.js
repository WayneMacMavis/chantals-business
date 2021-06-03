import * as React from "react"

const Header = () => (
  <header
    style={{
      background: `pink`,
      height: `60px`,
      opacity: `0.8`,
    }}
  >
    <h1 style={{ textAlign: `center`, verticalAlign: `text-top`, fontSize: `26px`,}}>So you want better results for your writing?</h1>
    <h2 style={{
      verticalAlign: `text-top`,
      textAlign: `center`,
            marginTop: `-20px`,
            fontSize: `15px`,
            textDecoration: `underline`,
          }}>Learn the 7 essential elements of a submission-ready manuscript.</h2>
  </header>
)

export default Header
