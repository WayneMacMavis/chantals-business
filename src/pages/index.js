import * as React from "react"
import { useSpring, animated } from 'react-spring'

import Layout from "../components/layout"
import Seo from "../components/seo"


import Video from "../assets/videos/homeBg.mp4"

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
    delay: 3000,
    config: { duration: 1000, tension: 20 }
});
  return (
  <Layout>
    <Seo title="Home" />
    <div style={{
    top: `0px`,
    right: `0px`,
    bottom: `0px`,
    left: `0px`,
    position: `absolute`,
    backgroundSize: `cover`,
    // zIndex: `-12`,
    overflow: `hidden`,}}>
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
    </div>
    <div style={{position: `absolute`, zIndex: `10000000`, top: `600px`, left: `10%`, }}>
    <animated.div style={fadeLeft}>
    <h1 style={{
      position: `relative`,
      textAlign: `center`,
      width: `60%`,
      left: `100%`,
      // bottom: `0px`,
      color: `white`,
      transform: `translate(-50%,-50%)`,
      textShadow: `2px 2px black`,
      fontFamily: `Cinzel, serif`,
      zIndex: `100000`,
      }}>Editorial peace of mind for non-fiction writers
      </h1>
      </animated.div>
</div>
    </Layout>
    )
  }

export default IndexPage
