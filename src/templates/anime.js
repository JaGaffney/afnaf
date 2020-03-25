import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RaitingContainerCards from "../components/animeComponents/raitingContainerCards"

import { FiYoutube } from "react-icons/fi"
import Chip from "@material-ui/core/Chip"
import Rating from "@material-ui/lab/Rating"

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

  return (
    <Layout>
      <SEO title={review.title} />
      <div className="review-container">
        <div className="review-details">
          <div className="review-details-content">
            <div className="review-details-title">
              <h1>{review.title}</h1>
              <Rating
                name="overall-raiting-10"
                value={review.raiting["overall"]["rank"]}
                max={10}
                readOnly
              />
              <div>
                {review.url.length > 3 ? (
                  <a href={review.url} className="youtube-icon">
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
                <i>
                  {review.genre.genre
                    .map((item, index) => (
                      <React.Fragment key={item + index + "tag"}>
                        <Chip
                          size="small"
                          label={item}
                          color="primary"
                          variant="outlined"
                        />{" "}
                      </React.Fragment>
                    ))
                    .sort()}
                </i>
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
          <RaitingContainerCards raitingData={review.raiting} />
          <div className="review-raitings-description">
            {Object.keys(review.raiting).map((name, index) => {
              return (
                <React.Fragment key={name + index}>
                  <h1>
                    {name === "overall"
                      ? "Recommendation"
                      : name.split("_").join(" ")}
                  </h1>
                  <p>{review.raiting[name]["description"]}</p>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AnimeTemplate
