import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'

const projects = [
  {
    id:1,
    image: IMG1,
    title: 'Zombieverze Website',
    github: 'https://github.com',
    link: 'https://zombieverze.club'
  },
  {
    id:2,
    image: IMG1,
    title: 'Zombieverze Website',
    github: 'https://github.com',
    link: 'https://zombieverze.club'
  },
  {
    id:3,
    image: IMG1,
    title: 'Zombieverze Website',
    github: 'https://github.com',
    link: 'https://zombieverze.club'
  },
  {
    id:4,
    image: IMG1,
    title: 'Zombieverze Website',
    github: 'https://github.com',
    link: 'https://zombieverze.club'
  },
  {
    id:5,
    image: IMG1,
    title: 'Zombieverze Website',
    github: 'https://github.com',
    link: 'https://zombieverze.club'
  },
  {
    id:6,
    image: IMG1,
    title: 'Zombieverze Website',
    github: 'https://github.com',
    link: 'https://zombieverze.club'
  },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
       { 
          projects.map(({id, image, title, github, link}) => {
            return (
              <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio_item-cta">
              <a href={github} target="_blank" rel="noreferrer" className="btn">Github</a>
              <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio