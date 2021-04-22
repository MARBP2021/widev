import React from "react"
import { Icon } from "@iconify/react"
import twitterIcon from "@iconify-icons/logos/twitter"
import bxlWhatsapp from "@iconify-icons/bx/bxl-whatsapp"
import facebookIcon from "@iconify-icons/bi/facebook"
import instagramFilled from "@iconify-icons/ant-design/instagram-filled"

const FooterNav = () => {
  return (
    <>
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
  )
}

export default FooterNav
