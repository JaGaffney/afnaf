import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const AnimePreivew = ({ slug, title, elevator }) => (
  <Link to={`/${slug}/`}>
    <div className="anime-preview">
      {/* <Image fluid={imageData} alt={title} className="anime-preview-image" /> */}

      <h1 className="anime-preview-title">{title}</h1>
      <p className="anime-preview-description">{elevator.elevator}</p>
      <p className="anime-preview-tags">Tags</p>
    </div>
  </Link>
)

export default AnimePreivew
