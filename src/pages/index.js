import React, { useState } from "react"
import Head from "../components/Head"
import Nav from "../components/Nav.js"
import Home from "../components/Home"
import OpenMenu from "../components/OpenMenu"
import CloseMenu from "../components/CloseMenu"
import "./reset.min.css"
import "./index.css"

const IndexPage = () => {
  const [menu, setMenu] = useState(true)

  return (
    <>
      <Head />

      {menu ? (
        <div className="container-menu" onClick={() => setMenu(false)}>
          <OpenMenu />
        </div>
      ) : (
        <div className="container-menu" onClick={() => setMenu(true)}>
          <CloseMenu />
        </div>
      )}
      {menu ? <Home /> : <Nav />}
    </>
  )
}

export default IndexPage
