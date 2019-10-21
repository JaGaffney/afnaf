import React from "react"
import { FiSearch } from "react-icons/fi"

const SearchBar = props => {
  const onHandleChange = e => {
    // ADD ERROR CHECKING
    let value = e.target.value.toLowerCase()
    props.onSearchItem(value)
  }

  return (
    <div className="search-container">
      <FiSearch vertical-align="middle" horizontal-align="middle" size="1rem" />
      <input
        type="text"
        placeholder="Search for an anime..."
        value={props.searchItem || ""}
        onChange={onHandleChange}
      ></input>{" "}
    </div>
  )
}

export default SearchBar