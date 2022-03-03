import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './headersocial'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi, I am</h5>
        <h1>Lawal Abubakar Babatunde</h1>
        <h5 className="text-light">Fullstack Blockchain Developer</h5>
        <CTA />
        <a href="#contact" className="scroll_down">Scroll Down</a>
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default header