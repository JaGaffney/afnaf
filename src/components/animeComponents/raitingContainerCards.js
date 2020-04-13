import React from "react"
import ToolTipI from "../toolTipI"

import Rating from "@material-ui/lab/Rating"

const RaitingContainerCards = props => {
  const raitingCardGenerator = (type, value, index) => {
    if (type === "overall") return

    return (
      <div className="review-raiting-card" key={type + index}>
        <div className="review-raiting-card-inner">
          <h4>{type.split("_").join(" ")}</h4>
          <div>
            <ToolTipI type={type} />
            <Rating
              name="rank"
              value={value.rank}
              precision={0.5}
              readOnly
              aria-label={`raiting score: ${value.rank}`}
            />
            <span className="hidden">
              {type} raiting: {value.rank}/5
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="review-raiting-ranking">
      <div className="review-raiting-card-container">
        {Object.keys(props.raitingData).map((item, index) => {
          if (props.raitingData[item] != null) {
            return raitingCardGenerator(item, props.raitingData[item], index)
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
}

export default RaitingContainerCards
