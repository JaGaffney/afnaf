import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulReview(slug: { eq: $slug }) {
      title
      url
      description {
        description
      }
      raiting {
        overall
        lore
        music
        animation
      }
    }
  }
`

const AnimeTemplate = ({ data }) => {
  const review = data.contentfulReview

  //const imageData = review.image.childImageSharp.fluid
  return (
    <Layout>
      <h1>{review.title}</h1>
      <h1>{review.raiting.overall}/50</h1>

      <p>{review.description.description}</p>

      <div>
        <ul>
          <li>overall: {review.raiting.overall}</li>
          <li>lore: {review.raiting.lore}</li>
          <li>music: {review.raiting.music}</li>
          <li>animation: {review.raiting.animation}</li>
        </ul>
      </div>

      {/* <Image fluid={imageData} alt={review.title} /> */}
      <pre>{JSON.stringify(review, null, 2)}></pre>
    </Layout>
  )
}

export default AnimeTemplate
