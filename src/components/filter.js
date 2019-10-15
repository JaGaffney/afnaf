import React, { useState } from "react"

const Filter = props => {
  let activeButton = ""
  if (props.showType) {
    activeButton = "filter-button-active"
  }
  return (
    <div
      className={`btn filter-button ${activeButton}`}
      onClick={() => {
        props.onShowTypeHandler(!props.showType)
        props.onFilterHandler(props.type, props.showType)
      }}
    >
      {props.type}
    </div>
  )
}

export default Filter
