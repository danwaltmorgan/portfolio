import React, { useState, useEffect } from 'react'
import "../style/about.css"
import SectionTitle from '../comps/SectionTitle'
import profPic from "../images/prof-pic.jpg"

export default function About() {

  const [margin, setMargin] = useState("0px")
  const [width, setWidth] = useState("0%")
  const [borderRadius, setBorderRadius] = useState("0px")
  const [position, setPosition] = useState("-100%")

  useEffect(() => {
    window.addEventListener("scroll", handleAbout)
  })

  function handleAbout() {
    const threshold = document.getElementById("about").offsetTop - 200
    const aboutSection = document.querySelectorAll(".about-section")
    const invisible = document.querySelectorAll(".invisible")
    if (window.pageYOffset >= threshold) {
      setWidth("100%")
      setPosition("0%")
      setTimeout(() => {
        setMargin("5px")
        aboutSection.forEach(sec => {
          sec.classList.add("border-radius")
        })
        invisible.forEach(el => {
          el.classList.add("visible")
        })
      }, 900)
    }
  }

  return(
    <div class="container about-container" id="about">
      <SectionTitle
        text="About Me"
      />
      <div className="section-container" id="about-container">
        <div id="left-section" style={{marginRight: margin}}>
          <div
            className="about-section"
            id="bio"
            style={{marginBottom: margin, left: position}}
          >
            <div id="pic-container" className="about-section"
              style={{marginRight: margin}}>
              <img src={profPic} id="prof-pic" className="about-section invisible"></img>
            </div>
            <div id="bio-info" className="about-section"
              style={{marginLeft: margin}}>
              <div className="invisible about-content">
                <p>
                </p>

              </div>
            </div>
          </div>
          <div
            className="about-section"
            id="education"
            style={{marginTop: margin, right: position}}
          ></div>
        </div>
        <div
          className="about-section"
          id="tech"
          style={{marginLeft: margin, bottom: position}}
          >

          </div>
      </div>


    </div>
  )
}
