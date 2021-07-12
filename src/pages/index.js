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
      // minWidth: `100%`,
      position: `relative`,
      width: `1400px`,
      height: `90vh`,
      display: `block`,
    top: `0px`,
    marginRight: `0px`,
    marginBottom: `-6px`,
    marginLeft: `-230px`,
    // position: `relative`,
  
    overflow: `hidden`,}}>
    <video autoPlay loop muted
    style={{
      position: `relative`,
      // width: `60px`,
      overflow: `hidden`,
      left: `0px`,
      top: `0px`,
      right: `0px`,
      bottom: `0px`,
      marginRight: `10px`,
      minWidth: `50%`,
      minHeight: `50%`,
    }}>
      <source src={Video} type='video/mp4' no-repeat center fixed />
    </video>
    </div>
    <div style={{position: `absolute`, zIndex: `10`, top: `600px`, left: `10%`, }}>
    <animated.div style={fadeLeft}>
    <h1 style={{
      position: `relative`,
      textAlign: `center`,
      width: `60%`,
      left: `100%`,
      color: `white`,
      transform: `translate(-50%,-50%)`,
      textShadow: `2px 2px black`,
      fontFamily: `Cinzel, serif`,
      }}>Editorial peace of mind for non-fiction writers
      </h1>
      </animated.div>
      
</div>
<IndexTwo/>
    </Layout>
    )
  }

export default IndexPage
