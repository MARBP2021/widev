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
          <h1 className="section__subtitle">Contacto</h1>

          <form action="" className="section__form">
            <input type="text" name="nombre" placeholder="Nombre" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="asunto" placeholder="Tema" />
            <textarea className="textarea" placeholder="Mensaje"></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </section>
      </main>
    </>
  )
}
