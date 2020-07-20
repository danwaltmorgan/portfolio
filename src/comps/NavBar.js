import React from 'react'
import {
  Link
} from "react-router-dom"

import '../style/navbar.css'

export default function NavBar() {
  return (
    <div className="nav-container">
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
            href="#"
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
