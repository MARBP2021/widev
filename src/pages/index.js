import React from "react"
import { Link } from "gatsby"
import Metadata from "../components/Metadata"
import Menu from "../components/Menu.jsx"
import "../styles/reset.min.css"
import "../styles/global.css"
import "../styles/index.css"

export default function IndexPage() {
  return (
    <>
      <Metadata />
      <Menu />
      <main className="main">
        <section className="section">
          <h1 className="section__title">
            Hello, <br />
            we’re WiDev, <br />
            a web developer <br />
            team
          </h1>
          <Link className="button" to="/contact">
            Contactanos
          </Link>
        </section>
      </main>
    </>
  )
}
