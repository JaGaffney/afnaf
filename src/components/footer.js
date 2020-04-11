import React from "react"

import { FiGithub, FiGlobe, FiYoutube } from "react-icons/fi"
import { FaDiscord } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer-container">
      <ul>
        <li>
          <a
            href="https://github.com/JaGaffney/afnaf"
            aria-label="Link to GitHub"
          >
            <FiGithub
              vertical-align="middle"
              horizontal-align="middle"
              size="2.5em"
            />
          </a>
        </li>
        <li>
          <a
            href="https://jongaffney.tech/"
            aria-label="Link to my portfolio website"
          >
            <FiGlobe
              vertical-align="middle"
              horizontal-align="middle"
              size="2.5em"
            />
          </a>
        </li>
        <li>
          <a href="https://jongaffney.tech/" aria-label="Link to Youtube">
            <FiYoutube
              vertical-align="middle"
              horizontal-align="middle"
              size="2.5em"
            />
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/eZ2BBWu"
            aria-label="Link to a anime discord"
          >
            <FaDiscord
              vertical-align="middle"
              horizontal-align="middle"
              size="2.5em"
            />
          </a>
        </li>
      </ul>
      <div className="footer-copyright">
        <span>
          © Jon Gaffney{" "}
          <a href="https://jongaffney.tech/">https://jongaffney.tech/</a>
        </span>
      </div>
    </div>
  )
}

export default Footer
