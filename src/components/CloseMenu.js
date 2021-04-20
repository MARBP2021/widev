import React from "react"
import { Icon } from "@iconify/react"
import closeFill from "@iconify-icons/eva/close-fill"

const CloseMenu = () => {
  return (
    <>
      <div className="menu">
        <Icon icon={closeFill} color="#ffffff" className="menu__icon" />
      </div>
    </>
  )
}

export default CloseMenu
