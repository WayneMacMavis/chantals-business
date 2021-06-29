import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "../assets/images/img.jpg"

const aboutPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div style={{backgroundImage: `url(${Img})`, overflowY: `hidden`,
      position: `fixed`,
      display: `block`,
      backgroundSize: `cover`,
      left:`-380px`,
      marginLeft: `auto`,
      marginRight: `auto`,
      bottom: `0px`,
      width: `1000px`,
      height: `100vh`,
      zIndex: `-10`,}}></div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  </Layout>
)

export default aboutPage
