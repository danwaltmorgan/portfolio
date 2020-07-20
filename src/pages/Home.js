import React, { useState, useEffect } from 'react'
import '../style/home.css'

export default function Home() {

  // const [button, setButton] = useState(true)
  //
  // useEffect(() => {
  //   const slider = document.getElementById("slider")
  //   slider.style.top = "-50px"
  //
  //   if (button) {
  //     handleHover()
  //   }
  //   if (!button) {
  //     handleLeave()
  //   }
  // })


  function handleHover() {
    const slider = document.getElementById("slider")
      slider.style.top = "0px"
  }

  function handleLeave() {
    const slider = document.getElementById("slider")
    slider.style.top = "-50px"
  }

  return (
    <div
      className="container"
      id="home"
      >
      <div>
        <h1 className="text">
          <span id="name">DanMorgan</span> <br/>
           Front-End <br/> Developer
        </h1>
        <div>
          <a href="#projects"
            className="btn"
            id="btn"
            onMouseOver={handleHover}
            onMouseOut={handleLeave}
            >
                <p className="btn-text">
                  Learn More
                </p>
                <div id="slider"></div>
          </a>
        </div>
      </div>
    </div>
  )
}
