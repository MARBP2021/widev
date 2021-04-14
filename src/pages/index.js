import * as React from "react";
import Helmet from 'react-helmet';
import {Global,css} from '@emotion/react';

const IndexPage = () =>

  (
  <>
  <Helmet>
    <title>Welcome to WIDev</title>
    <link href = "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"/>

  </Helmet>

  <Global
    styles = {css`
      body{
        font-family: 'Poppins', sans-serif;    
        background-color:#1B1F2B;
      }
    `}
  />

  <h1 
    css = {css `
      color: white;
      font-weight: bold;
      width: 200px;
    `}
  >
  Hello,
  we’re WiDev,
  a web developer team</h1>



  </>
)

export default IndexPage 

