import React from "react"
import Metadata from "../components/Metadata"
import Menu from "../components/Menu.jsx"
import Input from "../components/Input.jsx"
import Button from "../components/Button.jsx"
import "../styles/reset.min.css"
import "../styles/global.css"
import "../styles/contact.css"

export default function contact() {
  return (
    <>
      <Metadata />
      <div class="container">
        <Menu />
        <main className="main">
          <section className="section">
            <h1 className="section__subtitle">Contacto</h1>
            <form className="form">
              <Input type="text" name="nombre" placeholder="Nombre" />
              <Input type="email" name="email" placeholder="Email" />
              <Input type="text" name="asunto" placeholder="Asunto" />
              <textarea className="textarea" placeholder="Mensaje"></textarea>
              <Button message="Send Message" route="#" />
            </form>
          </section>
        </main>
      </div>
    </>
  )
}
