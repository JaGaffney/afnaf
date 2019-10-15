import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AnimePreview from "../components/animePreview"
import Filter from "../components/filter"

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

  const [filterValues, setFilterValues] = useState([
    "all",
    "parents",
    "partner",
    "friends",
    "kids",
  ])
  const [showAll, setShowAll] = useState(false)
  const [showParents, setShowParents] = useState(false)
  const [showPartner, setShowPartner] = useState(false)
  const [showFriends, setShowFriends] = useState(false)
  const [showKids, setShowKids] = useState(false)

  const reviews = data.allContentfulReview.edges

  const onFilterHandler = (type, showType) => {
    // resets back to default when reset is selected
    if (type === "reset") {
      setFilterValues(["all", "parents", "partner", "friends", "kids"])
      setShowAll(false)
      setShowParents(false)
      setShowPartner(false)
      setShowFriends(false)
      setShowKids(false)
    } else {
      if (showType) {
        setFilterValues([...filterValues, type])
      } else {
        let newFilterArray = filterValues.filter(item => item !== type)
        setFilterValues(newFilterArray)
      }
    }
  }

  const animeContainer = filter => {
    if (filterValues.includes(filter)) {
      return (
        <div className="anime-contents-container">
          {reviews.map(({ node: review }, index) => {
            const title = review.title
            const elevator = review.elevator
            const slug = review.slug
            const tags = review.tags
            const imageData = review.image.fluid

            if (tags[filter] || filter === "all") {
              return (
                <div className="anime-contents-inner" key={index}>
                  <AnimePreview
                    title={title}
                    elevator={elevator}
                    imageData={imageData}
                    slug={slug}
                    tags={tags}
                    index={index}
                  />
                </div>
              )
            }
          })}
        </div>
      )
    }
  }

  return (
    <Layout>
      <SEO title="Home" />

      <div className="anime-container">
        <Filter
          showType={showAll}
          onShowTypeHandler={setShowAll}
          type={"reset"}
          onFilterHandler={onFilterHandler}
        />
        <Filter
          showType={showParents}
          onShowTypeHandler={setShowParents}
          type={"parents"}
          onFilterHandler={onFilterHandler}
        />
        <Filter
          showType={showPartner}
          onShowTypeHandler={setShowPartner}
          type={"partner"}
          onFilterHandler={onFilterHandler}
        />
        <Filter
          showType={showFriends}
          onShowTypeHandler={setShowFriends}
          type={"friends"}
          onFilterHandler={onFilterHandler}
        />
        <Filter
          showType={showKids}
          onShowTypeHandler={setShowKids}
          type={"kids"}
          onFilterHandler={onFilterHandler}
        />

        <div className="anime-contents">
          <h1>Parents</h1>
          {animeContainer("parents")}
        </div>
        <div className="anime-contents">
          <h1>Partner</h1>
          {animeContainer("partner")}
        </div>
        <div className="anime-contents">
          <h1>Friends</h1>
          {animeContainer("friends")}
        </div>
        <div className="anime-contents">
          <h1>Kids</h1>
          {animeContainer("kids")}
        </div>
        <div className="anime-contents">
          <h1>All</h1>
          {animeContainer("all")}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
