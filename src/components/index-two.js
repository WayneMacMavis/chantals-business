import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import Seo from "../components/seo"
import Nerd from "../assets/images/nerd.png"
import Pencil from "../assets/images/pencil.png"
import Book from "../assets/images/open-book.png"
// import VisibilitySensor from "../components/VisibilitySensor";

const FadeInTop = ({ isVisible, children }) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(-150px)",
    config: { 
      duration: 700, 
    },
  });
  return <animated.div style={props}>{children}</animated.div>;
};

export const FadeInContainer = ({ children }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    visiblity && setVisibility(visiblity);
  };

  return (
    <VisibilitySensor onChange={onChange}>
      <FadeInTop isVisible={isVisible}>{children}</FadeInTop>
    </VisibilitySensor>
  );
};

const FadeInLeft = ({ isVisible, children }) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0px)" : "translateX(-150px)",
    config: { 
      duration: 700, 
    },
  });
  return <animated.div style={props}>{children}</animated.div>;
};

export const FadeInContainerTwo = ({ children }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    visiblity && setVisibility(visiblity);
  };

  return (
    <VisibilitySensor onChange={onChange}>
      <FadeInLeft isVisible={isVisible}>{children}</FadeInLeft>
    </VisibilitySensor>
  );
};

const FadeInBottom = ({ isVisible, children }) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(50px)",
    config: { 
      duration: 700, 
    },
  });
  return <animated.div style={props}>{children}</animated.div>;
};

export const FadeInContainerThree = ({ children }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    visiblity && setVisibility(visiblity);
  };

  return (
    <VisibilitySensor onChange={onChange}>
      <FadeInBottom isVisible={isVisible}>{children}</FadeInBottom>
    </VisibilitySensor>
  );
};

const indexTwo = () => (
  <div style={{
      overflowY: `hidden`,
      position: `relative`,
      backgroundSize: `cover`,
      backgroundImage: `linear-gradient(to right, white , pink)`,
      margin: `0`,
    //   marginleft: `100%`,
      top: `7px`,
      right: `0px`,
      bottom: `-10px`,
      left: `0px`,
    //   marginTop: `54.1%`,
      width: `100vw`,
      height: `auto`,
      // zIndex: `0`,
  }}>
  <div style={{
    position: `relative`,
    textAlign: `center`,
    top: `0vh`,
    left: `150px`,
    width: `50vw`,
    paddingTop: `20px`,
    paddingBottom: `20px`,
    fontFamily: `Cinzel, serif`,
    zIndex: `100`,
  }}>
      <FadeInContainer>
  <img src={Pencil} alt="" width="50px"></img>
  <animated.h1 style={{fontFamily: `Cinzel, serif`, fontSize: `27px`,}}>You want your audience to focus on your message, not your mistakes. </animated.h1>
    </FadeInContainer>
    <FadeInContainerTwo>
  <img src={Book} alt="" width="50px"></img>
  <p>As your ambassador, your editor will help you with this. She’ll protect your credibility and your unique style of writing. </p>
  <p>The alternative? You could skip the editing stage. But distracting language errors and inconsistencies create the impression that you don’t respect your reader. Or worse, that you’re incompetent!</p>
  <p>Working with an inexperienced editor is just as risky. If she over-edits your work, this will water down your persona and make it harder to distinguish yourself from competitors.</p>
  </FadeInContainerTwo>
  <FadeInContainerThree>
  <img src={Nerd} alt="" width="50px"></img>
  <p>The solution? Team up with a certified word nerd with expertise in your genre. If that’s marketing, academia or non-fiction, I can help!</p>
  <a style={{
    cursor: `pointer`,
    textDecoration: `underline`,
    color: `black`,
  }} href="mailto:chantaljosepheditor@gmail.com" type="email" name="email" rel="reply-to" autoComplete="email">Email me for an obligation-free quote.</a>
  </FadeInContainerThree>
  </div>
  <Seo title="Home" />
  </div>
)

export default indexTwo