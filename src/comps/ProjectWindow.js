import React from 'react'
import "../style/projWindow.css"

export default function ProjectWindow(props) {


  function handleMouseOver(e) {
    const banners = document.querySelectorAll(`.${props.id}-banner`)
    const title = document.querySelector(`.project-title`)
    // const img = document.querySelectorAll
    banners.forEach(banner => {
      banner.classList.add("banner-active")
    })
    // title.forEach(tit => {
    //   tit.style.display = "block"
    // })
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
      <div className={props.id + "-banner banner"}>
        <h2 className={props.id + "project-title project-title"}
          >{props.title}
        </h2>
      </div>
      <div className="img-div">

      </div>
      <div className={props.id + "-banner banner"}></div>
    </div>
  )
}
