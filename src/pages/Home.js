import React, { useState, useEffect } from 'react'
import '../style/home.css'
import PosButton from '../comps/PosButton'


export default function Home() {

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

          <PosButton
            text="Learn More"
            secondaryText="About Me"
            position="top"
            background="indianred"
            href="#about"
            target=""
          />
        </div>
      </div>
    </div>
  )
}
