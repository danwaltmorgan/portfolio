import React, { useRef } from 'react'
import "../style/projWindow.css"
import PosButton from '../comps/PosButton'

export default function ProjectWindow(props) {


  return (
    <div
      className="project-container"
      id={props.id}
      >
      <div className="banner top-banner">
      </div>
      <div className="top-banner-content banner-content">
        <h2 className="project-title"
          >{props.title}
        </h2>
      </div>
      <div className="img-div">
        <p style={{fontSize: "3em"}}>Test</p>
      </div>
      <div className="banner bottom-banner"></div>
      <div className="bottom-banner-content banner-content">

        <PosButton text="GitHub"/>
        <PosButton text="WebSite"/>


      </div>
    </div>
  )
}
