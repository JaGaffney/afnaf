import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import Chip from "@material-ui/core/Chip"
import Rating from "@material-ui/lab/Rating"

const AnimePreivew = ({ slug, title, elevator, imageData, tags, raiting }) => {
  const tagValues = Object.keys(tags).filter(item => tags[item] !== false)
  return (
    <Link to={`/anime/${slug}/`} className="anime-preview">
      <Image
        fluid={imageData}
        alt={`${title} Poster`}
        className="anime-preview-image"
        objectFit="contain"
        objectPosition="50%"
      />
      <h1 className="anime-preview-title">{title}</h1>
      <p className="anime-preview-description">{elevator.elevator}</p>
      <Rating
        name="overall-raiting-10"
        value={raiting !== null ? raiting : 0}
        max={10}
        precision={0.5}
        readOnly
        className="anime-preview-raiting"
        aria-label={`rating score: ${raiting !== null ? raiting : 0}`}
      />
      <span className="hidden">
        Anime for non-anime fans rating: {raiting !== null ? raiting : 0}/10
      </span>
      <div className="anime-preview-tags-container">
        {tagValues.map((item, index) => {
          return (
            <div className="anime-preview-tags" key={index}>
              <Chip
                size="small"
                label={item}
                variant="outlined"
                className="dark-chip"
              />
            </div>
          )
        })}
      </div>
    </Link>
  )
}

export default AnimePreivew
