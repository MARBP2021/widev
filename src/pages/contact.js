import React from "react"
import EmailJS from "emailjs-com"
import Metadata from "../components/Metadata"
import Menu from "../components/Menu.jsx"
import Input from "../components/Input.jsx"
import "../styles/reset.min.css"
import "../styles/global.css"
import "../styles/contact.css"

export default function contact() {
  const sendEmail = e => {
    e.preventDefault()

    EmailJS.sendForm(
      "service_6uii569",
      "template_5yrxjop",
      e.target,
      "user_COyFDhPp2gpYNIiIgPV0Y"
    ).then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    ) /* 
      .then(() => {
          setMessage({
            text: "Mensaje enviado con exito",
            type: "message message--success",
          })

          e.target.reset() // Clear HTML Form
        })
        .catch(() => {
          setMessage({
            text: "Error al enviar el mensaje",
            type: "message message--error",
          })
        })
        */
  }

  return (
    <>
      <Metadata />
      <div className="container">
        <Menu />
        <main className="main">
          <section className="section section__contact">
            <h1 className="section__subtitle">Contacto</h1>

            <form className="form" onSubmit={sendEmail}>
              <Input type="text" name="nombre" placeholder="Nombre" />
              <Input type="email" name="email" placeholder="Email" />
              <Input type="text" name="asunto" placeholder="Asunto" />
              <textarea
                className="textarea"
                name="mensaje"
                placeholder="Mensaje"
              ></textarea>

              <input
                type="submit"
                name="enviar"
                className="button"
                value="Send Message"
              />
            </form>
          </section>
        </main>
      </div>
    </>
  )
}
