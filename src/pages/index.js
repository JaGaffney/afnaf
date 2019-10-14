import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AnimePreview from "../components/animePreview"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulReview {
        edges {
          node {
            title
            elevator {
              elevator
            }
            slug
            tags {
              parents
              partner
              friends
              kid
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
      }
    }
  `)

  const reviews = data.allContentfulReview.edges

  return (
    <Layout>
      <SEO title="Home" />

      <div className="anime-container">
        {reviews.map(({ node: review }) => {
          const title = review.title
          const elevator = review.elevator
          const slug = review.slug
          const tags = review.tags
          const imageData = review.image.fluid
          return (
            <AnimePreview
              title={title}
              elevator={elevator}
              imageData={imageData}
              slug={slug}
              tags={tags}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
