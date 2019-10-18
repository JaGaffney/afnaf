import React from "react"
import ReactTooltip from "react-tooltip"

import { FiHelpCircle } from "react-icons/fi"

const RaitingContainer = props => {
  const toolTipData = {
    lore:
      "How much previous knowledge of Japan you need to know in order to 'get' it.",
    overall: "How good is the anime to watch as a non-anime fan.",
    music: "How weeb is the opening and general music.",
    animation: "Art style and character design, does everyone look normal?",
    length: "Is it shounen level or 12 episodes.",
    first_5_mins: "How likely the person will keep watching after the opening?",
    first_episode:
      "How likely the person will keep watching after the first episode.",
    availablity: "Is it on netflix/amazon prime.",
    group_watch: "How easy is it to watch as a group?",
    filler: "How many fillers and what is the quality of these fillers.",
    image_search:
      "When you google the name, does it come up with fan art as the default image.",
    dub_quality: "How good is the dub?",
  }

  const raitingTableGenerator = (type, value, index) => {
    if (type === "overall") {
      return null
    }
    switch (value.rank) {
      case 1:
        return (
          <>
            <tr
              onClick={() => props.onRaitingHandler(value.description)}
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
            <ReactTooltip id={type} aria-haspopup={type}>
              {toolTipData[type]}
            </ReactTooltip>
          </>
        )
      case 2:
        return (
          <>
            <tr
              onClick={() => props.onRaitingHandler(value.description)}
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
            <ReactTooltip id={type} aria-haspopup={type}>
              {toolTipData[type]}
            </ReactTooltip>
          </>
        )
      case 3:
        return (
          <>
            <tr
              onClick={() => props.onRaitingHandler(value.description)}
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
            <ReactTooltip id={type} aria-haspopup={type}>
              {toolTipData[type]}
            </ReactTooltip>
          </>
        )
      case 4:
        return (
          <>
            <tr
              onClick={() => props.onRaitingHandler(value.description)}
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
            <ReactTooltip id={type} aria-haspopup={type}>
              {toolTipData[type]}
            </ReactTooltip>
          </>
        )
      case 5:
        return (
          <>
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
              <td data-tip data-for={type}>
                <FiHelpCircle
                  vertical-align="middle"
                  horizontal-align="middle"
                  size="1rem"
                />
              </td>
            </tr>
            <ReactTooltip id={type} aria-haspopup={type}>
              {toolTipData[type]}
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
            console.log(item)
            if (props.raitingData[item] != null) {
              return raitingTableGenerator(item, props.raitingData[item], index)
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
          <ReactTooltip id="overall" aria-haspopup="overall">
            {toolTipData.overall}
          </ReactTooltip>
        </tbody>
      </table>
    </div>
  )
}

export default RaitingContainer
