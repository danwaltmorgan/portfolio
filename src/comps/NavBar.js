import React, { useEffect, useState } from 'react'


import '../style/navbar.css'

export default function NavBar() {

  const [active, setActive] = useState("0%")

  const defaultColor = {
    "home-nav": "white",
    "about-nav": "white",
    "projects-nav": "white",
    "contact-nav": "white"
  }

  const[color, setColor] = useState(defaultColor)

  const [clicked, setClicked] = useState(false)

  const [scroll, setScroll] = useState(false)


  useEffect(() => {
    window.onscroll = () => {
      stickyNav()
      handleScroll()
    }
  })

  function stickyNav() {
    const navbar = document.getElementById("navbar")
    const homeHeight = document.getElementById("home").offsetHeight
    if (window.pageYOffset >= homeHeight) {
      navbar.classList.add("sticky")
    }
    else {
      navbar.classList.remove("sticky")
    }
  }

  function handleScroll(e) {

    if (clicked) return

    const buffer = 500

    const homeAboutThresh = document.getElementById("about").offsetTop - buffer
    const aboutProjectsThresh = document.getElementById("projects").offsetTop - buffer
    const projectsContactThresh = document.getElementById("contact").offsetTop - buffer

    const location = document.getElementById("location")
    const position = window.pageYOffset

    if (position <= homeAboutThresh) {
      handleSlider("home-nav")
    }
    if (position >= homeAboutThresh
      && position <= aboutProjectsThresh) {
      handleSlider("about-nav")
    }
    if (position >= aboutProjectsThresh
      && position <= projectsContactThresh) {
      handleSlider("projects-nav")
    }
    if (position >= projectsContactThresh) {
      handleSlider("contact-nav")
    }

  }

  function handleSlider(pos) {
    const location = document.getElementById(pos).offsetLeft
    setColor({defaultColor, [pos]: "#384552"})
    setActive(location)
  }

  function handleClick(e) {
    setClicked(true)
    handleSlider(e.target.id)
    setTimeout(() => {
      setClicked(false)
    }, 500)
  }

  const navItems = ["home", "about", "projects", "contact"].map(item => {

    const capitalized = item[0].toUpperCase() + item.slice(1)
    const nav = item + "-nav"

    return (
      <li>
        <a
          href={"#" + item}
          className="link"
          id={nav}
          style={{color: color[nav]}}
          onClick={e => handleClick(e)}
          >
          {capitalized}
        </a>
      </li>
    )
  })

  return (
    <div
      className="nav-container"
      id="navbar"
      >
      <div
        id="location"
        style={{left: active}}
        ></div>
      <ul className="list-container">
        {navItems}
      </ul>
    </div>
  )
}
