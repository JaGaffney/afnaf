import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
        availablity {
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
  const [raitingContaier, setRaitingContainer] = useState("")

  const review = data.contentfulReview
  const imageData = review.image.fluid

  return (
    <Layout>
      <SEO title={review.title} />
      <div className="review-container">
        <div className="review-details">
          <div className="review-details-title">
            <h1>{review.title}</h1>
            <h1>raiting: {review.raiting.overall.rank}/100</h1>
          </div>
          <div className="review-details-content">
            <p>{review.description.description}</p>
          </div>

          <div className="review-details-image-container">
            <Image
              fluid={imageData}
              alt={review.title}
              className="review-details-image"
            />
          </div>
        </div>

        <div className="review-raitings">
          <div className="review-raiting-ranking">
            <ul>
              {Object.keys(review.raiting).map((item, index) => {
                if (review.raiting[item] != null) {
                  return (
                    <li
                      key={index}
                      onClick={() =>
                        setRaitingContainer(review.raiting[item].description)
                      }
                    >
                      {item}: {review.raiting[item].rank}
                    </li>
                  )
                } else {
                  return <></>
                }
              })}
            </ul>
          </div>
          <div className="review-raitings-description">{raitingContaier}</div>
        </div>
      </div>
    </Layout>
  )
}

export default AnimeTemplate
