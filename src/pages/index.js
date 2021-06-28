import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"


import Video from "../assets/videos/homeBg.mp4"

const IndexPage = () => {
  return (
  <Layout>
    <Seo title="Home" />
    <h1 style={{
      position: `absolute`,
      textAlign: `center`,
      left: `50%`,
      bottom: `1%`,
      color: `whitesmoke`,
      transform: `translate(-50%,-50%)`,
      textShadow: `2px 2px black`,
      fontFamily: `Cinzel, serif`,
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
      marginRight: `10px`,
      minWidth: `100%`,
      minHeight: `100%`,
    }}>
      <source src={Video} type='video/mp4' />
    </video>
    <div style={{
  position: `fixed`,
  width: `100%`,
  height: `200%`, 
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: `rgba(0,0,0,0.3)`,
  zIndex: `100`,
  cursor: `pointer`,
  overflowY: `hidden`,
    }}></div>
    </div>
    </Layout>
    )
  }

export default IndexPage
