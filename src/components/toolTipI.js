import React from "react"
import ReactTooltip from "react-tooltip"
import { FiHelpCircle } from "react-icons/fi"

import { TOOL_TIP_DATA } from "./data/tooltip-data"

const ToolTipI = props => {
  return (
    <>
      <div data-tip data-for={`tooltip-component-${props.type}`}>
        <FiHelpCircle
          vertical-align="middle"
          horizontal-align="middle"
          size="1em"
        />
      </div>

      <ReactTooltip
        id={`tooltip-component-${props.type}`}
        aria-haspopup={"dialog"}
        html={true}
        effect="solid"
        className="tooltip-component-container"
      >
        {TOOL_TIP_DATA[props.type]}
      </ReactTooltip>
    </>
  )
}

export default ToolTipI
