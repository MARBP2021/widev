import React from "react"
import { Link } from 'gatsby';
import Metadata from "../components/Metadata"
import Menu from "../components/Menu.jsx"
import "../styles/global.css"
import "../styles/index.css"
import "../styles/projects.css"
import AuraMusic from '../assets/aura-music.svg'
import PaperNews from "../assets/the-paper-news.svg"

export default function projects() {
  return (
    <>
      <Metadata />
      <div className="container container-projects">
        <Menu />
        <main className="main main-projects">
          <section className="section section__projects">
            
          <Link to = "https://aura-music.netlify.app/" className = "aura-music-a">
            <AuraMusic className = "aura-music" />            
          </Link>
          
          <Link to = "https://marbp2021.github.io/the-paper-news/" className = "paper-news-a">
            <PaperNews className ="paper-news"/>
          </Link>


             
            
          </section>
        </main>
      </div>
    </>
  )
}
