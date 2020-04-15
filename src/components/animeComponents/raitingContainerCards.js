import React from "react"
import { Link } from "gatsby"
import { FiHelpCircle } from "react-icons/fi"
import Rating from "@material-ui/lab/Rating"

const RaitingContainerCards = props => {
  const raitingCardGenerator = (type, value, index) => {
    if (type === "overall") return

    return (
      <div className="review-raiting-card" key={type + index}>
        <div className="review-raiting-card-inner">
          <h4>{type.split("_").join(" ")}</h4>
          <div>
            <Link to="/raitings">
              <Rating
                name="rank"
                value={value.rank}
                precision={0.5}
                readOnly
                aria-label={`raiting score: ${value.rank}`}
              />
            </Link>
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
        <div className="raitings-help-container">
          <Link to="/raitings" className="raitings-link">
            <FiHelpCircle
              vertical-align="middle"
              horizontal-align="middle"
              size="0.8em"
              style={{ margin: "0 0.4rem" }}
            />
            <span>See how the raiting works!</span>
          </Link>
        </div>

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
