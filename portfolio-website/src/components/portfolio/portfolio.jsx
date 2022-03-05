import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Zombiverze NFT" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn">Github</a>
          <a href="https://zombieverze.club" target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Zombiverze NFT" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn">Github</a>
          <a href="https://zombieverze.club" target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Zombiverze NFT" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn">Github</a>
          <a href="https://zombieverze.club" target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Zombiverze NFT" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn">Github</a>
          <a href="https://zombieverze.club" target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Zombiverze NFT" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn">Github</a>
          <a href="https://zombieverze.club" target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio