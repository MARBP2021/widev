import React from "react"
import Metadata from "../components/Metadata"
import Menu from "../components/Menu.jsx"
import "../styles/reset.min.css"
import "../styles/global.css"
import "../styles/index.css"
import "../styles/projects.css"
import AuraMusic from "../assets/aura-music.svg"
import PaperNews from "../assets/the-paper-news.svg"
export default function projects() {
  return (
    <>
      <Metadata />
      <div className="container container-projects">
        <Menu />
        <main className="main main-projects">
          <section className="section section__projects">
            <a href="https://aura-music.netlify.app/">
              <AuraMusic className="aura-music" />
            </a>
            <a href="https://marbp2021.github.io/the-paper-news/">
              <PaperNews className="paper-news" />
            </a>
          </section>
        </main>
      </div>
    </>
  )
}
