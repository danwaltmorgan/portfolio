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
        <img src="https://lh3.googleusercontent.com/ndlK4-IZ-QwMnZzmluc8ca_B6XMSjDxZKHkxZgxqCPwOomky2YgJk-KTby5IOCZ-bZw7oDLq30gtufS215k--NLeSLPJb9oEN_j6rBDD4cu46wEZ949uRpuZH77l7zlqQOg4QDeyLQ=s200-p-k"></img>
      </div>
      <div className="banner bottom-banner"></div>
      <div className="bottom-banner-content banner-content">

        <PosButton text="GitHub"/>
        <PosButton text="WebSite"/>


      </div>
    </div>
  )
}
