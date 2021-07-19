import * as React from "react"
import { useSpring, animated } from 'react-spring'

import Layout from "../components/layout"
import Seo from "../components/seo"

import Video from "../assets/videos/homeBg.mp4"

import IndexTwo from "../components/index-two"


const IndexPage = () => {
  const fadeLeft = useSpring({
    from: {
      opacity: 0,
      transform: "translate( -50% , 50%)" 
    },
    to: {
      opacity: 1,
      transform: "translate( -50%, -50%)"
    },
    delay: 1000,
    config: { duration: 1000, tension: 20 }
});
  return (
  <Layout>
    <Seo title="Home" />
    <div style={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    position: `relative`,
    width: `100vw`,
    height: `90vh`,
    top: `0`,
    right: `0`,
    bottom: `0`,
    left: `0`,
    backgroundPosition: `center`,
    overflow: `hidden`,
    }}>
    <video autoPlay loop muted
    style={{

      objectFit: `cover`,
      width: `100%`,
      height: `100%`,
      top: `0`,
      left: `0`,
    }}>
      <source src={Video} type='video/mp4'/>
    </video>
    <div style={{
      position: `absolute`,
      top: `80%`,
      left: `50%`,
      width: `50%`,
      zIndex: `10`,
    }}>
    <animated.div style={fadeLeft}>
    <h1 style={{
      textShadow: `2px 2px black`,
      textAlign: `center`,
      fontFamily: `'Source Serif Pro', serif`,
      fontSize: `50px`,
      color: `rgb(0,0,128)`,
      }}>Editorial peace of mind for non-fiction writers
      </h1>
      </animated.div>
      </div>
      </div>
<IndexTwo/>
    </Layout>
    )
  }

export default IndexPage
