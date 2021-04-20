import React from "react"
import { Icon } from "@iconify/react"
import bxMenu from "@iconify-icons/bx/bx-menu"

const OpenMenu = () => {
  return (
    <>
      <div className="menu">
        <Icon icon={bxMenu} color="#ffffff" className="menu__icon" />
      </div>
    </>
  )
}

export default OpenMenu
