import React, { useRef, useState, useEffect } from 'react'

export default function PosButton(props) {

  const slider = useRef(null)

  const [secondaryText, setSecondaryText] = useState(props.secondaryText)

  const [color, setColor] = useState("white")
  const [zIndex, setZIndex] = useState("")

  useEffect(() => {
    if (!secondaryText) {
      setZIndex(1)
    }
  })


  function handleOver() {
    slider.current.style.top = "0px"
    setColor("#384552")
  }

  function handleLeave() {
    slider.current.style.top = "-50px"
    setColor("white")
  }

  return (
    <div>
      <a
        href="#about"
        className="btn"
        id="btn"
        onMouseOver={handleOver}
        onMouseLeave={handleLeave}
        >
          <p
            className="btn-text"
            style={{color: color}}
            >
            {props.text}
          </p>
          <div
            id="slider"
            ref={slider}
            style={{zIndex: zIndex}}
            >
            {secondaryText}
          </div>
      </a>
    </div>
  )
}
