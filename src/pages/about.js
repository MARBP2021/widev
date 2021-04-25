import React from "react"
import Metadata from "../components/Metadata"
import Menu from "../components/Menu.jsx"
import "../styles/reset.min.css"
import "../styles/global.css"
import "../styles/about.css"

export default function about() {
  return (
    <>
      <Metadata />
      <div className="container">
        <Menu />
        <main className="main">
          <section className="section">
            <h1 className="section__subtitle">about</h1>
          </section>
        </main>
      </div>
    </>
  )
}
