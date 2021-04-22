import React from "react"
import { Link } from "gatsby"

const Links = () => {
  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <li className="header__nav__ul--li"></li>

          <Link to="/" className="header__nav__ul--li">
            Home
          </Link>
          <Link to="/about" className="header__nav__ul--li">
            About
          </Link>
          <Link to="/technologies" className="header__nav__ul--li">
            Technologies
          </Link>
          <Link to="/works" className="header__nav__ul--li">
            Works
          </Link>
          <Link to="/contact" className="header__nav__ul--li">
            Contact
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Links
