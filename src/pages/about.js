import React from "react"
import Metadata from "../components/Metadata"
import Menu from "../components/Menu.jsx"
import "../styles/reset.min.css"
import "../styles/global.css"
import "../styles/about.css"
import { Link } from "gatsby"

export default function about() {
  return (
    <>
      <Metadata />
      <div className="container">
        <Menu />
        <main className="main">
          <section className="section">
            <h1 className="section__subtitle">Nosotros</h1>
            <div className="wrapper">
              <p className="section__paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, nibh
                quis eros iaculis odio platea.
              </p>
              <p className="section__paragraph">
                Magnis praesent lobortis dignissim rhoncus risus quam ridiculus
                dui, donec at integer elementum egestas mattis quisque
                parturient, ornare diam convallis mollis aliquet nostra litora.
              </p>
              <p className="section__paragraph">
                Volutpat eu duis gravida purus, porta interdum.
              </p>
            </div>
            <Link className="section__link" to="/contact">
              Let’s make something special.
            </Link>
          </section>
        </main>
      </div>
    </>
  )
}
