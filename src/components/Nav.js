import React, { useState } from "react"
import LogoWiDev from "./Logo"
import HamburgerIcon from "./Hamburger-icon"
import CloseIcon from "./Close-icon"
import Links from "./Links"
import Footer from "./Footer"
import "./Nav.css"

const Nav = () => {
  const [oculto, setOculto] = useState(true)

  return (
    <>
      {oculto ? (
        <>
          <header className="header">
            <div
              className="container-menu"
              onClick={() => setOculto(false)}
              aria-hidden="true"
            >
              <HamburgerIcon />
            </div>
          </header>
        </>
      ) : (
        <>
          <header className="header">
            <div
              className="container-menu"
              onClick={() => setOculto(true)}
              aria-hidden="true"
            >
              <CloseIcon />
            </div>
            <LogoWiDev />
          </header>

          <Links />

          <Footer />
        </>
      )}
    </>
  )
}

export default Nav
