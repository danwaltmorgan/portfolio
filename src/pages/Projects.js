import React from 'react'
import ProjectWindow from "../comps/ProjectWindow"
import projectsData from "../data/projects.js"


export default function Projects() {

  let projects = projectsData.map(project => {
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
