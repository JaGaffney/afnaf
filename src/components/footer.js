import React from "react"

import { FiFacebook, FiGithub, FiGlobe } from "react-icons/fi"

const Footer = () => {
  return (
    <div className="footer-container">
      <ul>
        <li>
          {" "}
          <FiFacebook
            vertical-align="middle"
            horizontal-align="middle"
            size="3em"
          />
        </li>
        <li>
          {" "}
          <FiGithub
            vertical-align="middle"
            horizontal-align="middle"
            size="3em"
          />
        </li>
        <li>
          <a href="https://jongaffney.tech/">
            {" "}
            <FiGlobe
              vertical-align="middle"
              horizontal-align="middle"
              size="3em"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
