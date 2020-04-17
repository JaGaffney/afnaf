import React from "react"

import AnimePreview from "./animePreview"

const AnimeContainer = props => {
  // sorting alg
  const sortedByRankValues = Object.keys(props.reviews)
    .map(item => {
      return {
        title: props.reviews[item].node.title,
        raiting: props.reviews[item].node.afnaf,
        elevator: props.reviews[item].node.elevator,
        slug: props.reviews[item].node.slug,
        tags: props.reviews[item].node.tags,
        image: props.reviews[item].node.image,
      }
    })
    .sort((a, b) => b.raiting - a.raiting)

  // checks to see if there is no set filters, if so will show all the shows
  const showAll = Object.keys(props.filterValues).every(
    k => !props.filterValues[k]
  )

  return (
    <div className="anime-contents-container">
      {sortedByRankValues.map((review, index) => {
        const title = review.title
        const elevator = review.elevator
        const slug = review.slug
        const tags = review.tags
        const raiting = review.raiting
        const imageData = review.image.fluid

        // tag filter
        let activeTags = Object.keys(tags)
          .map(item => tags[item] && item)
          .filter(Boolean)
        // if array has a valid filter value then returns true to generate the show
        const activeFilter =
          activeTags.filter(item => props.filterValues[item]).length > 0
            ? true
            : false

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
        } else if (activeFilter || props.filterValues["all"] || showAll) {
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

export default AnimeContainer
