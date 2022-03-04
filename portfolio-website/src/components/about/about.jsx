import React from 'react'
import './about.css'
import Me from '../../assets/me.png'

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
          <article>

          </article>
        </div>
      </div>
    </section>
  )
}

export default about