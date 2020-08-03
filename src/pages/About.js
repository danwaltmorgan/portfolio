import React, { useState, useEffect } from 'react'
import "../style/about.css"
import SectionTitle from '../comps/SectionTitle'

export default function About() {

  const [margin, setMargin] = useState("5px")
  const [width, setWidth] = useState("90%")

  useEffect(() => {
    window.addEventListener("onscroll", handleScrollAbout())
  }, [])

  function handleScrollAbout() {
    const threshold = document.getElementById("about").offsetTop
    if (window.pageYOffset >= threshold) {
      setWidth("90%")
        setMargin("5px")
    }
  }

  return(
    <div class="container about-container" id="about">
      <SectionTitle
        text="About Me"
      />
      <div className="section-container" style={{width: width}}>
        <div id="left-section" style={{marginRight: margin}}>
          <div
            className="about-section"
            id="bio"
            style={{marginBottom: margin}}
          ></div>
          <div
            className="about-section"
            id="education"
            style={{marginTop: margin}}
          ></div>
        </div>
        <div
          className="about-section"
          id="tech"
          style={{marginLeft: margin}}
          ></div>
      </div>


    </div>
  )
}
