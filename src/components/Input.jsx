import React from "react"
import "../styles/input.css"

export default function Input({ type, name, placeholder }) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  )
}
