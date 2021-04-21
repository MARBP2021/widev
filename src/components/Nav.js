import React, {useState} from "react";
import { Link } from "gatsby";
import Logo from "../images/logo-menu.svg";
import { Icon } from "@iconify/react";
import twitterIcon from "@iconify-icons/logos/twitter";
import bxlWhatsapp from "@iconify-icons/bx/bxl-whatsapp";
import facebookIcon from "@iconify-icons/bi/facebook";
import instagramFilled from "@iconify-icons/ant-design/instagram-filled";
import OpenMenu from './OpenMenu';
import CloseMenu from './CloseMenu';
import "./Nav.css";

const Nav = () => {
  
  const [oculto, setOculto] = useState(true)
  
  return (
    <>
      
      {oculto ? (
        <>
        <header className="header">
        <div className="container-menu" onClick={() => setOculto(false)}>
          <OpenMenu />
        </div>
        </header>
        </>
      ):(
        <>
        <header className="header">
        <div className="container-menu" onClick={() => setOculto(true)}>
          <CloseMenu />
        </div>

        
        <div className="header__logo--container">
          <Logo className="header__logo--container--svg" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav__ul">
            <li className="header__nav__ul--li"></li>

            <Link to="/" className="header__nav__ul--li">
              Home
            </Link>
            <Link to="/about" className="header__nav__ul--li">
              About
            </Link>
            <Link to="/technologies" className="header__nav__ul--li">
              Technologies
            </Link>
            <Link to="/works" className="header__nav__ul--li">
              Works
            </Link>
            <Link to="/contact" className="header__nav__ul--li">
              Contact
            </Link>
          </ul>
        </nav>
      </header>

      <footer className="footer">
        <Icon
          icon={twitterIcon}
          className="footer__icon"
          width="16"
          height="16"
        />
        <Icon
          icon={bxlWhatsapp}
          className="footer__icon"
          width="16"
          height="16"
        />
        <Icon
          icon={facebookIcon}
          className="footer__icon"
          width="14"
          height="14"
        />
        <Icon
          icon={instagramFilled}
          className="footer__icon"
          width="16"
          height="16"
        />
      </footer>

      </>
      


      )}


    </>
  )
}

export default Nav
