import React from "react"
import { Icon, InlineIcon } from "@iconify/react"
import websiteIcon from "@iconify-icons/gg/website"
import trolley2 from "@iconify-icons/si-glyph/trolley-2"
import mobilePhoneSolid from "@iconify-icons/clarity/mobile-phone-solid";
import fileTypeHtml from '@iconify-icons/vscode-icons/file-type-html';
import fileTypeCss from '@iconify-icons/vscode-icons/file-type-css';
import javascriptIcon from '@iconify-icons/logos/javascript';
import reactIcon from '@iconify-icons/logos/react';
import pythonIcon from '@iconify-icons/logos/python';
import phpIcon from '@iconify-icons/logos/php';
import mysqlIcon from '@iconify-icons/cib/mysql';
import Metadata from "../components/Metadata"
import Menu from "../components/Menu.jsx"
import "../styles/reset.min.css"
import "../styles/global.css"
import "../styles/skills.css"


export default function skills() {
  return (
    <>
      <Metadata />
      <div className="container">
        <Menu />
        <main className="main">
          <section className="section">
            <h2 className="section__title--skills">Que hacemos</h2>
            <div className="section__container">
              <Icon
                icon={websiteIcon}
                color="#ffffff"
                className="iconos"
              />
              <span className="subtitulos section__title--subtitle">
                Paginas Web
              </span>
            </div>
            <div className="section__container">
              <Icon
                icon={trolley2}
                color="#ffffff"
                className="iconos"
              />
              <span className= "subtitulos section__title--subtitle">
                Tiendas E-commerce
              </span>
            </div>
            <div className="subtitulos section__container">
              <Icon
                icon={mobilePhoneSolid}
                color="#ffffff"
                className="iconos"
              />
              <span className="section__title--subtitle">
                Aplicaciones Web
              </span>
            </div>

            <h2 className="section__title--skills" id ="que-usamos">Que usamos</h2>
            
            <div className ="container__grid--icons">
              <Icon icon={fileTypeHtml}  className = "container__grid--technologies"/>
              <Icon icon={fileTypeCss}   className = "container__grid--technologies"/>
              <Icon icon={javascriptIcon}  className = "container__grid--technologies"/>
              <Icon icon={reactIcon}   className = "container__grid--technologies"/>
              <Icon icon={pythonIcon}   className = "container__grid--technologies"/>
              <Icon icon={phpIcon}  className = "container__grid--technologies"/>
              <Icon icon={mysqlIcon} color="#075980"className = "container__grid--technologies"/>
            </div>

          </section>
        </main>
      </div>







    </>
  )
}
