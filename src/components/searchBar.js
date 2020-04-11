import React from "react"
import { FiSearch } from "react-icons/fi"

const SearchBar = props => {
  const onHandleChange = e => {
    // ADD ERROR CHECKING
    let value = e.target.value.toLowerCase()
    props.onSearchItem(value)
    // resets filters to allow to search for all items
    props.onFilterHandler("reset", true)
  }

  return (
    <div className="search-container">
      <FiSearch
        vertical-align="middle"
        horizontal-align="middle"
        size="1rem"
        style={{ color: "var(--gray600)" }}
      />
      <input
        type="text"
        placeholder="Search for an anime..."
        value={props.searchItem || ""}
        onChange={onHandleChange}
        aria-label="Search bar"
      ></input>{" "}
    </div>
  )
}

export default SearchBar
