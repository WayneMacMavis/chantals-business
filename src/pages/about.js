import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "../assets/images/img.jpg"

const aboutPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div style={{position: `fixed`, height: `100vh`, width: `100vw`, backgroundImage: `linear-gradient(to right, white , lightblue, blue)`,}} className="background">
    <div 
    style={{
      backgroundImage: `url(${Img})`, overflowY: `hidden`,
      position: `absolute`,
      display: `block`,
      backgroundSize: `cover`,
      left:`-380px`,
      marginLeft: `auto`,
      marginRight: `auto`,
      bottom: `0px`,
      width: `1000px`,
      height: `100vh`,
      zIndex: `-10`,
      clipPath: `polygon(0 0, 85% 0, 100% 100%, 0 100%)`,
      }}>

      </div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    </div>
  </Layout>
)

export default aboutPage
