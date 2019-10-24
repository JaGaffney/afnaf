import React, { useState } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { FiYoutube } from "react-icons/fi"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RaitingContainer from "../components/animeComponents/raitingContainer"

export const query = graphql`
  query($slug: String!) {
    contentfulReview(slug: { eq: $slug }) {
      title
      url
      description {
        description
      }
      genre {
        genre
      }
      elevator {
        elevator
      }
      raiting {
        overall {
          rank
          description
        }
        lore {
          rank
          description
        }
        music {
          rank
          description
        }
        animation {
          rank
          description
        }
        length {
          rank
          description
        }
        first_5_mins {
          rank
          description
        }
        first_episode {
          rank
          description
        }
        availability {
          rank
          description
        }
        group_watch {
          rank
          description
        }
        filler {
          rank
          description
        }
        image_search {
          rank
          description
        }
        dub_quality {
          rank
          description
        }
      }
      image {
        file {
          url
        }
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const AnimeTemplate = ({ data }) => {
  const review = data.contentfulReview
  const imageData = review.image.fluid

  const [
    raitingDescriptionContainer,
    setRaitingDescriptionContainer,
  ] = useState({
    description: review.raiting.overall.description,
    name: "overall",
  })

  return (
    <Layout>
      <SEO title={review.title} />
      <div className="review-container">
        <div className="review-details">
          <div className="review-details-content">
            <div className="review-details-title">
              <h1>{review.title}</h1>
              <div>
                {review.url !== "" ? (
                  <a href={review.url} className="youtube-icon">
                    {" "}
                    <FiYoutube
                      vertical-align="middle"
                      horizontal-align="middle"
                      size="2rem"
                    />
                  </a>
                ) : null}
              </div>

              <span>
                Genre:{" "}
                <i>{review.genre.genre.map(item => item + ", ").sort()}</i>
              </span>
            </div>
            <div className="review-details-description">
              <p>{review.description.description}</p>
            </div>
          </div>
          <div className="review-details-image-container">
            <Image
              fluid={imageData}
              alt={review.title}
              className="review-details-image"
            />
          </div>
        </div>

        <div className="review-seperator"></div>
        <div className="review-raitings">
          <RaitingContainer
            raitingData={review.raiting}
            onRaitingHandler={setRaitingDescriptionContainer.bind(null)}
          />

          <div className="review-raitings-description">
            <h1>
              {raitingDescriptionContainer.name === "overall"
                ? "Recommendation"
                : raitingDescriptionContainer.name.split("_").join(" ")}
            </h1>
            <p>{raitingDescriptionContainer.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AnimeTemplate
