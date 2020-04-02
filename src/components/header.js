import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Title from "../images/title.svg"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="header-container">
      <div className="header-title">
        <div className="nav-title">
          <Link to="/">
            <img src={Title} alt="logo" />
          </Link>
        </div>
      </div>
      <span className="nav-title-quote">
        'Recommend anime without the weirdness'
      </span>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
