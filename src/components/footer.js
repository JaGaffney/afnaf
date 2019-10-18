import React from "react"

import { FiFacebook, FiGithub, FiGlobe, FiYoutube } from "react-icons/fi"

const Footer = () => {
  return (
    <div className="footer-container">
      <ul>
        <li>
          <a href="https://jongaffney.tech/">
            <FiFacebook
              vertical-align="middle"
              horizontal-align="middle"
              size="3em"
            />
          </a>
        </li>
        <li>
          <a href="https://jongaffney.tech/">
            <FiGithub
              vertical-align="middle"
              horizontal-align="middle"
              size="3em"
            />
          </a>
        </li>
        <li>
          <a href="https://jongaffney.tech/">
            <FiGlobe
              vertical-align="middle"
              horizontal-align="middle"
              size="3em"
            />
          </a>
        </li>
        <li>
          <a href="https://jongaffney.tech/">
            <FiYoutube
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
