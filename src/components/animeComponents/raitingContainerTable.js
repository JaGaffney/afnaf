import React from "react"
import ToolTipI from "../toolTipI"

const RaitingContainerTable = props => {
  const raitingTableGenerator = (type, value, index) => {
    if (type === "overall") {
      return null
    }
    switch (value.rank) {
      case 1:
        return (
          <tr
            onClick={() =>
              props.onRaitingHandler({
                description: value.description,
                name: type,
              })
            }
            key={index}
          >
            <td>{type.split("_").join(" ")}</td>
            <td>{value.rank}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <ToolTipI type={type} />
            </td>
          </tr>
        )
      case 2:
        return (
          <tr
            onClick={() =>
              props.onRaitingHandler({
                description: value.description,
                name: type,
              })
            }
            key={index}
          >
            <td>{type.split("_").join(" ")}</td>
            <td>-</td>
            <td>{value.rank}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <ToolTipI type={type} />
            </td>
          </tr>
        )
      case 3:
        return (
          <tr
            onClick={() =>
              props.onRaitingHandler({
                description: value.description,
                name: type,
              })
            }
            key={index}
          >
            <td>{type.split("_").join(" ")}</td>
            <td>-</td>
            <td>-</td>
            <td>{value.rank}</td>
            <td>-</td>
            <td>-</td>
            <td>
              <ToolTipI type={type} />
            </td>
          </tr>
        )
      case 4:
        return (
          <tr
            onClick={() =>
              props.onRaitingHandler({
                description: value.description,
                name: type,
              })
            }
            key={index}
          >
            <td>{type.split("_").join(" ")}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>{value.rank}</td>
            <td>-</td>
            <td>
              <ToolTipI type={type} />
            </td>
          </tr>
        )
      case 5:
        return (
          <tr
            onClick={() =>
              props.onRaitingHandler({
                description: value.description,
                name: type,
              })
            }
            key={index}
          >
            <td>{type.split("_").join(" ")}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>{value.rank}</td>
            <td>
              <ToolTipI type={type} />
            </td>
          </tr>
        )
      default:
        return null
    }
  }

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
            <th></th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(props.raitingData).map((item, index) => {
            if (props.raitingData[item] != null) {
              return raitingTableGenerator(item, props.raitingData[item], index)
            } else {
              return null
            }
          })}
          <tr />
          <tr
            onClick={() =>
              props.onRaitingHandler({
                description: props.raitingData.overall.description,
                name: "overall",
              })
            }
          >
            <td>Recommendation</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{props.raitingData.overall.rank}/10</td>
            <td>
              <ToolTipI type={"overall"} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RaitingContainerTable
