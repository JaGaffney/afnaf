import React from "react"
import ReactTooltip from "react-tooltip"
import { FiHelpCircle } from "react-icons/fi"

import { TOOL_TIP_DATA } from "../data/tooltip-data"

const RaitingContainerTable = props => {
  const raitingTableGenerator = (type, value, index) => {
    if (type === "overall") {
      return null
    }
    switch (value.rank) {
      case 1:
        return (
          <>
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
              <td data-tip data-for={type}>
                <FiHelpCircle
                  vertical-align="middle"
                  horizontal-align="middle"
                  size="1rem"
                />
              </td>
            </tr>
            <ReactTooltip id={type} aria-haspopup={"dialog"} html={true}>
              {TOOL_TIP_DATA[type]}
            </ReactTooltip>
          </>
        )
      case 2:
        return (
          <>
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
              <td data-tip data-for={type}>
                <FiHelpCircle
                  vertical-align="middle"
                  horizontal-align="middle"
                  size="1rem"
                />
              </td>
            </tr>
            <ReactTooltip id={type} aria-haspopup={"dialog"} html={true}>
              {TOOL_TIP_DATA[type]}
            </ReactTooltip>
          </>
        )
      case 3:
        return (
          <>
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
              <td data-tip data-for={type}>
                <FiHelpCircle
                  vertical-align="middle"
                  horizontal-align="middle"
                  size="1rem"
                />
              </td>
            </tr>
            <ReactTooltip id={type} aria-haspopup={"dialog"} html={true}>
              {TOOL_TIP_DATA[type]}
            </ReactTooltip>
          </>
        )
      case 4:
        return (
          <>
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
              <td data-tip data-for={type}>
                <FiHelpCircle
                  vertical-align="middle"
                  horizontal-align="middle"
                  size="1rem"
                />
              </td>
            </tr>
            <ReactTooltip id={type} aria-haspopup={"dialog"} html={true}>
              {TOOL_TIP_DATA[type]}
            </ReactTooltip>
          </>
        )
      case 5:
        return (
          <>
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
              <td data-tip data-for={type}>
                <FiHelpCircle
                  vertical-align="middle"
                  horizontal-align="middle"
                  size="1rem"
                />
              </td>
            </tr>
            <ReactTooltip id={type} aria-haspopup={"dialog"} html={true}>
              {TOOL_TIP_DATA[type]}
            </ReactTooltip>
          </>
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
            <td data-tip data-for="overall">
              <FiHelpCircle
                vertical-align="middle"
                horizontal-align="middle"
                size="1rem"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <ReactTooltip id="overall" aria-haspopup="dialog" html={true}>
        {TOOL_TIP_DATA.overall}
      </ReactTooltip>{" "}
    </div>
  )
}

export default RaitingContainerTable
