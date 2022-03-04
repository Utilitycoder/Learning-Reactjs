import React from 'react'
import './about.css'
import Me from '../../assets/me.png'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="about_me">
        <div className="about_me-image">
          <img src={Me} alt="About Me" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
            <FiAward className="about_card_icon"/>
            <h5>Experience</h5>
            <small>2 Years Working Experience</small>
          </article>
          <article className="about_card">
            <FiUsers className="about_card_icon"/>
            <h5>Clients</h5>
            <small>20+ Worldwide</small>
          </article>
          <article className="about_card">
            <VscFolderLibrary className="about_card_icon"/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
          <p>
            
          </p>
        </div>
      </div>
    </section>
  )
}

export default about