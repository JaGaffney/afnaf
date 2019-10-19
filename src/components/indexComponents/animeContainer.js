import React from "react"

import AnimePreview from "./animePreview"

const AnimeContainer = props => {
  if (props.filterValues[props.filter]) {
    return (
      <div className="anime-contents-container">
        {props.reviews.map(({ node: review }, index) => {
          const title = review.title
          const elevator = review.elevator
          const slug = review.slug
          const tags = review.tags
          const raiting = review.raiting
          const imageData = review.image.fluid

          if (title === "Template") {
            return null
          } else if (tags[props.filter] || props.filter === "all") {
            return (
              <div className="anime-contents-inner" key={index}>
                <AnimePreview
                  title={title}
                  elevator={elevator}
                  imageData={imageData}
                  slug={slug}
                  tags={tags}
                  raiting={raiting}
                  index={index}
                />
              </div>
            )
          }
          return null
        })}
      </div>
    )
  }
  return null
}

export default AnimeContainer
