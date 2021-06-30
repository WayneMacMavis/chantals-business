import * as React from "react"

const Overlay = () => {
  return (
      <>
    <div style={{
  position: `fixed`,
  width: `100%`,
  height: `200%`, 
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: `rgba(0,0,0,0.3)`,
  zIndex: `1`,
  overflowY: `hidden`,
    }}>
    </div>
    </>
    )
  }

export default Overlay