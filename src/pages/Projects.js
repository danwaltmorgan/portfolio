import React, { useState } from 'react'
import ProjectWindow from "../comps/ProjectWindow"
import projectsData from "../data/projects.js"


export default function Projects() {

  const [data, setData] = useState(projectsData)

  function handleSort(sorter) {
    data.forEach(dat => {
      if (!dat.tech.includes(sorter)) {
        let win = document.getElementById(dat.id)
        win.style.height = "0px"
        win.style.width = "0px"
      }
    })
  }

  let projects = data.map(project => {
    return (
      <div>
        <ProjectWindow
          title={project.title}
          url={project.url}
          id={project.id}
        />
      </div>
    )
  })

  return(
    <div
      className="container"
      id="projects"
      >
      {projects}
    </div>
  )
}
