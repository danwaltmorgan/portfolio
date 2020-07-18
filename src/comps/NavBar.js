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
          <Link to="/"
          className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about"
          className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects"
          className="link"
          >Projects</Link>
        </li>
        <li>
          <Link to="/contact"
          className="link"
          >Contact</Link>
        </li>
      </ul>
    </div>
  )
}
