import React from "react"
import { Link } from "gatsby"
import "../styles/button.css"

export default function Button({ message, route }) {
  return (
    <Link className="button" to={route} role="button">
      {message}
    </Link>
  )
}
