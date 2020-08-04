import React, { useState, useEffect } from 'react'
import "../style/about.css"
import SectionTitle from '../comps/SectionTitle'
import profPic from "../images/prof-pic.jpg"

import { Icon, InlineIcon } from '@iconify/react';
// npm install --save-dev @iconify/react @iconify/icons-cib
import html5Icon from '@iconify/icons-cib/html5';

// npm install --save-dev @iconify/react @iconify/icons-cib
import css3 from '@iconify/icons-cib/css3';

// npm install --save-dev @iconify/react @iconify/icons-cib
import jsIcon from '@iconify/icons-cib/js';

import reactIcon from '@iconify/icons-cib/react';

import reduxIcon from '@iconify/icons-cib/redux'

import d3js from '@iconify/icons-cib/d3-js'



export default function About() {

  const [margin, setMargin] = useState("0px")
  const [width, setWidth] = useState("0%")
  const [borderRadius, setBorderRadius] = useState("0px")
  const [position, setPosition] = useState("-150%")

  useEffect(() => {
      window.addEventListener("scroll", handleAbout)
  })

  function handleAbout() {
    const threshold = document.getElementById("about").offsetTop - 200
    const aboutSection = document.querySelectorAll(".about-section")
    const invisible = document.querySelectorAll(".invisible")
    if (window.pageYOffset >= threshold) {
      setPosition("0%")
      setTimeout(() => {
        setMargin("10px")
        aboutSection.forEach(sec => {
          sec.classList.add("border-radius")
        })
        invisible.forEach((el, i) => {
          const visible = setTimeout(() => {
            el.classList.add("visible")
          }, 100 * i)
        })
      }, 900)
    }
  }

  return(
    <div class="container" id="about">
      <SectionTitle
        text="About Me"
      />
      <div
        className="grid-container"
        id="about-container"
        style={{gridGap: margin}}
        >

        <div
          id="pic-container"
          className="about-section"
          style={{top: position}}
          >
          <img src={profPic} id="prof-pic" className="about-section invisible"></img>
        </div>

        <div
          id="bio"
          className="about-section"
          style={{left: position}}
          >
          <div className="invisible about-content">
          </div>
        </div>
        <div
          className="about-section"
          id="tech"
          style={{right: position}}
        >
          <Icon
            icon={html5Icon}
            className="icons invisible"
          />
          <Icon
            icon={css3}
            className="icons invisible"
          />
          <Icon
            icon={jsIcon}
            className="icons invisible"
          />
          <Icon
            icon={reactIcon}
            className="icons invisible"
          />
          <Icon
            icon={reduxIcon}
            className="icons invisible"
          />
          <Icon
            icon={d3js}
            className="icons invisible"
          />
        </div>
        <div
          className="about-section"
          id="education"
          style={{bottom: position}}
          >
        </div>
      </div>
    </div>
  )
}
