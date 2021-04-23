import React, { useState } from "react"
import { Link } from "gatsby"
import { Icon, InlineIcon } from "@iconify/react"
import bars from "@iconify-icons/fa-solid/bars"
import close from "@iconify-icons/codicon/chrome-close"
import twitter from "@iconify-icons/ant-design/twitter-square-filled"
import facebook from "@iconify-icons/ant-design/facebook-filled"
import instagram from "@iconify-icons/ant-design/instagram-filled"
import whatsapp from "@iconify-icons/fa-brands/whatsapp-square"
import Logo from "../assets/logo.svg"
import "../styles/menu.css"



export default function Menu() {
  // State hooks
  const [icon, setIcon] = useState(bars)
  const [menuClass, setMenuClass] = useState("menu menu--hidden")

  // Social medias
  const socials = [twitter, facebook, instagram, whatsapp]
  const links = [
    "https://twitter.com/",
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://web.whatsapp.com/",
  ]

  // Show or hide menu
  const showMenu = () => {
    if (menuClass === "menu menu--hidden") {
      setIcon(close)
      setMenuClass("menu")
    } else {
      setIcon(bars)
      setMenuClass("menu menu--hidden")
    }
  }

  return (

    <>
      <span className="menu__toggle" onClick={showMenu} aria-hidden="true">
        <Icon icon={icon} />
      </span>
      <nav className={menuClass}>
        <div>
          <Logo className="menu__logo" />
        </div>
        <ul>
          <li className="menu__item">
            <Link className="menu__link" to="/">
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/about">
              About
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/skills">
              Skills
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div>
          {socials.map((item, index) => {
            return (
              <a href={links[index]} key={index} className="menu__icon">
                <InlineIcon icon={item} />
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}
