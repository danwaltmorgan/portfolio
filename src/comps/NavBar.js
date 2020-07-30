import React, { useEffect, useState } from 'react'


import '../style/navbar.css'

export default function NavBar() {

  const [active, setActive] = useState("0%")


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

    const buffer = 500

    const homeAboutThresh = document.getElementById("about").offsetTop - buffer

    const aboutProjectsThresh = document.getElementById("projects").offsetTop - buffer

    const projectsContactThresh = document.getElementById("contact").offsetTop - buffer

    const location = document.getElementById("location")
    const position = window.pageYOffset

    if (position <= homeAboutThresh) {
      setActive("0%")
    }
    if (position >= homeAboutThresh
      && position <= aboutProjectsThresh) {
      setActive("25%")
    }
    if (position >= aboutProjectsThresh
      && position <= projectsContactThresh) {
        setActive("50%")
      }
    if (position >= projectsContactThresh) {
      setActive("75%")
    }
  }



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
        <li>
          <a
            href="#home"
            className="link"
            id="home-nav"
            >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="link"
            id="about-nav"

            >
              About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="link"
            id="projects-nav"

            >
              Projects
            </a>
        </li>
        <li>
          <a
            href="#contact"
            className="link"
            id="contact-nav"
            >
              Contact
          </a>
        </li>
      </ul>
    </div>
  )
}
