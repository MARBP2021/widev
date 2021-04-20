
import * as React from "react";
import Logo from '../images/logo-menu.svg';
import {Icon} from '@iconify/react';
import twitterIcon from '@iconify-icons/logos/twitter';
import bxlWhatsapp from '@iconify-icons/bx/bxl-whatsapp';
import facebookIcon from '@iconify-icons/bi/facebook';
import instagramFilled from '@iconify-icons/ant-design/instagram-filled';



const Header = () => {
    
    return ( 
        <>

        <Logo />

        <header className = "header">
            <nav className = "header__nav">
                <ul className = "header__nav__ul">
                    <li className = "header__nav__ul--li">Home</li>
                    <li className = "header__nav__ul--li" >About</li>
                    <li className = "header__nav__ul--li">Technologies</li>
                    <li className = "header__nav__ul--li">Works</li>
                    <li className = "header__nav__ul--li">Contact</li>
                </ul>
            </nav>
        </header>

        <Icon icon={twitterIcon} />
        <Icon icon={bxlWhatsapp} />
        <Icon icon={facebookIcon} />
        <Icon icon={instagramFilled} />
     </>
     );
}
 
export default Header;