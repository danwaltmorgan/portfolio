import React from 'react'

import NavBar from './comps/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import './style/index.css'

export default function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <Projects />
    </div>
  )
}
