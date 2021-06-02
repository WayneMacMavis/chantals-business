import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Video from "../assets/videos/homeBg.mp4"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 style={{
      position: `absolute`,
      textAlign: `center`,
      bottom: `20px`,
      color: `whitesmoke`,
      }}>Editorial peace of mind for non-fiction writers</h1>
    <div 
    style={{
    backgroundSize: `cover`,
    position: `absolute`,
    top: `0px`,
    right: `0px`,
    bottom: `0px`,
    left: `0px`,
    overflow: `hidden`,
    zIndex: `-100`,
    }}>
    <video autoPlay loop muted
    style={{
      overflowY: `hidden`,
      position: `absolute`,
      backgroundSize: `cover`,
      left: `0px`,
      top: `0px`,
      minWidth: `100%`,
      minHeight: `100%`,
    }}>
      <source src={Video} type='video/mp4' />
    </video>
    <div style={{
  position: `fixed`,
  width: `100%`,
  height: `100%`, 
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: `rgba(0,0,0,0.4)`,
  zIndex: `100`,
  cursor: `pointer`,
  overflowY: `hidden`,
    }}></div>
    </div>
    </Layout>
)

export default IndexPage
