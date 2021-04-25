import React from "react"
import Metadata from "../components/Metadata"
import Menu from "../components/Menu.jsx"
import "../styles/reset.min.css"
import "../styles/global.css"
import "../styles/index.css"

export default function projects() {
  return (
    <>
      <Metadata />
      <div className="container">
        <Menu />
        <main className="main">
          <section className="section">
            <h1 className="section__subtitle">projects</h1>
          </section>
        </main>
      </div>
    </>
  )
}
