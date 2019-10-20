import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBar from "../components/searchBar"

import Filter from "../components/indexComponents/filter"
import AnimeContainer from "../components/indexComponents/animeContainer"

import { FILTER_DATA } from "../components/data/filter-data"

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

  const [searchItem, setSearchItem] = useState("")
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
      setShowParents(false)
      setShowPartner(false)
      setShowFriends(false)
      setShowKids(false)
      setShowSolo(false)
    } else {
      if (!showType) {
        setFilterValues({ ...filterValues, [type]: true })
      } else {
        setFilterValues({ ...filterValues, [type]: false })
      }
    }
  }

  return (
    <Layout>
      <SEO title="Home" />

      <div className="anime-container">
        <SearchBar onSearchItem={setSearchItem} searchItem={searchItem} />
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
          {Object.keys(filterValues).map((item, index) => {
            if (filterValues[item]) {
              return (
                <div className="anime-contents" key={index}>
                  <h1 className="anime-contents-title">{item}</h1>
                  <span className="anime-contents-description">
                    "{FILTER_DATA[item]}"
                  </span>
                  <AnimeContainer
                    reviews={reviews}
                    filter={item}
                    filterValues={filterValues}
                    searchItem={searchItem}
                  />
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
