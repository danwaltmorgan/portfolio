import React, { useState, useEffect } from 'react'
import '../style/posButton.css'

export default function PosButton(props) {


  const [secondaryText] = useState(props.secondaryText)

  const [style, setStyle] = useState({
    color: "white",
    zIndex: "1",
    [props.position]: "-100%",
    background: props.background,
    // border: `2px solid ${props.background}`
  })

  const [border, setBorder] = useState(
    `2px solid white`
  )

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
    setBorder(`2px solid ${props.background}`)
  }

  function handleLeave() {
    setStyle({
      ...style,
      color: "white",
      [props.position]: "-100%"
    })
    setBorder(`2px solid white`)
  }

  return (
    <div>
      <a
        href={props.href}
        target={props.target}
        className="btn"
        id="btn"
        onMouseOver={handleOver}
        onMouseLeave={handleLeave}
        style={{border: border}}
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
