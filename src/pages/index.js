import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Filter from "../components/indexComponents/filter"
import AnimeContainer from "../components/indexComponents/animeContainer"

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
              solo
            }
            raiting {
              overall {
                rank
              }
            }
            image {
              fluid(maxWidth: 400) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const filterData = {
    parents:
      "Aimed at the skeptic parent who doesn't want to watch cartoons but watches the simpsons",
    partner: "Anime you can watch together",
    friends:
      "So you can have someone to debate with over who is stronger between Narto and Ichigo",
    kids:
      "Child Friendly and not too annoying that you can put up with it on the 500th viewing",
    solo:
      "The weird stuff that's good but you don't want to tell anyone that you have watched it",
    all: "From best to worst, generic raiting",
  }

  const [filterValues, setFilterValues] = useState({
    parents: false,
    partner: false,
    friends: false,
    kids: false,
    solo: false,
    all: true,
  })
  const [showAll, setShowAll] = useState(false)
  const [showParents, setShowParents] = useState(false)
  const [showPartner, setShowPartner] = useState(false)
  const [showFriends, setShowFriends] = useState(false)
  const [showKids, setShowKids] = useState(false)
  const [showSolo, setShowSolo] = useState(false)

  const reviews = data.allContentfulReview.edges

  const onFilterHandler = (type, showType) => {
    // resets back to default when reset is selected
    if (type === "reset") {
      setFilterValues({
        parents: false,
        partner: false,
        friends: false,
        kids: false,
        solo: false,
        all: true,
      })
      setShowAll(false)
      setShowParents(true)
      setShowPartner(true)
      setShowFriends(true)
      setShowKids(true)
      setShowSolo(true)
    } else {
      if (!showType) {
        setFilterValues({ ...filterValues, [type]: true })
      } else {
        // let newFilterArray = filterValues.filter(item => item !== type)
        // setFilterValues(newFilterArray)
        setFilterValues({ ...filterValues, [type]: false })
      }
    }
  }

  return (
    <Layout>
      <SEO title="Home" />

      <div className="anime-container">
        <div className="anime-filter-container">
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
          <Filter
            showType={showSolo}
            onShowTypeHandler={setShowSolo}
            type={"solo"}
            onFilterHandler={onFilterHandler}
          />
        </div>

        <div className="anime-contents-wrapper">
          {Object.keys(filterValues).map(item => {
            if (filterValues[item]) {
              return (
                <div className="anime-contents">
                  <h1 className="anime-contents-title">{item}</h1>
                  <span className="anime-contents-description">
                    "{filterData[item]}"
                  </span>
                  <AnimeContainer
                    reviews={reviews}
                    filter={item}
                    filterValues={filterValues}
                  />
                </div>
              )
            }
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
