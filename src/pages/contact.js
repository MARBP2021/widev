import React from "react"
import Metadata from "../components/Metadata"
import Menu from "../components/Menu.jsx"
import "../styles/reset.min.css"
import "../styles/global.css"
import "../styles/contact.css"

export default function contact() {
  return (
    <>
      <Metadata />
      <Menu />
      <main className="main">
        <section className="section">
          <h1 className="section__subtitle">contact</h1>
        </section>
      </main>
    </>
  )
}
