import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBar from "../components/searchBar"

import Filter from "../components/indexComponents/filter"
import AnimeContainer from "../components/indexComponents/animeContainer"

import { FILTER_DATA } from "../components/data/filter-data"

import TuneIcon from "@material-ui/icons/Tune"

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
              kids
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
  const [expanded, setExpanded] = useState(false)

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

  const panel = () => {
    return (
      <>
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
      </>
    )
  }

  return (
    <Layout>
      <SEO title="Anime" />

      <div className="anime-container">
        <div className="anime-banner">
          <div className="anime-filter-container">
            <SearchBar onSearchItem={setSearchItem} searchItem={searchItem} />
            <div className="icon-container">
              <TuneIcon
                onClick={() => setExpanded(!expanded)}
                className={`icon-recolour ${expanded &&
                  "icon-recolour-active"}`}
              />
            </div>

            {expanded && panel()}
          </div>
        </div>

        <div className="anime-contents-wrapper">
          {Object.keys(filterValues).map((item, index) => {
            if (filterValues[item]) {
              return (
                <div className="anime-contents" key={item + index}>
                  {item !== "all" ? (
                    <>
                      <h1 className="anime-contents-title">{item}</h1>
                      <span className="anime-contents-description">
                        "{FILTER_DATA[item]}"
                      </span>
                    </>
                  ) : null}

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

//afanaf instead of repeating the shows when differnt tags are selected add those shows to a group tag
