import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import '../../index.css';
// import {elementDragControls} from "framer-motion/types/gestures/drag/VisualElementDragControls";

const Fader = ({ text }) => {
  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-in',
  })

  useEffect(() => {
    const timeout = setInterval(() => {
      if(fadeProp.fade.includes('fade-in')) {
        setFadeProp({
          fade: 'fade-out'
        })
      } else {
        setFadeProp({
          fade: 'fade-in'
        })
      }
    }, 2000)

    return ()=> clearInterval(timeout)
  }, [fadeProp])
  return (
    <>
      <h2 className={fadeProp.fade}>{text}</h2>
    </>
  )
}
Fader.defaultProps = {
  text: 'Hello there',
}
Fader.prototype = {
  text: PropTypes.string,
}

export default Fader;
