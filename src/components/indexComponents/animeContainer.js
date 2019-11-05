import React from "react"

import AnimePreview from "./animePreview"

const AnimeContainer = props => {
  // sorting alg
  const sortedByRankValues = Object.keys(props.reviews)
    .map(item => {
      return {
        title: props.reviews[item].node.title,
        rank: props.reviews[item].node.raiting.overall.rank,
        elevator: props.reviews[item].node.elevator,
        slug: props.reviews[item].node.slug,
        tags: props.reviews[item].node.tags,
        image: props.reviews[item].node.image,
        raiting: props.reviews[item].node.raiting,
      }
    })
    .sort((a, b) => b.rank - a.rank)

  if (props.filterValues[props.filter]) {
    return (
      <div className="anime-contents-container">
        {sortedByRankValues.map((review, index) => {
          const title = review.title
          const elevator = review.elevator
          const slug = review.slug
          const tags = review.tags
          const raiting = review.raiting
          const imageData = review.image.fluid

          if (title === "Template") {
            return null
          } else if (props.searchItem !== "") {
            if (title.toLowerCase().includes(props.searchItem)) {
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
            } else {
              return null
            }
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
