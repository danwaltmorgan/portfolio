import React, { useEffect } from 'react'


import '../style/navbar.css'

export default function NavBar() {

  useEffect(() => {
    window.onscroll = () => {stickyNav()}

    const navbar = document.getElementById("navbar")
    const sticky = navbar.offsetTop

    function stickyNav() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky")
      }
    }
  })


  return (
    <div
      className="nav-container"
      id="navbar"
      >
      <ul className="list-container">
        <li>
          <a
            href="#home"
            className="link"
            >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="link"
            >
              About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="link"
            >
              Projects
            </a>
        </li>
        <li>
          <a
            href="#"
            className="link"
            >
              Contact
          </a>
        </li>
      </ul>
    </div>
  )
}
