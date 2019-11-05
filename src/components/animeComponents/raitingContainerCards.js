import React from "react"
import ToolTipI from "../toolTipI"

const RaitingContainerCards = props => {
  const raitingCardGenerator = (type, value, index) => {
    console.log(type)
    console.log(value)
    return (
      <div
        className="review-raiting-card"
        onClick={() =>
          props.onRaitingHandler({
            description: value.description,
            name: type,
          })
        }
        key={type + index}
      >
        <div className="review-raiting-card-inner">
          <h3>{type.split("_").join(" ")}</h3>
          <h1>{value.rank}</h1>

          <ToolTipI type={type} />
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
