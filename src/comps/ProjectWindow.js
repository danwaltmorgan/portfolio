import React from 'react'
import "../style/projWindow.css"
import PosButton from '../comps/PosButton'

export default function ProjectWindow(props) {

  return (
    <div
      className="project-container"
      id={props.id}
      >
      <div className="img-div">
        <img className="proj-pic" src={props.img} alt={props.alt}></img>
      </div>

      <div className="banner top-banner"></div>
      <div className="top-banner-content banner-content">
        <h2 className="project-title">
          {props.title}
        </h2>
        <h3 className="project-tech">
          {props.tech}
        </h3>
        <p className="project-description">
          {props.description}
        </p>
      </div>

      <div className="banner right-banner"></div>
      <div className="right-banner-content banner-content">
        <PosButton
          text="GitHub"
          position="right"
          background="#00d0d0"
          href={props.github}
          target="_blank"
        />
      </div>

      <div className="banner left-banner"></div>
      <div className="left-banner-content banner-content">
        <PosButton
          text="WebSite"
          position="left"
          background="#00d0d0"
          href={props.url}
          target="_blank"
        />
      </div>

      <div className="banner bottom-banner"></div>

    </div>
  )
}
