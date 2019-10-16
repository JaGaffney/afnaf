import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const AnimePreivew = ({ slug, title, elevator, imageData, tags, raiting }) => {
  const tagValues = Object.keys(tags).filter(item => tags[item] !== false)

  return (
    <Link to={`/${slug}/`} className="anime-preview">
      <Image
        fluid={imageData}
        alt={title}
        className="anime-preview-image"
        objectFit="contain"
        objectPosition="50%"
      />

      <h1 className="anime-preview-title">{title}</h1>
      <p className="anime-preview-description">{elevator.elevator}</p>
      <span className="anime-preview-raiting">{raiting.overall.rank}/100</span>

      <div className="anime-preview-tags-container">
        {tagValues.map((item, index) => {
          return (
            <div className="anime-preview-tags" key={index}>
              {item}
            </div>
          )
        })}
      </div>
    </Link>
  )
}

export default AnimePreivew
