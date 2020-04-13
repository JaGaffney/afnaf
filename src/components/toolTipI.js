import React from "react"
import ReactTooltip from "react-tooltip"
import { FiHelpCircle } from "react-icons/fi"

import { TOOL_TIP_DATA_ANIME } from "./data/tooltip-data"

const ToolTipI = props => {
  return (
    <>
      <>
        <FiHelpCircle
          vertical-align="middle"
          horizontal-align="middle"
          size="0.8em"
          data-tip
          data-for={`tooltip-component-${props.type}`}
          style={{ margin: "0 0.1rem" }}
          className="tooltip-item"
        />
      </>

      <ReactTooltip
        id={`tooltip-component-${props.type}`}
        aria-haspopup={"dialog"}
        html={true}
        effect="solid"
        className="tooltip-component-container"
      >
        {TOOL_TIP_DATA_ANIME[props.type]}
      </ReactTooltip>
    </>
  )
}

export default ToolTipI
