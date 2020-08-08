import React from 'react'

export default function SectionTitle(props) {

  const wordsLength = props.text.split("").length

  const words = props.text.split(" ").map((word, i) => {
    return (
      <span>
        <span className="first-letter">{word[0]}</span>
        {(i === wordsLength - 1) ? word.slice(1) : word.slice(1) + " "}
      </span>
    )
  })

  return (
    <div>
      <h2 className="section-title" id={props.id}>{words}</h2>
    </div>
  )
}
