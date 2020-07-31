import React, { useState } from 'react'
import SectionTitle from "../comps/SectionTitle"
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

  let projects = data.map((project, i) => {
    return (
      <div>
        <ProjectWindow
          title={project.title}
          tech={project.tech}
          description={project.description}
          url={project.url}
          github={project.github}
          img={project.img}
          alt={project.alt}
          id={project.id}
          key={"key" + i}
        />
      </div>
    )
  })

  return(
    <div
      className="container project-section"
      id="projects"
      >
      <SectionTitle text="Projects I've Worked On"/>
      <div className="project-row">
        {projects}
      </div>
    </div>
  )
}
