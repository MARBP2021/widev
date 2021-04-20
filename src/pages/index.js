import React from 'react';
import Helmet from 'react-helmet';
import {Icon} from '@iconify/react';
import bxMenu from '@iconify-icons/bx/bx-menu';
import Header from '../components/Header.jsx'
import './index.css';

const IndexPage = () =>

  (
  <>
  <Helmet>
    <title>Welcome to WIDev</title>
    <link href = "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"/>
  </Helmet>

  <div className  = "container-menu">    
  <div className = "menu">

      <Icon 
        icon={bxMenu} 
        color="#ffffff" 
        className = "menu__icon"
      />

    </div>
  </div>

  <h1 className = "title-h1">
  Hello,
  we’re WiDev,
  a web developer team
  </h1>
  </>
)

export default IndexPage 

