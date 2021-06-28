import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "../assets/images/img.jpg"

const aboutPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div style={{backgroundImage: `url(${Img})`, overflowY: `hidden`,
      position: `absolute`,
      backgroundSize: `cover`,
      left: `-300px`,
      bottom: `0px`,
      minWidth: `900px`,
      minHeight: `100vh`,
      zIndex: `-10`,}}></div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  </Layout>
)

export default aboutPage
