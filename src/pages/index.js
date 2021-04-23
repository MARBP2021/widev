import React from "react"
import { Link } from "gatsby"
import Head from "../components/Head"
import Nav from "../components/Nav.js"
import { css } from "@emotion/react"
import "./reset.min.css"
import "./index.css"

const IndexPage = () => {
  return (
    <>
      <Head />

      <Nav />

      <h1 className="title-h1">
        Hello,
        <br />
        we’re WiDev, a web developer team
      </h1>

      <Link
        to="/contact"
        css={css`
          text-decoration: none;
        `}
      >
        <button className="contacto">Contactanos</button>
      </Link>
    </>
  )
}

export default IndexPage
