import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

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
      status
      afnaf
      overall
      description {
        description
      }
      recommendation {
        recommendation
      }
      genre {
        genre
      }
      elevator {
        elevator
      }
      plot {
        rank
        description
      }
      uniqueness {
        rank
        description
      }
      lore {
        rank
        description
      }
      enjoyability {
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
      first5Mins {
        rank
        description
      }
      filler {
        rank
        description
      }
      rewatchability {
        rank
        description
      }
      binge {
        rank
        description
      }
      availability {
        rank
        description
      }
      dub {
        rank
        description
      }
      imageSearch {
        rank
        description
      }
      fanservice {
        rank
        description
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

  // need a better way of handling this
  const plot = { ...review.plot, name: "plot" } // broken atm for rank no idea why
  const uniqueness = { ...review.uniqueness, name: "uniqueness" }
  const lore = { ...review.lore, name: "lore" }
  const enjoyability = { ...review.enjoyability, name: "enjoyability" }
  const music = { ...review.music, name: "music" }
  const animation = { ...review.animation, name: "animation" }
  const length = { ...review.length, name: "length" }
  const first5Mins = { ...review.first5Mins, name: "first_5_Mins" }
  const filler = { ...review.filler, name: "filler" }
  const rewatchability = { ...review.rewatchability, name: "rewatchability" }
  const binge = { ...review.binge, name: "binge" }
  const availability = { ...review.availability, name: "availability" }
  const dub = { ...review.dub, name: "dub" }
  const imageSearch = { ...review.imageSearch, name: "image_search" }
  const fanservice = { ...review.fanservice, name: "fanservice" }

  const raiting = [
    plot,
    uniqueness,
    lore,
    enjoyability,
    music,
    animation,
    length,
    first5Mins,
    filler,
    rewatchability,
    binge,
    availability,
    dub,
    imageSearch,
    fanservice,
  ]

  return (
    <Layout>
      <SEO title={review.title} />
      <div className="review-container">
        <article
          className="review-details"
          aria-label="Overview of anime content"
        >
          <div className="review-details-content">
            <div className="review-details-title">
              <h1>{review.title}</h1>
              <div className="review-details-title-display">
                <span>Anime for non-anime fans</span>
                <Link to="/ratings">
                  <Rating
                    name="overall-raiting-10"
                    value={review.afnaf}
                    max={10}
                    readOnly
                    precision={0.5}
                    className="raiting-10-stars"
                  />
                </Link>
                <span className="hidden">
                  Anime for non-anime fans rating: {review.afnaf}/10
                </span>
              </div>
              <div className="review-details-title-display">
                <span>General rating</span>
                <Link to="/ratings">
                  <Rating
                    name="overall-raiting-10"
                    value={review.overall}
                    max={10}
                    readOnly
                    precision={0.5}
                    className="raiting-10-stars"
                  />
                </Link>
                <span className="hidden">
                  Overall rating: {review.overall}/10
                </span>
              </div>

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

              <div className="review-details-title-display">
                <span>Genre</span>
                <i>
                  {review.genre.genre
                    .map((item, index) => (
                      <React.Fragment key={item + index + "tag"}>
                        <Chip
                          size="small"
                          label={item}
                          variant="outlined"
                          className="light-chip"
                        />{" "}
                      </React.Fragment>
                    ))
                    .sort()}
                </i>
              </div>

              <div className="review-details-title-display">
                <span>Status</span>
                <Chip
                  size="small"
                  label={review.status}
                  variant="outlined"
                  className="light-chip"
                />
              </div>
            </div>
            <div className="review-details-description">
              <h3>Synopsis</h3>
              <p>{review.description.description}</p>
            </div>

            <div className="review-details-description">
              <h3>Recommendation</h3>
              <p>
                {review.recommendation !== null
                  ? review.recommendation.recommendation
                  : "Coming soon, hopefully."}
              </p>
            </div>
          </div>
          <div className="review-details-image-container">
            <Image
              fluid={imageData}
              alt={review.title}
              className="review-details-image"
            />
          </div>
        </article>

        <article className="review-raitings" aria-label="Raitings content">
          <RaitingContainerCards raitingData={raiting} />

          <div className="review-raitings-description">
            {raiting[0]["description"].length > 1
              ? Object.keys(raiting).map((item, index) => {
                  return (
                    <React.Fragment key={item + index}>
                      <h3>{raiting[item]["name"].split("_").join(" ")}</h3>
                      <p>{raiting[item]["description"]}</p>
                    </React.Fragment>
                  )
                })
              : "Coming soon, hopefully"}
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default AnimeTemplate
