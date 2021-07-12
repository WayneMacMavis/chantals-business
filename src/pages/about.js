import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "../assets/images/img.jpg"

const aboutPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div style={{overflowX: `hidden`, position: `absolute`, top: `0px`, right: `0px`, bottom: `5px`, left: `190px`, height: `101vh`, zIndex: `-10`, backgroundImage: `linear-gradient(to right, white , lightblue, blue)`,}} className="background"></div>
    <div 
    style={{
      backgroundImage: `url(${Img})`, overflowY: `hidden`,
      position: `relative`,
      display: `block`,
      backgroundSize: `cover`,
      left:`-380px`,
      marginLeft: `auto`,
      marginRight: `auto`,
      bottom: `-5px`,
      width: `800px`,
      height: `81vh`,
      zIndex: `-10`,
      clipPath: `polygon(0 0, 85% 0, 100% 100%, 0 100%)`,
      }}>

      <div style={{
        position: `absolute`,
        left: `130px`,
      }}>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    </div>
    </div>
  </Layout>
)

export default aboutPage
