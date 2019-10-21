import React from "react"

import { FiFacebook, FiGithub, FiGlobe, FiYoutube } from "react-icons/fi"
import { FaDiscord } from "react-icons/fa"

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
          <a href="https://github.com/JaGaffney/afnaf">
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
        <li>
          <a href="https://discord.gg/eZ2BBWu">
            <FaDiscord
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
