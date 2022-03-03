import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FiDribbble} from 'react-icons/fi'

const headersocial = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FiGithub /></a>
        <a href="https://dribble.com" target="_blank" rel="noreferrer"><FiDribbble /></a>
    </div>
  )
}

export default headersocial