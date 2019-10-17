import React from "react"

const RaitingContainer = props => {
  const raitingTableGenerator = (type, value, index) => {
    if (type === "overall") {
      return null
    }
    switch (value.rank) {
      case 1:
        return (
          <tr
            onClick={() => props.onRaitingHandler(value.description)}
            key={index}
          >
            <td>{type}</td>
            <td>{value.rank}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        )
      case 2:
        return (
          <tr
            onClick={() => props.onRaitingHandler(value.description)}
            key={index}
          >
            <td>{type}</td>
            <td>-</td>
            <td>{value.rank}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        )
      case 3:
        return (
          <tr
            onClick={() => props.onRaitingHandler(value.description)}
            key={index}
          >
            <td>{type}</td>
            <td>-</td>
            <td>-</td>
            <td>{value.rank}</td>
            <td>-</td>
            <td>-</td>
          </tr>
        )
      case 4:
        return (
          <tr
            onClick={() => props.onRaitingHandler(value.description)}
            key={index}
          >
            <td>{type}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>{value.rank}</td>
            <td>-</td>
          </tr>
        )
      case 5:
        return (
          <tr
            onClick={() => props.onRaitingHandler(value.description)}
            key={index}
          >
            <td>{type}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>{value.rank}</td>
          </tr>
        )
      default:
        return null
    }
  }

  console.log(props.raitingData)

  return (
    <div className="review-raiting-ranking">
      <table className="review-raiting-ranking-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Bad</th>
            <th>Meh</th>
            <th>Avg</th>
            <th>Ok</th>
            <th>Good</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(props.raitingData).map((item, index) => {
            console.log(item)
            if (props.raitingData[item] != null) {
              return raitingTableGenerator(
                item.split("_").join(" "),
                props.raitingData[item],
                index
              )
            } else {
              return null
            }
          })}
          <br />
          <tr
            onClick={() =>
              props.onRaitingHandler(props.raitingData.overall.description)
            }
          >
            <td>General raiting</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{props.raitingData.overall.rank}/10</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RaitingContainer
