import React, { useState } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { FiYoutube, FiList, FiColumns } from "react-icons/fi"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RaitingContainerTable from "../components/animeComponents/raitingContainerTable"
import RaitingContainerCards from "../components/animeComponents/raitingContainerCards"

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

  const [tableType, setTableType] = useState(true)

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
          {tableType === true ? (
            <RaitingContainerTable
              raitingData={review.raiting}
              onRaitingHandler={setRaitingDescriptionContainer.bind(null)}
            />
          ) : (
            <RaitingContainerCards
              raitingData={review.raiting}
              onRaitingHandler={setRaitingDescriptionContainer.bind(null)}
            />
          )}

          <div className="review-raitings-description">
            <div
              className="review-tableType"
              onClick={() => setTableType(!tableType)}
            >
              {tableType === true ? (
                <FiColumns
                  vertical-align="middle"
                  horizontal-align="middle"
                  size="1.3rem"
                />
              ) : (
                <FiList
                  vertical-align="middle"
                  horizontal-align="middle"
                  size="1.3rem"
                />
              )}
            </div>
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
