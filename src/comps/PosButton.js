import React, { useRef, useState, useEffect } from 'react'
import '../style/posButton.css'

export default function PosButton(props) {


  const [secondaryText, setSecondaryText] = useState(props.secondaryText)

  const [style, setStyle] = useState({
    color: "white",
    zIndex: "1",
    [props.position]: "-100%"
  })

  useEffect(() => {
    if (secondaryText) {
      setStyle({
        ...style,
        zIndex: "99",
      })
    }
  }, [])


  function handleOver() {
    setStyle({
      ...style,
      color: "#384552",
      [props.position]: "0%"
    })
  }

  function handleLeave() {
    setStyle({
      ...style,
      color: "white",
      [props.position]: "-100%"
    })
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
            style={{color: style.color}}
            >
            {props.text}
          </p>
          <div
            id="slider"
            style={style}
            >
            {secondaryText}
          </div>
      </a>
    </div>
  )
}
