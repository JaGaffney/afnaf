import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import ReactTooltip from "react-tooltip"
import { TOOL_TIP_DATA_ANIME } from "../data/tooltip-data"

import Chip from "@material-ui/core/Chip"
import Rating from "@material-ui/lab/Rating"

const AnimePreivew = ({ slug, title, elevator, imageData, tags, raiting }) => {
  const tagValues = Object.keys(tags).filter(item => tags[item] !== false)

  return (
    <Link to={`/anime/${slug}/`} className="anime-preview">
      <Image
        fluid={imageData}
        alt={title}
        className="anime-preview-image"
        objectFit="contain"
        objectPosition="50%"
      />
      <h1 className="anime-preview-title">{title}</h1>
      <p className="anime-preview-description">{elevator.elevator}</p>
      <Rating
        name="overall-raiting-10"
        value={raiting.overall.rank}
        max={10}
        readOnly
        className="anime-preview-raiting"
      />
      <ReactTooltip id="overall" aria-haspopup="dialog" html={true}>
        {TOOL_TIP_DATA_ANIME.overall}
      </ReactTooltip>{" "}
      <div className="anime-preview-tags-container">
        {tagValues.map((item, index) => {
          return (
            <div className="anime-preview-tags" key={index}>
              <Chip
                size="small"
                label={item}
                color="primary"
                variant="outlined"
              />
            </div>
          )
        })}
      </div>
    </Link>
  )
}

export default AnimePreivew
