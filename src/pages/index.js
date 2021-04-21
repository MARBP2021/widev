import React from "react"
import Head from "../components/Head"
import Nav from "../components/Nav.js"
import Home from "../components/Home"
import "./reset.min.css"
import "./index.css"

const IndexPage = () => {

  return (
    <>
      <Head />
      <Nav/>
    { /* 
      {oculto ? (
        <div className="container-menu" onClick={() => setOculto(false)}>
          <OpenMenu />
        </div>
      ) : (
        <div className="container-menu" onClick={() => setOculto(true)}>
          <CloseMenu />
        </div>
      )}
    */}
      <Home />
      
    
    </>
  )
}

export default IndexPage
