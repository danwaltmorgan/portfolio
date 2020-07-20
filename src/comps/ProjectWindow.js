import React from 'react'
import "../style/projWindow.css"

export default function ProjectWindow(props) {


  function handleMouseOver(e) {
    const banners = document.querySelectorAll(`.${props.id}-banner`)
    const img = document.querySelectorAll
    banners.forEach(banner => {
      banner.classList.add("banner-active")
    })

  }

  function handleMouseOut() {
    const banners = document.querySelectorAll(".banner")

    banners.forEach(banner => {
      banner.classList.remove("banner-active")
    })
  }


  return (
    <div
      className="project-container"
      id={props.id}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >
      <div className={props.id + "-banner banner"}></div>
      <div className="img-div">
        <h2 className="test"
          >{props.title}
        </h2>

      </div>
      <div className={props.id + "-banner banner"}></div>
    </div>
  )
}
