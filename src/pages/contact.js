import React, { useRef, useState } from "react"
import EmailJS from "emailjs-com"
import Metadata from "../components/Metadata"
import Menu from "../components/Menu.jsx"
import Input from "../components/Input.jsx"
import "../styles/reset.min.css"
import "../styles/global.css"
import "../styles/contact.css"

export default function Contact() {
  const [message, setMessage] = useState({ text: null, type: null })
  const form = useRef()

  const validateForm = () => {
    for (let i = 1; i < form.current.childNodes.length - 1; i++) {
      if (form.current.childNodes[i].value === "") {
        setMessage({
          text: "Complete todos los campos",
          type: "message message--info",
        })

        form.current.childNodes[i].focus()

        // Returns false if the form has null fields
        return false
      }
    }

    return true
  }

  const sendEmail = e => {
    e.preventDefault()
    e.persist()

    if (validateForm()) {
      EmailJS.sendForm(
        "service_6uii569", // Service ID
        "template_5yrxjop", // Template ID
        e.target, // HTML Form
        "user_COyFDhPp2gpYNIiIgPV0Y" // User ID
      )
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
    }
  }

  return (
    <>
      <Metadata />
      <div className="container">
        <Menu />
        <main className="main">
          <section className="section">
            <h1 className="section__subtitle">Contacto</h1>
            <form
              className="form"
              onSubmit={sendEmail}
              autoComplete="off"
              ref={form}
            >
              <div className={message.type}>{message.text}</div>
              <Input type="text" name="nombre" placeholder="Nombre" />
              <Input type="email" name="email" placeholder="Email" />
              <Input type="text" name="asunto" placeholder="Asunto" />
              <textarea
                className="textarea"
                name="mensaje"
                placeholder="Mensaje"
              ></textarea>
              <button type="submit" className="button">
                Send Message
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  )
}
