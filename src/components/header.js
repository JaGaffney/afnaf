import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="header-container">
      <div className="header-title">
        <h1 className="nav-title">
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <span className="nav-title-quote">
          'Recommend anime without the weirdness'
        </span>

        <div class="main-bird-container">
          <div class="bird-container">
            <div class="bird"></div>
          </div>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/about/">About</Link>
        </li>
      </ul>
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
