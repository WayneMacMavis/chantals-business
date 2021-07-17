import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "../assets/images/img.jpg"

const aboutPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div 
    style={{
      position: `relative`, 
      height: `85vh`, 
      zIndex: `-1`, 
      backgroundImage: `linear-gradient(to right, white , lightblue, blue)`,}} 
      className="background">
    <div 
    style={{
      backgroundImage: `url(${Img})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center`,
      position: `absolute`,
      marginLeft:`-15%`,
      top: `1px`,
      width: `60%`,
      height: `85vh`,
      overflowY: `hidden`,
      zIndex: `-1`, 
      clipPath: `polygon(0 0, 85% 0, 100% 100%, 0 100%)`,
      }}>
    </div>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
    </div>
    
  </Layout>
)

export default aboutPage
